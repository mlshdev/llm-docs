> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/stopio

# StopIO

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, unsigned int) StopIO;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The device to stop.
- `inClientID`: The ID of the client making the request. This will have been established with the device by a previous call to AddDeviceClient().

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Tells the device to stop IO.
