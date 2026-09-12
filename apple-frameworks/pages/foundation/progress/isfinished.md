> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/isfinished](https://developer.apple.com/documentation/foundation/progress/isfinished)

# isFinished (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates the progress object is complete.

## Declaration

```swift
var isFinished: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A progress object finishes when the [completedUnitCount](completedunitcount.md) equals or exceeds the [totalUnitCount](totalunitcount.md).

By default, [Progress](../progress.md) is KVO-compliant for this property. It sends notifications on the same thread that updates the property.

## See Also

### Observing Progress

- [isIndeterminate](isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.

# finished (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates the progress object is complete.

## Declaration

```objectivec
@property (readonly, getter=isFinished) BOOL finished;
```

<a id="Discussion"></a>

## Discussion

A progress object finishes when the [completedUnitCount](completedunitcount.md) equals or exceeds the [totalUnitCount](totalunitcount.md).

By default, [NSProgress](../progress.md) is KVO-compliant for this property. It sends notifications on the same thread that updates the property.

## See Also

### Observing Progress

- [indeterminate](isindeterminate.md): A Boolean value that indicates whether the tracked progress is indeterminate.
- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.
