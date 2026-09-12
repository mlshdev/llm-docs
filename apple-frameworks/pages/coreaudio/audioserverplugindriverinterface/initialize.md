> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/initialize](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/initialize)

# Initialize

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(struct AudioServerPlugInDriverInterface **, const struct AudioServerPlugInHostInterface *) Initialize;
```

## Parameters

- `inDriver`: The plug-in to initialize.
- `inHost`: An AudioServerPlugInHostInterface struct that the plug-in is to use for communication with the Host. The Host guarantees that the storage pointed to by inHost will remain valid for the lifetime of the plug-in.

<a id="return-value"></a>

## Return Value

An OSStatus indicating success or failure.

<a id="discussion"></a>

## Discussion

This method is called to initialize the instance of the plug-in.

As part of initialization, the plug-in should publish all the objects it knows about at the time.
