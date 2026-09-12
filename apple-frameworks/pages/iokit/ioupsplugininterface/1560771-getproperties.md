> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioupsplugininterface/1560771-getproperties](https://developer.apple.com/documentation/iokit/ioupsplugininterface/1560771-getproperties)

# getProperties

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Used to obtain the properties of the UPS device such as the name and transport.

## Declaration

```objectivec
IOReturn (*getProperties)(void *thisPointer, CFDictionaryRef *properties);
```

## Parameters

- `thisPointer`: The UPS Interface to use.
- `properties`: Pointer to a CFDictionaryRef that contains the properties.

<a id="return_value"></a>

## Return Value

An IOReturn error code.

<a id="discussion"></a>

## Discussion

Property keys are defined in IOPSKeys.h. This is not an allocation method. Thus the caller does not release the CFDictionary that is returned.
