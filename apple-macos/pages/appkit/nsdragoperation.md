> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdragoperation](https://developer.apple.com/documentation/appkit/nsdragoperation)

# NSDragOperation (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

A group of constants that represent which operations the dragging source can perform on dragging items.

## Declaration

```swift
struct NSDragOperation
```

## Topics

### Constants

- [copy](nsdragoperation/copy.md): A constant that indicates the drag can copy the data that the image represents.
- [link](nsdragoperation/link.md): A constant that indicates the drag can share the data.
- [generic](nsdragoperation/generic.md): A constant that indicates the destination can define the drag operation.
- [private](nsdragoperation/private.md): A constant that indicates the source and destination negotiate the drag operation privately.
- [move](nsdragoperation/move.md): A constant that indicates the drag can move the data.
- [delete](nsdragoperation/delete.md): A constant that indicates the drag can delete the data.
- [every](nsdragoperation/every.md): A constant that indicates that drag can perform all of the drag operations.

### Initializers

- [init(rawValue:)](nsdragoperation/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Deprecated

- [all](nsdragoperation/all.md): Deprecated. Use [every](nsdragoperation/every.md) instead.
- [all_Obsolete](nsdragoperation/all_obsolete.md): Deprecated. The `NSDragOperationAll` constant is deprecated. Use [every](nsdragoperation/every.md) instead.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.

# NSDragOperation (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

A group of constants that represent which operations the dragging source can perform on dragging items.

## Declaration

```objectivec
enum NSDragOperation : NSUInteger;
```

## Topics

### Constants

- [NSDragOperationCopy](nsdragoperation/copy.md): A constant that indicates the drag can copy the data that the image represents.
- [NSDragOperationLink](nsdragoperation/link.md): A constant that indicates the drag can share the data.
- [NSDragOperationGeneric](nsdragoperation/generic.md): A constant that indicates the destination can define the drag operation.
- [NSDragOperationPrivate](nsdragoperation/private.md): A constant that indicates the source and destination negotiate the drag operation privately.
- [NSDragOperationMove](nsdragoperation/move.md): A constant that indicates the drag can move the data.
- [NSDragOperationDelete](nsdragoperation/delete.md): A constant that indicates the drag can delete the data.
- [NSDragOperationEvery](nsdragoperation/every.md): A constant that indicates that drag can perform all of the drag operations.
- [NSDragOperationNone](nsdragoperation/nsdragoperationnone.md): A constant that indicates that the drag cannot perform any operations.

### Deprecated

- [NSDragOperationAll](nsdragoperation/all.md): Deprecated. Use [NSDragOperationEvery](nsdragoperation/every.md) instead.
- [NSDragOperationAll_Obsolete](nsdragoperation/all_obsolete.md): Deprecated. The `NSDragOperationAll` constant is deprecated. Use [NSDragOperationEvery](nsdragoperation/every.md) instead.

## See Also

### Constants

- [NSDraggingItemEnumerationOptions](nsdraggingitemenumerationoptions.md): A group of constants that specify options to use when enumerating dragging items.
- [NSSpringLoadingHighlight](nsspringloadinghighlight.md): A group of constants that indicate a highlighting style for your app’s user interface to display during a spring-loading operation.
- [NSDraggingFormation](nsdraggingformation.md): Constants that control the visual format of multiple dragging items.
- [NSDraggingContext](nsdraggingcontext.md): Constants that specify whether a drag terminates within or outside the application.
