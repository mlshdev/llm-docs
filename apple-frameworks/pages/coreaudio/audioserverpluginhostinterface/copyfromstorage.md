> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverpluginhostinterface/copyfromstorage](https://developer.apple.com/documentation/coreaudio/audioserverpluginhostinterface/copyfromstorage)

# CopyFromStorage

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(const struct AudioServerPlugInHostInterface *, const struct __CFString *, const void **) CopyFromStorage;
```

## Parameters

- `inHost`: The AudioServerPlugInHostRef passed to the plug-in at initialization.
- `inKey`: A CFStringRef that contains the name of the key whose data is to be fetched. Note that the Host will make sure that the keys for one plug-in do not collide with the keys for other plug-ins.
- `outData`: The data associated with the named storage key in the form of CFPropertyList. The caller is responsible for releasing the returned CFObject.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This method will fetch the data associated with the named storage key.
