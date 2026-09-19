> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/labelitemattr

# SecItemAttr.labelItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the label attribute.

## Declaration

```swift
case labelItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents a user-editable string containing the label for this item. Keychain strings should use UTF-8 encoding.

# kSecLabelItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the label attribute.

## Declaration

```objectivec
kSecLabelItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string value that represents a user-editable string containing the label for this item. Keychain strings should use UTF-8 encoding.
