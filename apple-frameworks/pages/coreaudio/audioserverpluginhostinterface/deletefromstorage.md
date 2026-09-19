> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverpluginhostinterface/deletefromstorage

# DeleteFromStorage

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(const struct AudioServerPlugInHostInterface *, const struct __CFString *) DeleteFromStorage;
```

## Parameters

- `inHost`: The AudioServerPlugInHostRef passed to the plug-in at initialization.
- `inKey`: A CFStringRef that contains the name of the key to be deleted. Note that the Host will make sure that the keys for one plug-in do not collide with the keys for other plug-ins.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This method will remove the given key and any associated data from storage.
