> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/adddeviceclient

# AddDeviceClient

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, const struct AudioServerPlugInClientInfo *) AddDeviceClient;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device that the client is using.
- `inClientInfo`: A pointer to an AudioServerPlugInClientInfo structure describing the new client. The plug-in should cache this data (including taking a retain on the bundle ID) as the memory pointed is only valid for the duration of the call.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Called to tell the plug-in about a new client of the Host for a particular device.
