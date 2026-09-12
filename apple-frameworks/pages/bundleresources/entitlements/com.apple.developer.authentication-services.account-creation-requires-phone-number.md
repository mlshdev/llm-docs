> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.authentication-services.account-creation-requires-phone-number](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.authentication-services.account-creation-requires-phone-number)

# Account Creation Requires Phone Number

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A Boolean value that indicates whether an app requires someone to provide a phone number to create an account.

## Details

`com.apple.developer.authentication-services.account-creation-requires-phone-number`

<a id="Discussion"></a>

## Discussion

When your app calls [createPlatformPublicKeyCredentialRegistrationRequest(acceptedContactIdentifiers:shouldRequestName:relyingPartyIdentifier:challenge:userID:)](../../authenticationservices/asauthorizationaccountcreationprovider/createplatformpublickeycredentialregistrationrequest%28acceptedcontactidentifiers_shouldrequestname_relyingpartyidentifier_challenge_userid_%29.md) to start the account-creation flow, the `acceptedContactIdentifiers` array can contain [ASContactIdentifierRequest.email](../../authenticationservices/ascontactidentifierrequest/email.md), [ASContactIdentifierRequest.phoneNumber](../../authenticationservices/ascontactidentifierrequest/phonenumber.md), or both. If the array only contains `phoneNumber`, then you must include the  `com.apple.developer.authentication-services.account-creation-requires-phone-number` entitlement in your app in Xcode, which states your app always requires a person’s phone number to create an account, with or without the use of the Account Creation API.

If your call to [createPlatformPublicKeyCredentialRegistrationRequest(acceptedContactIdentifiers:shouldRequestName:relyingPartyIdentifier:challenge:userID:)](../../authenticationservices/asauthorizationaccountcreationprovider/createplatformpublickeycredentialregistrationrequest%28acceptedcontactidentifiers_shouldrequestname_relyingpartyidentifier_challenge_userid_%29.md) allows use of an email to create an account, or a choice of email or phone number, you don’t need this entitlement.

## See Also

### Authentication

- [AutoFill Credential Provider Entitlement](com.apple.developer.authentication-services.autofill-credential-provider.md): A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.
- [Sign in with Apple Entitlement](com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
