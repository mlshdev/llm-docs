> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingitem/imagecomponentkey](https://developer.apple.com/documentation/appkit/nsdraggingitem/imagecomponentkey)

# NSDraggingItem.ImageComponentKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Keys that identify components of a dragging image.

## Declaration

```swift
struct ImageComponentKey
```

## Topics

### Initializing a component key

- [init(\_:)](imagecomponentkey/init%28__%29.md): Creates an image component key using the string you provide.
- [init(rawValue:)](imagecomponentkey/init%28rawvalue_%29.md): Creates an image component key using the string you provide.

### Image component keys

- [icon](imagecomponentkey/icon.md): A key for a corresponding value that is a dragging item’s image.
- [label](imagecomponentkey/label.md): A key for a corresponding value that represents a textual label for a dragging item, for example, a file name.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.

# NSDraggingImageComponentKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Keys that identify components of a dragging image.

## Declaration

```objectivec
typedef NSString * NSDraggingImageComponentKey;
```

## Topics

### Image component keys

- [NSDraggingImageComponentIconKey](imagecomponentkey/icon.md): A key for a corresponding value that is a dragging item’s image.
- [NSDraggingImageComponentLabelKey](imagecomponentkey/label.md): A key for a corresponding value that represents a textual label for a dragging item, for example, a file name.

## See Also

### Drag image components

- [imageComponents](imagecomponents.md): An array of dragging image components to use to create the drag image.
- [imageComponentsProvider](imagecomponentsprovider.md): An array of blocks that provide the dragging image components.
- [item](item.md): The pasteboard reader or writer object dependent on the context where you use the dragging item.
