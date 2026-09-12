> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverpluginhostinterface/propertieschanged](https://developer.apple.com/documentation/coreaudio/audioserverpluginhostinterface/propertieschanged)

# PropertiesChanged

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(const struct AudioServerPlugInHostInterface *, unsigned int, unsigned int, const struct AudioObjectPropertyAddress *) PropertiesChanged;
```

## Parameters

- `inHost`: The AudioServerPlugInHostRef passed to the plug-in at initialization.
- `inObjectID`: The AudioObjectID of the object whose state has changed.
- `inNumberAddresses`: The number of elements in the inAddresses array.
- `inAddresses`: An array of AudioObjectPropertyAddresses for the changed properties.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This method informs the Host when the state of an plug-in’s object changes.

Note that for Device objects, this method is only used for state changes that don’t affect IO or the structure of the device.
