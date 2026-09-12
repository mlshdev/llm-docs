> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1574917-iodisplaycreateinfodictionary](https://developer.apple.com/documentation/iokit/1574917-iodisplaycreateinfodictionary)

# IODisplayCreateInfoDictionary

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Create a CFDictionary with information about display hardware.

## Declaration

```objectivec
CFDictionaryRef IODisplayCreateInfoDictionary(io_service_t framebuffer, IOOptionBits options);
```

## Parameters

- `framebuffer`: The IOService handle for an IOFramebuffer service.
- `options`: Use IODisplayDictionaryOptions to specify which keys to include.

<a id="return_value"></a>

## Return Value

The returned CFDictionary that should be released by the caller with CFRelease().

<a id="discussion"></a>

## Discussion

The CFDictionary created by this function contains information about the display hardware associated with a framebuffer. The keys for the dictionary are listed in IOGraphicsTypes.h.

## See Also

### Miscellaneous

- [IOCreateDisplayInfoDictionary](iocreatedisplayinfodictionary.md)
- [IODisplayMatchDictionaries](1574879-iodisplaymatchdictionaries.md): Match two display information dictionaries to see if they are for the same display.
