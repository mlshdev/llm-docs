> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/descriptionitemattr

# SecItemAttr.descriptionItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the description attribute.

## Declaration

```swift
case descriptionItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents a user-visible string describing this particular kind of item, for example “disk image password”. Keychain strings should use UTF-8 encoding.

# kSecDescriptionItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the description attribute.

## Declaration

```objectivec
kSecDescriptionItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents a user-visible string describing this particular kind of item, for example “disk image password”. Keychain strings should use UTF-8 encoding.
