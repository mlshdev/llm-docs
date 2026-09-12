> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriber/delegate](https://developer.apple.com/documentation/coretelephony/ctsubscriber/delegate)

# delegate (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 12.1+

A delegate that receives updates on the subscriber information.

## Declaration

```swift
weak var delegate: (any CTSubscriberDelegate)? { get set }
```

# delegate (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+

A delegate that receives updates on the subscriber information.

## Declaration

```objectivec
@property (nonatomic, weak) id<CTSubscriberDelegate> delegate;
```
