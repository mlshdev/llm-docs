> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/beginiooperation](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/beginiooperation)

# BeginIOOperation

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, unsigned int, unsigned int, unsigned int, unsigned int, const struct AudioServerPlugInIOCycleInfo *) __attribute__((nonblocking)) BeginIOOperation;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDeviceObjectID`: The ID of the device.
- `inClientID`: The ID of the client doing the operation. This will have been established with the device by a previous call to AddDeviceClient().
- `inOperationID`: A UInt32 that identifies the operation being performed. Constants for the valid values of this argument are listed in the Constants section.
- `inIOBufferFrameSize`: The number of sample frames that will be processed in this operation. Note that for some operations, this will be different than the nominal buffer frame size.
- `inIOCycleInfo`: The basic information about the current IO cycle.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Tells the plug-in that the Host is about to begin a phase of the IO cycle for a particular device.
