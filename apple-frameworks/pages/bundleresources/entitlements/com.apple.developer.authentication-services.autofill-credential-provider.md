> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.authentication-services.autofill-credential-provider](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.authentication-services.autofill-credential-provider)

# AutoFill Credential Provider Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the app may, with user permission, provide user names and passwords for AutoFill in Safari and other apps.

## Details

`com.apple.developer.authentication-services.autofill-credential-provider`

<a id="Discussion"></a>

## Discussion

To add this entitlement to a target, enable the AutoFill Credential Provider capability in Xcode. Do this for both your Password AutoFill extension and its host app.

## See Also

### Authentication

- [Account Creation Requires Phone Number](com.apple.developer.authentication-services.account-creation-requires-phone-number.md): A Boolean value that indicates whether an app requires someone to provide a phone number to create an account.
- [Sign in with Apple Entitlement](com.apple.developer.applesignin.md): An entitlement that lets your app use Sign in with Apple.
