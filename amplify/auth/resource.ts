import { defineAuth, secret } from '@aws-amplify/backend';
import { addUserToGroup } from '../data/add-user-to-group/resource';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
      },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
    },
  },
  groups: ["ADMINS"],
  access: (allow) => [
    allow.resource(addUserToGroup).to(["addUserToGroup"])
  ]
});
