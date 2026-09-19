> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ioupsplugininterface/1560784-getcapabilities

# getCapabilities

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Used to obtain the capabilities of the UPS device.

## Declaration

```objectivec
IOReturn (*getCapabilities)(void *thisPointer, CFSetRef *capabilities);
```

## Parameters

- `thisPointer`: The UPS Interface to use.
- `capabilities`: Pointer to a CFSetRef that contains the capabilities.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

Keys are defined in IOPSKeys.h and begin with kIOPS. This is not an allocation method. Thus the caller does not release the CFSet that is returned.
