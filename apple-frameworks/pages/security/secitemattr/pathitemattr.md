> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/pathitemattr

# SecItemAttr.pathItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the path attribute.

## Declaration

```swift
case pathItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents the path. This is unique to Internet password attributes. Keychain strings should use UTF-8 encoding.

# kSecPathItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the path attribute.

## Declaration

```objectivec
kSecPathItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents the path. This is unique to Internet password attributes. Keychain strings should use UTF-8 encoding.
