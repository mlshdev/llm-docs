> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontentkeysession/delegatequeue](https://developer.apple.com/documentation/avfoundation/avcontentkeysession/delegatequeue)

# delegateQueue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The dispatch queue the session uses to invoke delegate callbacks.

## Declaration

```swift
var delegateQueue: dispatch_queue_t? { get }
```

## See Also

### Managing the delegate object

- [setDelegate(\_:queue:)](setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegate](delegate.md): The content key session’s delegate object.

# delegateQueue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.12.4+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 7.0+

The dispatch queue the session uses to invoke delegate callbacks.

## Declaration

```objectivec
@property (readonly, nullable) dispatch_queue_t delegateQueue;
```

## See Also

### Managing the delegate object

- [setDelegate:queue:](setdelegate%28__queue_%29.md): Sets the session’s delegate object and the dispatch queue on which to call the delegate’s methods.
- [delegate](delegate.md): The content key session’s delegate object.
