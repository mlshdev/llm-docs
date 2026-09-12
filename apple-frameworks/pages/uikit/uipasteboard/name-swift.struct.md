> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/name-swift.struct](https://developer.apple.com/documentation/uikit/uipasteboard/name-swift.struct)

# UIPasteboard.Name (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that identify the name of a pasteboard.

## Declaration

```swift
struct Name
```

## Topics

### Names

- [general](name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.

### Initializers

- [init(\_:)](name-swift.struct/init%28__%29.md)
- [init(rawValue:)](name-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Pasteboard Names](../pasteboard-names.md): Names identifying the system pasteboards.
- [UIPasteboard.OptionsKey](optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](../pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.

# UIPasteboardName (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that identify the name of a pasteboard.

## Declaration

```objectivec
typedef NSString * UIPasteboardName;
```

## Topics

### Names

- [UIPasteboardNameGeneral](name-swift.struct/general.md): The name identifying the general pasteboard, which you use for general copy-cut-paste operations.

## See Also

### Constants

- [Pasteboard Names](../pasteboard-names.md): Names identifying the system pasteboards.
- [UIPasteboardOption](optionskey.md): Options for describing pasteboard privacy.
- [Pasteboard Data Type Representations](../pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.
