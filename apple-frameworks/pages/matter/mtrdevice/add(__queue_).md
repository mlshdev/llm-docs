> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevice/add(_:queue:)

# add(\_:queue:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a delegate to receive asynchronous callbacks about the device.

## Declaration

```swift
func add(_ delegate: any MTRDeviceDelegate, queue: dispatch_queue_t)
```

<a id="discussion"></a>

## Discussion

The delegate will be called on the provided queue, for attribute reports, event reports, and device state changes.

MTRDevice holds a weak reference to the delegate object.

# addDelegate:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a delegate to receive asynchronous callbacks about the device.

## Declaration

```objectivec
- (void) addDelegate:(id<MTRDeviceDelegate>) delegate queue:(dispatch_queue_t) queue;
```

<a id="discussion"></a>

## Discussion

The delegate will be called on the provided queue, for attribute reports, event reports, and device state changes.

MTRDevice holds a weak reference to the delegate object.
