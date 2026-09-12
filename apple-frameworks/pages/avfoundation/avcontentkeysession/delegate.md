> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/delegate](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/delegate)

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The content key session’s delegate object.

## Declaration

```swift
weak var delegate: (any AVContentKeySessionDelegate)? { get }
```

<a id="Discussion"></a>

## Discussion

Set the session’s delegate using the [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md) method.

## See Also

### Managing the delegate object

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegateQueue](delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The content key session’s delegate object.

## Declaration

```objectivec
@property (weak, readonly, nullable) id<AVContentKeySessionDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Set the session’s delegate using the [setDelegate:queue:](setdelegate%28__queue_%29.md) method.

## See Also

### Managing the delegate object

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegateQueue](delegatequeue.md): The dispatch queue the session uses to invoke delegate callbacks.
