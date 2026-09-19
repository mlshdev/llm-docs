> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/addressitemattr

# SecItemAttr.addressItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the address attribute.

## Declaration

```swift
case addressItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `string` that represents the AppleTalk zone name, or the IP or domain name that represents the server address. This is unique to AppleShare password attributes. Keychain strings should use UTF-8 encoding.

# kSecAddressItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the address attribute.

## Declaration

```objectivec
kSecAddressItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `string` that represents the AppleTalk zone name, or the IP or domain name that represents the server address. This is unique to AppleShare password attributes. Keychain strings should use UTF-8 encoding.
