> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfchooseidentitypanel/runmodal(foridentities:message:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/runmodal(foridentities:message:))

# runModal(forIdentities:message:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a list of identities in a modal panel.

## Declaration

```swift
func runModal(forIdentities identities: [Any]!, message: String!) -> Int
```

## Parameters

- `identities`: An array of identity objects (objects of type [SecIdentity](https://developer.apple.com/documentation/security/secidentity). Use the [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) function (in Security/SecIdentitySearch.h) to find identity objects.
- `message`: A message string to display in the panel.

<a id="Discussion"></a>

## Discussion

This method returns [NSOKButton](../../appkit/nsokbutton.md) if the default button is clicked, or [NSCancelButton](../../appkit/nscancelbutton.md) if the alternate button is clicked.

Use the [identity()](identity%28%29.md) method to obtain the identity chosen by the user.

## See Also

### Related Documentation

- [identity()](identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Displaying a Sheet or Panel

- [beginSheet(for:modalDelegate:didEnd:contextInfo:identities:message:)](beginsheet%28for_modaldelegate_didend_contextinfo_identities_message_%29.md): Displays a list of identities in a modal sheet from which the user can select an identity.

# runModalForIdentities:message: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Displays a list of identities in a modal panel.

## Declaration

```objectivec
- (NSInteger) runModalForIdentities:(NSArray *) identities message:(NSString *) message;
```

## Parameters

- `identities`: An array of identity objects (objects of type [SecIdentityRef](https://developer.apple.com/documentation/security/secidentity). Use the [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext) function (in Security/SecIdentitySearch.h) to find identity objects.
- `message`: A message string to display in the panel.

<a id="Discussion"></a>

## Discussion

This method returns [NSOKButton](../../appkit/nsokbutton.md) if the default button is clicked, or [NSCancelButton](../../appkit/nscancelbutton.md) if the alternate button is clicked.

Use the [identity](identity%28%29.md) method to obtain the identity chosen by the user.

## See Also

### Related Documentation

- [SecIdentitySearchCopyNext](https://developer.apple.com/documentation/security/secidentitysearchcopynext): Deprecated. Finds the next identity matching specified search criteria
- [identity](identity%28%29.md): Returns the identity that the user chose in the panel or sheet.

### Displaying a Sheet or Panel

- [beginSheetForWindow:modalDelegate:didEndSelector:contextInfo:identities:message:](beginsheet%28for_modaldelegate_didend_contextinfo_identities_message_%29.md): Displays a list of identities in a modal sheet from which the user can select an identity.
