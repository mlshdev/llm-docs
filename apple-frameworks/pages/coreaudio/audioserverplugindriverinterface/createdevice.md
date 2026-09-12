> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/createdevice](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/createdevice)

# CreateDevice

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, const struct __CFDictionary *, const struct AudioServerPlugInClientInfo *, unsigned int *) CreateDevice;
```

## Parameters

- `inDriver`: The plug-in that owns the device.
- `inDescription`: A CFDictionaryRef that contains a description of the device to create.
- `inClientInfo`: A pointer to an AudioServerPlugInClientInfo structure describing the client creating the device. Note that the mClientID field will be set to kAudioServerPlugInHostClientID since the device hasn’t been created yet. The client info is passed here to give enough context to allow for the creation of private devices.
- `outDeviceObjectID`: On successful exit, this will contain the object ID of the newly created device.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

Tells the plug-in to create a new device based on the given description.
