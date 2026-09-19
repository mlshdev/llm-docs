> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/audioserverplugindriverinterface/addref

# AddRef

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
unsigned int (*)(void *) AddRef;
```

## Parameters

- `inDriver`: The CFPlugIn type to retain.

<a id="return-value"></a>

## Return Value

The resulting reference count after the new reference is added.

<a id="discussion"></a>

## Discussion

The IUnknown method for retaining a reference to a CFPlugIn type.
