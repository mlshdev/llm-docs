> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449998-aesizeofparam](https://developer.apple.com/documentation/coreservices/1449998-aesizeofparam)

# AESizeOfParam(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

## Declaration

```swift
func AESizeOfParam(_ theAppleEvent: UnsafePointer<AppleEvent>!, _ theAEKeyword: AEKeyword, _ typeCode: UnsafeMutablePointer<DescType>!, _ dataSize: UnsafeMutablePointer<Size>!) -> OSErr
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the parameter data from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the desired parameter. Some keyword parameter constants are described in [Keyword Parameter Constants](apple_events/1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](apple_events/1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataSize`: A pointer to a size variable. On return, the length, in bytes, of the data in the Apple event parameter.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

<a id="discussion"></a>

## Discussion

Thread safe starting in OS X v10.2.

## See Also

### Getting the Sizes and Descriptor Types of Descriptors

- [AESizeOfAttribute(\_:\_:\_:\_:)](1445764-aesizeofattribute.md): Gets the size and descriptor type of an Apple event attribute from a descriptor of type `AppleEvent`.
- [AESizeOfNthItem(\_:\_:\_:\_:)](1447307-aesizeofnthitem.md): Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.

# AESizeOfParam (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Gets the size and descriptor type of an Apple event parameter from a descriptor of type `AERecord` or `AppleEvent`.

## Declaration

```objectivec
OSErr AESizeOfParam(const AppleEvent *theAppleEvent, AEKeyword theAEKeyword, DescType *typeCode, Size *dataSize);
```

## Parameters

- `theAppleEvent`: A pointer to the Apple event to get the parameter data from. See [AppleEvent](appleevent.md).
- `theAEKeyword`: The keyword that specifies the desired parameter. Some keyword parameter constants are described in [Keyword Parameter Constants](1527206-keyword_parameter_constants.md). See [AEKeyword](aekeyword.md).
- `typeCode`: A pointer to a descriptor type. On return, specifies the descriptor type of the Apple event parameter. For a list of AppleScript’s predefined descriptor types, see [Descriptor Type Constants](1542788-descriptor_type_constants.md). See [DescType](desctype.md).
- `dataSize`: A pointer to a size variable. On return, the length, in bytes, of the data in the Apple event parameter.

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
- [AESizeOfNthItem](1447307-aesizeofnthitem.md): Gets the data size and descriptor type of the descriptor at a specified position in a descriptor list.
