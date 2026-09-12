> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/willdoiooperation](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/willdoiooperation)

# WillDoIOOperation

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, unsigned int, unsigned int, unsigned char *, unsigned char *) WillDoIOOperation;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device.
- `inClientID`: The ID of the client doing the operation. This will have been established with the device by a previous call to AddDeviceClient().
- `inOperationID`: A UInt32 that identifies the operation being asked about. Constants for the valid values of this argument are listed in the Constants section.
- `outWillDo`: Upon return, a Boolean indicating whether or not the device will perform the given operation.
- `outWillDoInPlace`: Upon return, a Boolean where true indicates that the device will perform the requested operation entirely within the main buffer passed to the DoIOOperation routine. If this value is false, it indicates that the device requires that the secondary buffer be passed.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Asks the plug-in whether or not the device will perform the given phase of the IO cycle for a particular device.

As part of starting IO, the Host will ask the plug-in whether or not the device in question will perform the given IO operation. This method is not called during the IO cycle. A device is allowed to do different sets of operations for different clients.
