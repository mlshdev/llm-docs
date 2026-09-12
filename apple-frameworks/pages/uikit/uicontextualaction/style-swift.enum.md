> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextualaction/style-swift.enum](https://developer.apple.com/documentation/uikit/uicontextualaction/style-swift.enum)

# UIContextualAction.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the style information that applies to the action button.

## Declaration

```swift
enum Style
```

## Topics

### Styles

- [UIContextualAction.Style.normal](style-swift.enum/normal.md): A normal action.
- [UIContextualAction.Style.destructive](style-swift.enum/destructive.md): An action that deletes data or performs some type of destructive task.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the configuration details

- [handler](handler-swift.property.md): The handler block to execute when the user selects the action.
- [UIContextualAction.Handler](handler-swift.typealias.md): The handler block to call in response to the selection of an action.
- [style](style-swift.property.md): The style that applies to the action button.

# UIContextualActionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants indicating the style information that applies to the action button.

## Declaration

```objectivec
enum UIContextualActionStyle : NSInteger;
```

## Topics

### Styles

- [UIContextualActionStyleNormal](style-swift.enum/normal.md): A normal action.
- [UIContextualActionStyleDestructive](style-swift.enum/destructive.md): An action that deletes data or performs some type of destructive task.

## See Also

### Getting the configuration details

- [handler](handler-swift.property.md): The handler block to execute when the user selects the action.
- [UIContextualActionHandler](handler-swift.typealias.md): The handler block to call in response to the selection of an action.
- [style](style-swift.property.md): The style that applies to the action button.
