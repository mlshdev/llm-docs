> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/serviceitemattr

# SecItemAttr.serviceItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the service attribute.

## Declaration

```swift
case serviceItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the service associated with this item, for example, “iTools”. This is unique to generic password attributes. Keychain strings should use UTF-8 encoding.

# kSecServiceItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the service attribute.

## Declaration

```objectivec
kSecServiceItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the service associated with this item, for example, “iTools”. This is unique to generic password attributes. Keychain strings should use UTF-8 encoding.
