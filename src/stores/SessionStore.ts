import { create } from 'zustand'
import { SessionData } from '../app/home/page'
import { AccumulatedSessionData } from 'lib/utils'

interface SessionStore {
  sessions: Record<string, SessionData[]>
  setSessions: (id: string, data: SessionData[]) => void
  accumulated: Record<string, AccumulatedSessionData>
  setAccumulatedSessions: (id: string, data: AccumulatedSessionData) => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  sessions: {},
  setSessions: (id, data) => set((state) => ({ 
    sessions: { ...state.sessions, [id]: data } 
  })),
  accumulated: {},
  setAccumulatedSessions: (id, data) => set((state) => ({
    accumulated: { ...state.accumulated, [id]: data }
  }))
}))