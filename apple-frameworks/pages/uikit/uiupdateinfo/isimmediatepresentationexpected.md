> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/isimmediatepresentationexpected](https://developer.apple.com/documentation/uikit/uiupdateinfo/isimmediatepresentationexpected)

# isImmediatePresentationExpected (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the system presents UI updates immediately upon completion.

## Declaration

```swift
var isImmediatePresentationExpected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the system presents UI updates immediately upon completion. Use this information to determine whether to minimize the complexity of the code you run during the UI update. Defer any processing that isn’t critical for the current UI update until after the UI update finishes.

This value can change during the UI update.

## See Also

### Working with low-latency updates

- [isLowLatencyEventDispatchConfirmed](islowlatencyeventdispatchconfirmed.md): A Boolean value that indicates whether the system runs low-latency phases for the UI update.
- [isPerformingLowLatencyPhases](isperforminglowlatencyphases.md): A Boolean value that indicates whether the UI update is in the low-latency phases.

# immediatePresentationExpected (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

A Boolean value that indicates whether the system presents UI updates immediately upon completion.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isImmediatePresentationExpected) BOOL immediatePresentationExpected;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the system presents UI updates immediately upon completion. Use this information to determine whether to minimize the complexity of the code you run during the UI update. Defer any processing that isn’t critical for the current UI update until after the UI update finishes.

This value can change during the UI update.

## See Also

### Working with low-latency updates

- [lowLatencyEventDispatchConfirmed](islowlatencyeventdispatchconfirmed.md): A Boolean value that indicates whether the system runs low-latency phases for the UI update.
- [performingLowLatencyPhases](isperforminglowlatencyphases.md): A Boolean value that indicates whether the UI update is in the low-latency phases.
