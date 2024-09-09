export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Spinner() {
  return (
    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

export function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="text-gray-100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" rx="16" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="black"
      />
    </svg>
  );
}

export function HarmonicaLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="147" height="13" viewBox="0 0 147 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.30466 12.1246H0V0.449875H4.30466V4.57517H10.6801V0.449875H15.0011V12.1246H10.6801V7.47755H4.30466V12.1246Z" fill="black"/>
        <path d="M20.6025 12.1246H16.1348L21.9722 0.449875H26.9617L32.636 12.1246H28.1846L27.2878 10.1027H21.483L20.6025 12.1246ZM24.3854 3.07506L22.2983 7.70583H26.4725L24.418 3.07506H24.3854Z" fill="black"/>
        <path d="M46.5722 12.4507C44.7786 12.4507 43.8818 11.4072 43.197 10.4288L42.5122 9.30377C42.023 8.60263 41.3219 8.26022 40.5066 8.26022H38.0934V12.1246H33.7887V0.449875H43.6373C46.7679 0.449875 48.5778 1.80323 48.5778 4.15123C48.5778 5.91222 47.3223 7.13514 45.1863 7.54277V7.55908C45.5776 7.68952 45.9363 8.03194 46.2135 8.43958L47.0125 9.64618C47.2408 9.9723 47.5343 10.168 48.0071 10.168C48.2843 10.168 48.6757 10.0375 48.8713 9.80924L49.5562 11.5376C48.9202 12.0757 47.6321 12.4507 46.5722 12.4507ZM38.0934 2.97723V5.86331H42.3165C43.5394 5.86331 44.2569 5.32522 44.2569 4.41212C44.2569 3.51531 43.5394 2.97723 42.3328 2.97723H38.0934Z" fill="black"/>
        <path d="M54.7511 12.1246H50.691V0.449875H56.2349L60.295 8.32544H60.3276L64.3225 0.449875H69.9479V12.1246H65.8878V4.83606H65.8552L62.2027 12.1246H58.5666L54.7837 4.85236H54.7511V12.1246Z" fill="black"/>
        <path d="M80.1918 12.5323C75.0393 12.5323 71.6151 10.0375 71.6151 6.28725C71.6151 2.52067 75.0393 0.0422363 80.1918 0.0422363C85.3443 0.0422363 88.7685 2.52067 88.7685 6.28725C88.7685 10.0375 85.3443 12.5323 80.1918 12.5323ZM80.1918 9.51574C82.7518 9.51574 84.4475 8.22761 84.4475 6.28725C84.4475 4.34689 82.7518 3.05876 80.1918 3.05876C77.6318 3.05876 75.9197 4.34689 75.9197 6.28725C75.9197 8.22761 77.6318 9.51574 80.1918 9.51574Z" fill="black"/>
        <path d="M94.4952 12.1246H90.4351V0.449875H95.6039L101.865 8.03194H101.882V0.449875H105.942V12.1246H100.773L94.5115 4.44473H94.4952V12.1246Z" fill="black"/>
        <path d="M112.183 12.1246H107.895V0.449875H112.183V12.1246Z" fill="black"/>
        <path d="M122.379 12.4018C117.161 12.4018 113.851 10.1517 113.851 6.28725C113.851 2.53698 116.965 0.156375 121.889 0.156375C125.64 0.156375 128.526 1.78693 129.308 4.3632L125.395 5.16217C124.988 3.95556 123.667 3.1892 122.004 3.1892C119.656 3.1892 118.155 4.3795 118.155 6.28725C118.172 8.17869 119.851 9.3853 122.493 9.3853C124.58 9.3853 126.129 8.47219 126.455 7.021L130.434 7.72214C129.814 10.5919 126.7 12.4018 122.379 12.4018Z" fill="black"/>
        <path d="M134.588 12.1246H130.12L135.957 0.449875H140.947L146.621 12.1246H142.17L141.273 10.1027H135.468L134.588 12.1246ZM138.37 3.07506L136.283 7.70583H140.458L138.403 3.07506H138.37Z" fill="black"/>
    </svg>

    )
}
