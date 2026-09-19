> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/volumeitemattr

# SecItemAttr.volumeItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the volume attribute.

## Declaration

```swift
case volumeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents the AppleShare volume. This is unique to AppleShare password attributes. Keychain strings should use UTF-8 encoding.

# kSecVolumeItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the volume attribute.

## Declaration

```objectivec
kSecVolumeItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents the AppleShare volume. This is unique to AppleShare password attributes. Keychain strings should use UTF-8 encoding.
