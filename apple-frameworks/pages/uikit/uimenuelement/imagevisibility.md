> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/imagevisibility](https://developer.apple.com/documentation/uikit/uimenuelement/imagevisibility)

# UIMenuElement.ImageVisibility (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Visibility options for a menu element’s image.

## Declaration

```swift
enum ImageVisibility
```

## Topics

### Enumeration Cases

- [UIMenuElement.ImageVisibility.automatic](imagevisibility/automatic.md): The element’s image visibility is determined by the platform and context.
- [UIMenuElement.ImageVisibility.hidden](imagevisibility/hidden.md): The element prefers its image to be hidden, even in contexts where images are shown by default.
- [UIMenuElement.ImageVisibility.visible](imagevisibility/visible.md): The element prefers its image to be visible, even in contexts where images are not shown by default.

### Initializers

- [init(rawValue:)](imagevisibility/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UIMenuElementImageVisibility (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Visibility options for a menu element’s image.

## Declaration

```objectivec
enum UIMenuElementImageVisibility : NSInteger;
```

## Topics

### Enumeration Cases

- [UIMenuElementImageVisibilityAutomatic](imagevisibility/automatic.md): The element’s image visibility is determined by the platform and context.
- [UIMenuElementImageVisibilityHidden](imagevisibility/hidden.md): The element prefers its image to be hidden, even in contexts where images are shown by default.
- [UIMenuElementImageVisibilityVisible](imagevisibility/visible.md): The element prefers its image to be visible, even in contexts where images are not shown by default.
