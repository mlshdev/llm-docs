> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/optionskey](https://developer.apple.com/documentation/uikit/uipasteboard/optionskey)

# UIPasteboard.OptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Options for describing pasteboard privacy.

## Declaration

```swift
struct OptionsKey
```

<a id="overview"></a>

## Overview

Use these options with the [setItems(\_:options:)](setitems%28__options_%29.md) method. Options that you set apply to all the items on a pasteboard.

## Topics

### Constants

- [expirationDate](optionskey/expirationdate.md): The time and date that you want the system to remove the pasteboard items from the pasteboard.
- [localOnly](optionskey/localonly.md): A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

### Initializers

- [init(rawValue:)](optionskey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIPasteboard.Name](name-swift.struct.md): Constants that identify the name of a pasteboard.
- [Pasteboard Names](../pasteboard-names.md): Names identifying the system pasteboards.
- [Pasteboard Data Type Representations](../pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.

# UIPasteboardOption (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Options for describing pasteboard privacy.

## Declaration

```objectivec
typedef NSString * UIPasteboardOption;
```

<a id="overview"></a>

## Overview

Use these options with the [setItems:options:](setitems%28__options_%29.md) method. Options that you set apply to all the items on a pasteboard.

## Topics

### Constants

- [UIPasteboardOptionExpirationDate](optionskey/expirationdate.md): The time and date that you want the system to remove the pasteboard items from the pasteboard.
- [UIPasteboardOptionLocalOnly](optionskey/localonly.md): A Boolean value that specifies that the pasteboard items should not be available to other devices through the Handoff feature.

## See Also

### Constants

- [UIPasteboardName](name-swift.struct.md): Constants that identify the name of a pasteboard.
- [Pasteboard Names](../pasteboard-names.md): Names identifying the system pasteboards.
- [Pasteboard Data Type Representations](../pasteboard-data-type-representations.md): Pasteboard-item representation types, as for a given object value.
- [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md): Use these keys to access the representation types of pasteboard items that you add to, or remove from, a pasteboard.
