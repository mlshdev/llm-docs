> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate/timestamp](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate/timestamp)

# timestamp (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

The time at which a scroll update occurs.

## Declaration

```swift
var timestamp: TimeInterval { get }
```

## See Also

### Retrieving scroll state information

- [phase](phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.
- [BEScrollViewScrollUpdate.Phase](phase-swift.enum.md): Phases in the scroll gesture life cycle.

# timestamp (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

The time at which a scroll update occurs.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval timestamp;
```

## See Also

### Retrieving scroll state information

- [phase](phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.
- [BEScrollViewScrollUpdatePhase](phase-swift.enum.md): Phases in the scroll gesture life cycle.
