> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/integrating-with-roster-api-and-sign-in-with-apple](https://developer.apple.com/documentation/rosterapi/integrating-with-roster-api-and-sign-in-with-apple)

# Integrating with Roster API and Sign in with Apple

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Article

Associate someone’s Managed Apple Account with their identity in Apple School Manager.

<a id="overview"></a>

## Overview

When your app uses [Sign in with Apple](https://developer.apple.com/documentation/signinwithapple) to authenticate someone, Apple checks whether that person’s Managed Apple Account is associated with an Apple School Manager (ASM) organization that’s authorized Roster API for your app. The identity token contains identifiers that you use with Roster API to fetch information about the organization and person.

For more information about decoding an identity token that you receive from Sign in with Apple, see [id_token](../signinwithapplejs/authorizationi/id_token.md). The decoded identity token is a JSON object with the fields shown in the example below.

```javascript
{
    "iss": "https://appleid.apple.com",
    "aud": "com.example.testapp",
    "exp": 1676417226,
    "iat": 1676330826,
    "sub": "000264.UDRoeTAxVUppaHdNQU5HYWN6MEU5VDRUWFVQU1BV.RUtP",
    "c_hash": "ZIglL3bJ-8LuXX9xiAWnXQ",
    "email": "teacher@example.com",
    "email_verified": "false",
    "org_id": "8e257987-f221-4171-887d-efead972993b",
    "auth_time": 1676330826,
    "nonce_supported": true
}
```

<a id="Compare-the-organization-identifiers"></a>

### Compare the organization identifiers

If somebody authenticates with Sign in with Apple using a Managed Apple Account, the decoded identity token includes an `org_id` claim that identifies their organization. Compare the value in token’s `org_id` with the `id` you receive from a [Read the organization](returns-organization-infrmation.md) request. If the two identifiers are equal, then the person who authenticated is a user in an organization that’s authorized Roster API for your app.

<a id="Fetch-the-users-record"></a>

### Fetch the user’s record

When the Managed Apple Account is associated with an organization that authorized Roster API for your app, the Sign in with Apple user identifier is the same as their user identifier in Roster API. Get the user identifier from the `sub` value in the decoded identity token, and pass it as the `userId` to a [Read a user](returns-a-specific-user-in-an-apple-school-manager-organization.md) request.

## See Also

### Related Documentation

- [Authenticating users with Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/authenticating-users-with-sign-in-with-apple): Securely authenticate users and create accounts for them in your app.
