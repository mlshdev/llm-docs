> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audioserverplugindriverinterface/queryinterface](https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/queryinterface)

# QueryInterface

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
int (*)(void *, CFUUIDBytes, void **) QueryInterface;
```

## Parameters

- `inDriver`: The CFPlugIn type to query.
- `inUUID`: The UUID of the interface to find.
- `outInterface`: The returned interface or NULL if none was found.

<a id="return-value"></a>

## Return Value

An error code indicating success of failure.

<a id="discussion"></a>

## Discussion

The IUnknown method for interface discovery.
