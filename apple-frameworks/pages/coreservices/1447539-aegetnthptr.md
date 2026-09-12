> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447539-aegetnthptr](https://developer.apple.com/documentation/coreservices/1447539-aegetnthptr)

# AEGetNthPtr(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the data from a descriptor at a specified position in a descriptor list; typically used when your application needs to work with the extracted data directly.

## Declaration

```swift
func AEGetNthPtr(_ theAEDescList: UnsafePointer<AEDescList>!, _ index: Int, _ desiredType: DescType, _ theAEKeyword: UnsafeMutablePointer<AEKeyword>!, _ typeCode: UnsafeMutablePointer<DescType>!, _ dataPtr: UnsafeMutableRawPointer!, _ maximumSize: Size, _ actualSize: UnsafeMutablePointer<Size>!) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list that contains the descriptor. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position in the descriptor list of the descriptor to get the data from. `AEGetNthPtr` returns an error if you pass zero, a negative number, or a value that is out of range.
- `desiredType`: The desired descriptor type for the copied data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md).

  If the descriptor specified by the `index` parameter is not of the desired type, `AEGetNthPtr` attempts to coerce the data to this type. If you pass a value of `typeWildCard`, no coercion is performed, and the descriptor type of the copied data is the same as the descriptor type of the original descriptor.

  See [DescType](desctype.md).
- `theAEKeyword`: A pointer to a keyword. On return, the keyword for the specified descriptor, if you are getting data from a list of keyword-specified descriptors; otherwise, `AEGetNthPtr` returns the value `typeWildCard`. Some keyword constants are described in [Keyword Attribute Constants](apple_events/1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the data pointed to by `dataPtr`. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md).
- `dataPtr`: A pointer to a buffer, local variable, or other storage location created and disposed of by your application. The size in bytes must be at least as large as the value you pass in the `maximumSize` parameter. On return, contains the data from the descriptor at the position in the descriptor list specified by the `index` parameter.
- `maximumSize`: The maximum length, in bytes, of the expected data. The `AEGetNthPtr` function will not return more data than you specify in this parameter.
- `actualSize`: A pointer to a size variable. On return, the length, in bytes, of the data for the specified descriptor. If this value is larger than the value of the `maximumSize` parameter, the buffer pointed to by `dataPtr` was not large enough to contain all of the data for the descriptor, though `AEGetNthPtr` does not write beyond the end of the buffer. If the buffer was too small, you can resize it and call `AEGetNthPtr` again.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AEGetNthPtr` function uses a buffer to return the data for a specified descriptor from a specified descriptor list. The function attempts to coerce the descriptor to the descriptor type specified by the `desiredType` parameter.

Before calling `AEGetNthPtr`, you can call the [AESizeOfNthItem(\_:\_:\_:\_:)](1447307-aesizeofnthitem.md) function to determine a size for the `dataPtr` buffer. However, unless you specify `typeWildCard` for the `desiredType` parameter, `AESizeOfNthIte`m may coerce the data, which may cause the size of the data to change. If you are using `AEGetNthPtr` to iterate through a list of descriptors of the same type with a fixed size, such as a list of descriptors of type `typeFSS`, you can get the size once, allocate a buffer, and reuse it for each call.

The order of items in an Apple event record may change after an insertion or deletion. In addition, duplicating an Apple event record is not guaranteed to preserve the item order. 

<a id="1770195"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Items From Descriptor Lists

- [AEGetArray(\_:\_:\_:\_:\_:\_:\_:)](1445720-aegetarray.md): Extracts data from an Apple event array created with the `AEPutArray` function and stores it as a standard array of fixed size items in the specified buffer.
- [AEGetNthDesc(\_:\_:\_:\_:\_:)](1448326-aegetnthdesc.md): Copies a descriptor from a specified position in a descriptor list into a specified descriptor; typically used when your application needs to pass the extracted data to another function as a descriptor.

# AEGetNthPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets a copy of the data from a descriptor at a specified position in a descriptor list; typically used when your application needs to work with the extracted data directly.

## Declaration

```objectivec
OSErr AEGetNthPtr(const AEDescList *theAEDescList, long index, DescType desiredType, AEKeyword *theAEKeyword, DescType *typeCode, void *dataPtr, Size maximumSize, Size *actualSize);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list that contains the descriptor. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position in the descriptor list of the descriptor to get the data from. `AEGetNthPtr` returns an error if you pass zero, a negative number, or a value that is out of range.
- `desiredType`: The desired descriptor type for the copied data. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md).

  If the descriptor specified by the `index` parameter is not of the desired type, `AEGetNthPtr` attempts to coerce the data to this type. If you pass a value of `typeWildCard`, no coercion is performed, and the descriptor type of the copied data is the same as the descriptor type of the original descriptor.

  See [DescType](desctype.md).
- `theAEKeyword`: A pointer to a keyword. On return, the keyword for the specified descriptor, if you are getting data from a list of keyword-specified descriptors; otherwise, `AEGetNthPtr` returns the value `typeWildCard`. Some keyword constants are described in [Keyword Attribute Constants](1542920-keyword_attribute_constants.md) and [Keyword Parameter Constants](1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the data pointed to by `dataPtr`. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md).
- `dataPtr`: A pointer to a buffer, local variable, or other storage location created and disposed of by your application. The size in bytes must be at least as large as the value you pass in the `maximumSize` parameter. On return, contains the data from the descriptor at the position in the descriptor list specified by the `index` parameter.
- `maximumSize`: The maximum length, in bytes, of the expected data. The `AEGetNthPtr` function will not return more data than you specify in this parameter.
- `actualSize`: A pointer to a size variable. On return, the length, in bytes, of the data for the specified descriptor. If this value is larger than the value of the `maximumSize` parameter, the buffer pointed to by `dataPtr` was not large enough to contain all of the data for the descriptor, though `AEGetNthPtr` does not write beyond the end of the buffer. If the buffer was too small, you can resize it and call `AEGetNthPtr` again.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

The `AEGetNthPtr` function uses a buffer to return the data for a specified descriptor from a specified descriptor list. The function attempts to coerce the descriptor to the descriptor type specified by the `desiredType` parameter.

Before calling `AEGetNthPtr`, you can call the [AESizeOfNthItem](1447307-aesizeofnthitem.md) function to determine a size for the `dataPtr` buffer. However, unless you specify `typeWildCard` for the `desiredType` parameter, `AESizeOfNthIte`m may coerce the data, which may cause the size of the data to change. If you are using `AEGetNthPtr` to iterate through a list of descriptors of the same type with a fixed size, such as a list of descriptors of type `typeFSS`, you can get the size once, allocate a buffer, and reuse it for each call.

The order of items in an Apple event record may change after an insertion or deletion. In addition, duplicating an Apple event record is not guaranteed to preserve the item order. 

<a id="1770195"></a>

### Version-Notes

Thread safe starting in OS X v10.2.

## See Also

### Getting Items From Descriptor Lists

- [AEGetArray](1445720-aegetarray.md): Extracts data from an Apple event array created with the `AEPutArray` function and stores it as a standard array of fixed size items in the specified buffer.
- [AEGetNthDesc](1448326-aegetnthdesc.md): Copies a descriptor from a specified position in a descriptor list into a specified descriptor; typically used when your application needs to pass the extracted data to another function as a descriptor.
