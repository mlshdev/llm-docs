> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewrowaction/style-swift.enum](https://developer.apple.com/documentation/appkit/nstableviewrowaction/style-swift.enum)

# NSTableViewRowAction.Style (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that help define the appearance and behavior of action buttons.

## Declaration

```swift
enum Style
```

## Topics

### Constants

- [NSTableViewRowAction.Style.regular](style-swift.enum/regular.md): Apply the default style to the button. This style does not apply any special coloring to the button.
- [NSTableViewRowAction.Style.destructive](style-swift.enum/destructive.md): Apply a style that indicates that the action might change or delete data. This style changes the value of the [backgroundColor](backgroundcolor.md) property to an appropriate value to reflect the destructive action. After creating the action object, you can change the background color as needed. Destructive actions require a longer swipe to activate, and trigger an animation when a table row is deleted.

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

# NSTableViewRowActionStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Constants that help define the appearance and behavior of action buttons.

## Declaration

```objectivec
enum NSTableViewRowActionStyle : NSInteger;
```

## Topics

### Constants

- [NSTableViewRowActionStyleRegular](style-swift.enum/regular.md): Apply the default style to the button. This style does not apply any special coloring to the button.
- [NSTableViewRowActionStyleDestructive](style-swift.enum/destructive.md): Apply a style that indicates that the action might change or delete data. This style changes the value of the [backgroundColor](backgroundcolor.md) property to an appropriate value to reflect the destructive action. After creating the action object, you can change the background color as needed. Destructive actions require a longer swipe to activate, and trigger an animation when a table row is deleted.
