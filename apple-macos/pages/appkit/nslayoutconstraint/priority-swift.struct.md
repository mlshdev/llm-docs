> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutconstraint/priority-swift.struct](https://developer.apple.com/documentation/appkit/nslayoutconstraint/priority-swift.struct)

# NSLayoutConstraint.Priority (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.7+

Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

## Declaration

```swift
struct Priority
```

## Topics

### Constants

- [required](priority-swift.struct/required.md): A required constraint.
- [defaultHigh](priority-swift.struct/defaulthigh.md): Priority level with which a button resists compressing its content.
- [dragThatCanResizeWindow](priority-swift.struct/dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [windowSizeStayPut](priority-swift.struct/windowsizestayput.md): Priority level for the window’s current size.
- [dragThatCannotResizeWindow](priority-swift.struct/dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [defaultLow](priority-swift.struct/defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [fittingSizeCompression](priority-swift.struct/fittingsizecompression.md): When you send a [fittingSize](../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

### Initializers

- [init(\_:)](priority-swift.struct/init%28__%29.md)
- [init(rawValue:)](priority-swift.struct/init%28rawvalue_%29.md)

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

- [priority](priority-swift.property.md): The priority of the constraint.

# NSLayoutPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.7+

Layout priority used to indicate the relative importance of constraints, allowing Auto Layout to make appropriate tradeoffs when satisfying the constraints of the system as a whole.

## Declaration

```objectivec
typedef float NSLayoutPriority;
```

## Topics

### Constants

- [NSLayoutPriorityRequired](priority-swift.struct/required.md): A required constraint.
- [NSLayoutPriorityDefaultHigh](priority-swift.struct/defaulthigh.md): Priority level with which a button resists compressing its content.
- [NSLayoutPriorityDragThatCanResizeWindow](priority-swift.struct/dragthatcanresizewindow.md): Appropriate priority level for a drag that may end up resizing the window.
- [NSLayoutPriorityWindowSizeStayPut](priority-swift.struct/windowsizestayput.md): Priority level for the window’s current size.
- [NSLayoutPriorityDragThatCannotResizeWindow](priority-swift.struct/dragthatcannotresizewindow.md): Priority level at which a split view divider, say, is dragged.
- [NSLayoutPriorityDefaultLow](priority-swift.struct/defaultlow.md): Priority level at which a button hugs its contents horizontally.
- [NSLayoutPriorityFittingSizeCompression](priority-swift.struct/fittingsizecompression.md): When you send a [fittingSize](../nsview/fittingsize.md) message to a view, the smallest size that is large enough for the view’s contents is computed.

## See Also

### Getting the layout priority

- [priority](priority-swift.property.md): The priority of the constraint.
