> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/removedeviceclient

# RemoveDeviceClient

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, const struct AudioServerPlugInClientInfo *) RemoveDeviceClient;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device that the client is no longer using.
- `inClientInfo`: A pointer to an AudioServerPlugInClientInfo structure describing the client.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Called to tell the plug-in about a client that is no longer using the device.
