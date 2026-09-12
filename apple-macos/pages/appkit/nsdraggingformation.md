> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingformation](https://developer.apple.com/documentation/appkit/nsdraggingformation)

# NSDraggingFormation (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that control the visual format of multiple dragging items.

## Declaration

```swift
enum NSDraggingFormation
```

## Topics

### Constants

- [NSDraggingFormation.default](nsdraggingformation/default.md): A constant that represents the system determined formation.
- [NSDraggingFormation.none](nsdraggingformation/none.md): A constant that represents no custom formation, so drag images maintain their set positions relative to each other.
- [NSDraggingFormation.pile](nsdraggingformation/pile.md): A constant that represents a pile formation, so drag images display on top of each other with random rotations.
- [NSDraggingFormation.list](nsdraggingformation/list.md): A constant that represents a list formation, so drag images display vertically, non-overlapping with the left edges aligned.
- [NSDraggingFormation.stack](nsdraggingformation/stack.md): A constant that represents a stack formation, so drag images display overlapping diagonally.

### Initializers

- [init(rawValue:)](nsdraggingformation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

# NSDraggingFormation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that control the visual format of multiple dragging items.

## Declaration

```objectivec
enum NSDraggingFormation : NSInteger;
```

## Topics

### Constants

- [NSDraggingFormationDefault](nsdraggingformation/default.md): A constant that represents the system determined formation.
- [NSDraggingFormationNone](nsdraggingformation/none.md): A constant that represents no custom formation, so drag images maintain their set positions relative to each other.
- [NSDraggingFormationPile](nsdraggingformation/pile.md): A constant that represents a pile formation, so drag images display on top of each other with random rotations.
- [NSDraggingFormationList](nsdraggingformation/list.md): A constant that represents a list formation, so drag images display vertically, non-overlapping with the left edges aligned.
- [NSDraggingFormationStack](nsdraggingformation/stack.md): A constant that represents a stack formation, so drag images display overlapping diagonally.

## See Also

### Constants

- [NSDragOperation](nsdragoperation.md): A group of constants that represent which operations the dragging source can perform on dragging items.
- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.
