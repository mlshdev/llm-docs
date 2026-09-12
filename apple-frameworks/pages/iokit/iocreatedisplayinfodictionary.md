> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iocreatedisplayinfodictionary](https://developer.apple.com/documentation/iokit/iocreatedisplayinfodictionary)

# IOCreateDisplayInfoDictionary

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
#define IOCreateDisplayInfoDictionary(f, o)
```

<a id="discussion"></a>

## Discussion

IOCreateDisplayInfoDictionary() was renamed IODisplayCreateInfoDictionary(). IOCreateDisplayInfoDictionary() is now a macro for IODisplayCreateInfoDictionary() for compatibility with older code.

## See Also

### Miscellaneous

- [IODisplayCreateInfoDictionary](1574917-iodisplaycreateinfodictionary.md): Create a CFDictionary with information about display hardware.
- [IODisplayMatchDictionaries](1574879-iodisplaymatchdictionaries.md): Match two display information dictionaries to see if they are for the same display.
