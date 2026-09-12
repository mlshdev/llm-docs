> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallobserver/setdelegate(_:queue:)](https://developer.apple.com/documentation/callkit/cxcallobserver/setdelegate(_:queue:))

# setDelegate(\_:queue:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a call observer delegate, specifying an optional queue on which to execute delegate methods.

## Declaration

```swift
func setDelegate(_ delegate: (any CXCallObserverDelegate)?, queue: dispatch_queue_t?)
```

## Parameters

- `delegate`: An object conforming to the `CXCallObserverDelegate` protocol.
- `queue`: The queue on which to execute delegate methods.

  If `nil`, delegate methods are performed on the main queue.

  > **Important**

  >  Any queue specified is stored as a weak reference.

# setDelegate:queue: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a call observer delegate, specifying an optional queue on which to execute delegate methods.

## Declaration

```objectivec
- (void) setDelegate:(id<CXCallObserverDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: An object conforming to the `CXCallObserverDelegate` protocol.
- `queue`: The queue on which to execute delegate methods.

  If `nil`, delegate methods are performed on the main queue.

  > **Important**

  >  Any queue specified is stored as a weak reference.
