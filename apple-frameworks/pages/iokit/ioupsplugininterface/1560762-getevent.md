> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioupsplugininterface/1560762-getevent

# getEvent

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Used to poll the current state of the UPS.

## Declaration

```objectivec
IOReturn (*getEvent)(void *thisPointer, CFDictionaryRef *event);
```

## Parameters

- `thisPointer`: The UPS Interface to use.
- `event`: Pointer to a CFDictionaryRef that contains the current event state.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

Keys are defined in IOPSKeys.h and begin with kIOPS. This is not an allocation method. Thus the caller does not release the CFDictionary that is returned.
