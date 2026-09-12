> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/fractioncompleted](https://developer.apple.com/documentation/foundation/progress/fractioncompleted)

# fractionCompleted (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fraction of the overall work that the progress object completes, including work from its suboperations.

## Declaration

```swift
var fractionCompleted: Double { get }
```

<a id="Discussion"></a>

## Discussion

If the receiver object doesn’t have any suboperations, [fractionCompleted](fractioncompleted.md) is generally the result of dividing [completedUnitCount](completedunitcount.md) by [totalUnitCount](totalunitcount.md). Setting both [totalUnitCount](totalunitcount.md) and [completedUnitCount](completedunitcount.md) properties to zero indicates that there is no progress to track. In this case, the [isIndeterminate](isindeterminate.md) property returns [false](https://developer.apple.com/documentation/swift/false) and the [fractionCompleted](fractioncompleted.md) property returns `0.0`.

If the receiver does have suboperations, [fractionCompleted](fractioncompleted.md) reflects progress from those progress objects in addition to its own [completedUnitCount](completedunitcount.md). When the suboperations finish, the [completedUnitCount](completedunitcount.md) of the containing progress object updates.

## See Also

### Observing Progress

- [isIndeterminate](isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [isFinished](isfinished.md): A Boolean value that indicates the progress object is complete.

# fractionCompleted (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The fraction of the overall work that the progress object completes, including work from its suboperations.

## Declaration

```objectivec
@property (readonly) double fractionCompleted;
```

<a id="Discussion"></a>

## Discussion

If the receiver object doesn’t have any suboperations, [fractionCompleted](fractioncompleted.md) is generally the result of dividing [completedUnitCount](completedunitcount.md) by [totalUnitCount](totalunitcount.md). Setting both [totalUnitCount](totalunitcount.md) and [completedUnitCount](completedunitcount.md) properties to zero indicates that there is no progress to track. In this case, the [indeterminate](isindeterminate.md) property returns [false](https://developer.apple.com/documentation/swift/false) and the [fractionCompleted](fractioncompleted.md) property returns `0.0`.

If the receiver does have suboperations, [fractionCompleted](fractioncompleted.md) reflects progress from those progress objects in addition to its own [completedUnitCount](completedunitcount.md). When the suboperations finish, the [completedUnitCount](completedunitcount.md) of the containing progress object updates.

## See Also

### Observing Progress

- [indeterminate](isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [finished](isfinished.md): A Boolean value that indicates the progress object is complete.
