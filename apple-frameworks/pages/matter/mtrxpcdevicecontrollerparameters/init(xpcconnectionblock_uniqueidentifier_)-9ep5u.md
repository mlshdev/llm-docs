> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcdevicecontrollerparameters/init(xpcconnectionblock:uniqueidentifier:)-9ep5u](https://developer.apple.com/documentation/matter/mtrxpcdevicecontrollerparameters/init(xpcconnectionblock:uniqueidentifier:)-9ep5u)

# init(xpcConnectionBlock:uniqueIdentifier:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A controller created from this way will connect to a remote instance of an MTRDeviceController loaded in an XPC Service

## Declaration

```swift
init(xpcConnectionBlock: @escaping () -> NSXPCConnection, uniqueIdentifier: UUID)
```

## Parameters

- `xpcConnectionBlock`: The XPC Connection block that will return an NSXPCConnection to the intended listener.
- `uniqueIdentifier`: The unique id to assign to the controller.

# initWithXPCConnectionBlock:uniqueIdentifier: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A controller created from this way will connect to a remote instance of an MTRDeviceController loaded in an XPC Service

## Declaration

```objectivec
- (instancetype) initWithXPCConnectionBlock:(NSXPCConnection * (^)()) xpcConnectionBlock uniqueIdentifier:(NSUUID *) uniqueIdentifier;
```

## Parameters

- `xpcConnectionBlock`: The XPC Connection block that will return an NSXPCConnection to the intended listener.
- `uniqueIdentifier`: The unique id to assign to the controller.
