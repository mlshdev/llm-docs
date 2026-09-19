> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/accountitemattr

# SecItemAttr.accountItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the account attribute.

## Declaration

```swift
case accountItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the user account. It also applies to generic, Internet, and AppleShare password items. Keychain strings should use UTF-8 encoding.

# kSecAccountItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the account attribute.

## Declaration

```objectivec
kSecAccountItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the user account. It also applies to generic, Internet, and AppleShare password items. Keychain strings should use UTF-8 encoding.
