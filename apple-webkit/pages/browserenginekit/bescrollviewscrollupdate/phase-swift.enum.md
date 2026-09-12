> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate/phase-swift.enum](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate/phase-swift.enum)

# BEScrollViewScrollUpdate.Phase (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Phases in the scroll gesture life cycle.

## Declaration

```swift
enum Phase
```

## Topics

### Enumeration Cases

- [BEScrollViewScrollUpdate.Phase.began](phase-swift.enum/began.md): The scroll phase that indicates the gesture has begun.
- [BEScrollViewScrollUpdate.Phase.cancelled](phase-swift.enum/cancelled.md): A scroll phase that indicates the system stops scroll view gesture tracking due to an event.
- [BEScrollViewScrollUpdate.Phase.changed](phase-swift.enum/changed.md): A scroll phase that indicates the gesture changes scroll location.
- [BEScrollViewScrollUpdate.Phase.ended](phase-swift.enum/ended.md): A scroll phase that indicates the scroll gesture has ended.

### Initializers

- [init(rawValue:)](phase-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving scroll state information

- [timestamp](timestamp.md): The time at which a scroll update occurs.
- [phase](phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.

# BEScrollViewScrollUpdatePhase (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Phases in the scroll gesture life cycle.

## Declaration

```objectivec
enum BEScrollViewScrollUpdatePhase : NSInteger;
```

## Topics

### Enumeration Cases

- [BEScrollViewScrollUpdatePhaseBegan](phase-swift.enum/began.md): The scroll phase that indicates the gesture has begun.
- [BEScrollViewScrollUpdatePhaseCancelled](phase-swift.enum/cancelled.md): A scroll phase that indicates the system stops scroll view gesture tracking due to an event.
- [BEScrollViewScrollUpdatePhaseChanged](phase-swift.enum/changed.md): A scroll phase that indicates the gesture changes scroll location.
- [BEScrollViewScrollUpdatePhaseEnded](phase-swift.enum/ended.md): A scroll phase that indicates the scroll gesture has ended.

## See Also

### Retrieving scroll state information

- [timestamp](timestamp.md): The time at which a scroll update occurs.
- [phase](phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.
