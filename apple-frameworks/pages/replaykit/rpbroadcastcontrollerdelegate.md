> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontrollerdelegate](https://developer.apple.com/documentation/replaykit/rpbroadcastcontrollerdelegate)

# RPBroadcastControllerDelegate (Swift)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to respond to changes in a live broadcast.

> No longer supported

## Declaration

```swift
protocol RPBroadcastControllerDelegate : NSObjectProtocol
```

## Topics

### Finishing a Broadcast

- [broadcastController(\_:didFinishWithError:)](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didfinishwitherror_%29.md): Deprecated. Tells the delegate that a broadcast ended due to an error.

### Updating a Broadcast

- [broadcastController(\_:didUpdateServiceInfo:)](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didupdateserviceinfo_%29.md): Deprecated. Tells the delegate the broadcast service has data to pass back to the broadcasting app.
- [broadcastController(\_:didUpdateBroadcast:)](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didupdatebroadcast_%29.md): Deprecated. Tells the broadcast service the broadcast URL has been updated.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](rpbroadcastcontroller/delegate.md): Deprecated. The delegate for the broadcast controller.

# RPBroadcastControllerDelegate (Objective-C)

**Framework:** ReplayKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The protocol you implement to respond to changes in a live broadcast.

> No longer supported

## Declaration

```objectivec
@protocol RPBroadcastControllerDelegate <NSObject>
```

## Topics

### Finishing a Broadcast

- [broadcastController:didFinishWithError:](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didfinishwitherror_%29.md): Deprecated. Tells the delegate that a broadcast ended due to an error.

### Updating a Broadcast

- [broadcastController:didUpdateServiceInfo:](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didupdateserviceinfo_%29.md): Deprecated. Tells the delegate the broadcast service has data to pass back to the broadcasting app.
- [broadcastController:didUpdateBroadcastURL:](rpbroadcastcontrollerdelegate/broadcastcontroller%28__didupdatebroadcast_%29.md): Deprecated. Tells the broadcast service the broadcast URL has been updated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting the Delegate

- [delegate](rpbroadcastcontroller/delegate.md): Deprecated. The delegate for the broadcast controller.
