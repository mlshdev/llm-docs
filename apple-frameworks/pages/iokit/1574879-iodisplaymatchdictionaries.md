> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1574879-iodisplaymatchdictionaries](https://developer.apple.com/documentation/iokit/1574879-iodisplaymatchdictionaries)

# IODisplayMatchDictionaries

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Match two display information dictionaries to see if they are for the same display.

## Declaration

```objectivec
SInt32 IODisplayMatchDictionaries(CFDictionaryRef matching1, CFDictionaryRef matching2, IOOptionBits options);
```

## Parameters

- `matching1`: A CFDictionary returned from IODisplayCreateInfoDictionary().
- `matching2`: Another CFDictionary returned from IODisplayCreateInfoDictionary().
- `options`: No options are currently defined.

<a id="return_value"></a>

## Return Value

Returns FALSE if the two displays are not equivalent or TRUE if they are.

<a id="discussion"></a>

## Discussion

By comparing two CFDictionaries returned from IODisplayCreateInfoDictionary(), this function determines if the displays are the same. The information compared is what is returned by calling IODisplayCreateInfoDictionary() with an option of kIODisplayMatchingInfo. This includes information such as the vendor, product, and serial number.

## See Also

### Miscellaneous

- [IOCreateDisplayInfoDictionary](iocreatedisplayinfodictionary.md)
- [IODisplayCreateInfoDictionary](1574917-iodisplaycreateinfodictionary.md): Create a CFDictionary with information about display hardware.
