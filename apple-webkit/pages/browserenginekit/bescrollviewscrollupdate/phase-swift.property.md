> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate/phase-swift.property](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate/phase-swift.property)

# phase (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A value that indicates the scroll update’s position in the scrolling life cycle.

## Declaration

```swift
var phase: BEScrollViewScrollUpdate.Phase { get }
```

<a id="discussion"></a>

## Discussion

The phases of a scroll update follow a state machine:

1. A scroll gesture begins in the [BEScrollViewScrollUpdate.Phase.began](phase-swift.enum/began.md) phase when the person places their finger in the scroll view.
2. As the person interacts with the scroll view, the system generates zero or more [BEScrollViewScrollUpdate.Phase.changed](phase-swift.enum/changed.md) updates.
3. The gesture enters the [BEScrollViewScrollUpdate.Phase.ended](phase-swift.enum/ended.md) phase when the person lifts their finger, or the [BEScrollViewScrollUpdate.Phase.cancelled](phase-swift.enum/cancelled.md) phase when another event causes the system to stop tracking the gesture.

## See Also

### Retrieving scroll state information

- [timestamp](timestamp.md): The time at which a scroll update occurs.
- [BEScrollViewScrollUpdate.Phase](phase-swift.enum.md): Phases in the scroll gesture life cycle.

# phase (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A value that indicates the scroll update’s position in the scrolling life cycle.

## Declaration

```objectivec
@property (nonatomic, readonly) BEScrollViewScrollUpdatePhase phase;
```

<a id="discussion"></a>

## Discussion

The phases of a scroll update follow a state machine:

1. A scroll gesture begins in the [BEScrollViewScrollUpdatePhaseBegan](phase-swift.enum/began.md) phase when the person places their finger in the scroll view.
2. As the person interacts with the scroll view, the system generates zero or more [BEScrollViewScrollUpdatePhaseChanged](phase-swift.enum/changed.md) updates.
3. The gesture enters the [BEScrollViewScrollUpdatePhaseEnded](phase-swift.enum/ended.md) phase when the person lifts their finger, or the [BEScrollViewScrollUpdatePhaseCancelled](phase-swift.enum/cancelled.md) phase when another event causes the system to stop tracking the gesture.

## See Also

### Retrieving scroll state information

- [timestamp](timestamp.md): The time at which a scroll update occurs.
- [BEScrollViewScrollUpdatePhase](phase-swift.enum.md): Phases in the scroll gesture life cycle.
