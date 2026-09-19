> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/startio

# StartIO

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, unsigned int) StartIO;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The device to start.
- `inClientID`: The ID of the client making the request. This will have been established with the device by a previous call to AddDeviceClient(). Note that the device should consider IO running for as long as at least one client has started IO.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Tells the device to start IO.

This call is expect to always succeed or fail. The hardware can take as long as necessary in this call such that it always either succeeds (and returns \0) or fails.
