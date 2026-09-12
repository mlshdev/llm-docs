> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcallobserverdelegate/callobserver(_:callchanged:)](https://developer.apple.com/documentation/callkit/cxcallobserverdelegate/callobserver(_:callchanged:))

# callObserver(\_:callChanged:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

Called when a call is changed.

## Declaration

```swift
func callObserver(_ callObserver: CXCallObserver, callChanged call: CXCall)
```

## Parameters

- `callObserver`: The call observer for the delegate.
- `call`: The call that has been changed.

# callObserver:callChanged: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

Called when a call is changed.

## Declaration

```objectivec
- (void) callObserver:(CXCallObserver *) callObserver callChanged:(CXCall *) call;
```

## Parameters

- `callObserver`: The call observer for the delegate.
- `call`: The call that has been changed.
