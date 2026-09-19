> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/destroydevice

# DestroyDevice

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int) DestroyDevice;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device to destroy.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Called to tell the plug-in about to destroy the given device.
