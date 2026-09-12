> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/providespasskeys](https://developer.apple.com/documentation/bundleresources/information-property-list/nsextension/nsextensionattributes/ascredentialproviderextensioncapabilities/providespasskeys)

# ProvidesPasskeys

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+

A Boolean value that indicates whether your credential provider extension provides passkeys.

## Details

`ProvidesPasskeys`

<a id="Discussion"></a>

## Discussion

The operating system includes your extension’s passkeys in AutoFill and sign in sheets if this value is `true`.

## See Also

### Providing credentials

- [SupportsConditionalPasskeyRegistration](../../../supportsconditionalpasskeyregistration.md): Indicates that the credential provider supports automatic passkey upgrades.
- [ProvidesPasswords](providespasswords.md): A Boolean value that indicates whether your credential provider extension provides passwords.
- [ProvidesOneTimeCodes](../../../providesonetimecodes.md): Allows this credential provider to show up in one-time-code text fields, to allowing filling time-based verification codes.
