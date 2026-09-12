> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.applesignin](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.applesignin)

# Sign in with Apple Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An entitlement that lets your app use Sign in with Apple.

## Details

`com.apple.developer.applesignin`

## Possible Values

- `Default`: The value used for normal operation.

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app with the correct associated value, enable the Sign in with Apple capability in Xcode. For information about letting users log into your apps and services with their Apple ID, see [ASAuthorizationAppleIDProvider](../../authenticationservices/asauthorizationappleidprovider.md).

## See Also

### Authentication

- [Account Creation Requires Phone Number](com.apple.developer.authentication-services.account-creation-requires-phone-number.md): A Boolean value that indicates whether an app requires someone to provide a phone number to create an account.
- [AutoFill Credential Provider Entitlement](com.apple.developer.authentication-services.autofill-credential-provider.md): A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.
