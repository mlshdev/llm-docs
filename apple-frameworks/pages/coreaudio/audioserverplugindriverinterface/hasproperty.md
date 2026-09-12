> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/hasproperty](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/hasproperty)

# HasProperty

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
unsigned char (*)(struct AudioServerPlugInDriverInterface **, unsigned int, int, const struct AudioObjectPropertyAddress *) HasProperty;
```

## Parameters

- `inDriver`: The plug-in that owns the object.
- `inObjectID`: The object to query.
- `inClientProcessID`: A pid_t indicating the process of the client. Note that this will often be zero indicating that the Host is making the request.
- `inAddress`: An AudioObjectPropertyAddress indicating the property being queried.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not the object has the given property.

<a id="discussion"></a>

## Discussion

Queries an object about whether or not it has the given property.
