> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447307-aesizeofnthitem](https://developer.apple.com/documentation/coreservices/1447307-aesizeofnthitem)

# AESizeOfNthItem(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.

## Declaration

```swift
func AESizeOfNthItem(_ theAEDescList: UnsafePointer<AEDescList>!, _ index: Int, _ typeCode: UnsafeMutablePointer<DescType>!, _ dataSize: UnsafeMutablePointer<Size>!) -> OSErr
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list containing the descriptor. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position of the descriptor to get the data size for. `AESizeOfNthItem` returns an error if you pass zero, a negative number, or a value that is out of range.
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataSize`: A pointer to a size variable. On return, the length (in bytes) of the data in the descriptor.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute(\_:\_:\_:\_:)](1445764-aesizeofattribute.md): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfParam(\_:\_:\_:\_:)](1449998-aesizeofparam.md): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

# AESizeOfNthItem (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.

## Declaration

```objectivec
OSErr AESizeOfNthItem(const AEDescList *theAEDescList, long index, DescType *typeCode, Size *dataSize);
```

## Parameters

- `theAEDescList`: A pointer to the descriptor list containing the descriptor. See [AEDescList](aedesclist.md).
- `index`: A one-based positive integer indicating the position of the descriptor to get the data size for. `AESizeOfNthItem` returns an error if you pass zero, a negative number, or a value that is out of range.
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the descriptor. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataSize`: A pointer to a size variable. On return, the length (in bytes) of the data in the descriptor.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute](1445764-aesizeofattribute.md): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfKeyDesc](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1806296-aesizeofkeydesc): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord`.
- [AESizeOfParam](1449998-aesizeofparam.md): Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.
