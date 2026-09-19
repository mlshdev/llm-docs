> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/asaccountauthenticationmodificationpasswordgenerationrequirements

# ASAccountAuthenticationModificationPasswordGenerationRequirements

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · visionOS 1.0+

The rules the system satisfies when generating a strong password for your extension during an automatic upgrade.

## Details

`ASAccountAuthenticationModificationPasswordGenerationRequirements`

<a id="Discussion"></a>

## Discussion

For more information about the format and content of this value, see [Customizing Password AutoFill rules](../../../security/customizing-password-autofill-rules.md).

## See Also

### Authentication

- [ASAccountAuthenticationModificationSupportsStrongPasswordChange](asaccountauthenticationmodificationsupportsstrongpasswordchange.md): A Boolean value that indicates whether the extension supports upgrading a user’s password to a strong password.
- [ASAccountAuthenticationModificationSupportsUpgradeToSignInWithApple](asaccountauthenticationmodificationsupportsupgradetosigninwithapple.md): A Boolean value that indicates whether the extension supports upgrading from using password authentication to using Sign in with Apple.
