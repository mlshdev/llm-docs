> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilayoutpriority](https://developer.apple.com/documentation/uikit/uilayoutpriority)

# UILayoutPriority (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The layout priority is used to indicate to the constraint-based layout system which constraints are more important, allowing the system to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

## Declaration

```swift
struct UILayoutPriority
```

## Topics

### Constants

- [required](uilayoutpriority/required.md): A required constraint.
- [defaultHigh](uilayoutpriority/defaulthigh.md): The priority level with which a button resists compressing its content.
- [dragThatCanResizeScene](uilayoutpriority/dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [sceneSizeStayPut](uilayoutpriority/scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [dragThatCannotResizeScene](uilayoutpriority/dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [defaultLow](uilayoutpriority/defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [fittingSizeLevel](uilayoutpriority/fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.

### Initializers

- [init(\_:)](uilayoutpriority/init%28__%29.md): Creates a layout priority structure.
- [init(rawValue:)](uilayoutpriority/init%28rawvalue_%29.md): Creates a layout priority structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the layout priority

- [priority](nslayoutconstraint/priority.md): The priority of the constraint.
- [NSLayoutConstraint.Priority](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

# UILayoutPriority (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The layout priority is used to indicate to the constraint-based layout system which constraints are more important, allowing the system to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

## Declaration

```objectivec
typedef float UILayoutPriority;
```

## Topics

### Constants

- [UILayoutPriorityRequired](uilayoutpriority/required.md): A required constraint.
- [UILayoutPriorityDefaultHigh](uilayoutpriority/defaulthigh.md): The priority level with which a button resists compressing its content.
- [UILayoutPriorityDragThatCanResizeScene](uilayoutpriority/dragthatcanresizescene.md): The priority level for a drag that may end up resizing the window’s scene.
- [UILayoutPrioritySceneSizeStayPut](uilayoutpriority/scenesizestayput.md): The priority level at which the window’s scene prefers to stay the same size.
- [UILayoutPriorityDragThatCannotResizeScene](uilayoutpriority/dragthatcannotresizescene.md): The priority level for a drag that won’t resize the window’s scene.
- [UILayoutPriorityDefaultLow](uilayoutpriority/defaultlow.md): The priority level at which a button hugs its contents horizontally.
- [UILayoutPriorityFittingSizeLevel](uilayoutpriority/fittingsizelevel.md): The priority level with which the view wants to conform to the target size in that computation.

## See Also

### Getting the layout priority

- [priority](nslayoutconstraint/priority.md): The priority of the constraint.
- [NSLayoutPriority](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct): Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.
