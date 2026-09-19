> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/abortdeviceconfigurationchange

# AbortDeviceConfigurationChange

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, unsigned long long, void *) AbortDeviceConfigurationChange;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device that wants to change its configuration.
- `inChangeAction`: A UInt64 indicating the action the device object wants to take. This is the same value that was passed to RequestDeviceConfigurationChange(). Note that this value is purely for the plug-in’s usage. The Host does not look at this value.
- `inChangeInfo`: A pointer to information about the configuration change. This is the same value that was passed to RequestDeviceConfigurationChange(). Note that this value is purely for the plug-in’s usage. The Host does not look at this value.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This is called by the Host to tell the plug-in not to perform a configuration change that had been requested via a call to the Host method, RequestDeviceConfigurationChange().
