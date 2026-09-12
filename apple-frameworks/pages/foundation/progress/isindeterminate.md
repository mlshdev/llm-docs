> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progress/isindeterminate](https://developer.apple.com/documentation/foundation/progress/isindeterminate)

# isIndeterminate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the tracked progress is indeterminate.

## Declaration

```swift
var isIndeterminate: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use [isIndeterminate](isindeterminate.md) progress only when you’re unable to determine a reasonable value for either [completedUnitCount](completedunitcount.md) or [totalUnitCount](totalunitcount.md). Progress is indeterminate when the value of the [totalUnitCount](totalunitcount.md) or [completedUnitCount](completedunitcount.md) is less than zero or if both values are zero. When progress is indeterminate, [fractionCompleted](fractioncompleted.md) returns `0.0` and [isFinished](isfinished.md) returns `false`.

By default, [Progress](../progress.md) is KVO-compliant for this property. It sends notifications on the same thread that updates the property.

The following code snippet clarifies the behavior for setting both [totalUnitCount](totalunitcount.md) and [completedUnitCount](completedunitcount.md) to `0`.

```swift
let progress = Progress(totalUnitCount: 0) 
progress.completedUnitCount = 0 // default 
print("totalUnitCount: (progress.totalUnitCount)") 
print("completedUnitCount: (progress.completedUnitCount)") 
print("isIndeterminate: (progress.isIndeterminate)") 
print("fractionCompleted: (progress.fractionCompleted)") 
print("isFinished: (progress.isFinished)")
/*
Code Output:
totalUnitCount: 0 completedUnitCount: 0 isIndeterminate: true fractionCompleted: 0.0 isFinished: false
*/
```

## See Also

### Observing Progress

- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.
- [isFinished](isfinished.md): A Boolean value that indicates the progress object is complete.

# indeterminate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the tracked progress is indeterminate.

## Declaration

```objectivec
@property (readonly, getter=isIndeterminate) BOOL indeterminate;
```

<a id="Discussion"></a>

## Discussion

Use [indeterminate](isindeterminate.md) progress only when you’re unable to determine a reasonable value for either [completedUnitCount](completedunitcount.md) or [totalUnitCount](totalunitcount.md). Progress is indeterminate when the value of the [totalUnitCount](totalunitcount.md) or [completedUnitCount](completedunitcount.md) is less than zero or if both values are zero. When progress is indeterminate, [fractionCompleted](fractioncompleted.md) returns `0.0` and [finished](isfinished.md) returns `false`.

By default, [NSProgress](../progress.md) is KVO-compliant for this property. It sends notifications on the same thread that updates the property.

The following code snippet clarifies the behavior for setting both [totalUnitCount](totalunitcount.md) and [completedUnitCount](completedunitcount.md) to `0`.

```swift
let progress = Progress(totalUnitCount: 0) 
progress.completedUnitCount = 0 // default 
print("totalUnitCount: (progress.totalUnitCount)") 
print("completedUnitCount: (progress.completedUnitCount)") 
print("isIndeterminate: (progress.isIndeterminate)") 
print("fractionCompleted: (progress.fractionCompleted)") 
print("isFinished: (progress.isFinished)")
/*
Code Output:
totalUnitCount: 0 completedUnitCount: 0 isIndeterminate: true fractionCompleted: 0.0 isFinished: false
*/
```

## See Also

### Observing Progress

- [fractionCompleted](fractioncompleted.md): The fraction of the overall work that the progress object completes, including work from its suboperations.
- [finished](isfinished.md): A Boolean value that indicates the progress object is complete.
