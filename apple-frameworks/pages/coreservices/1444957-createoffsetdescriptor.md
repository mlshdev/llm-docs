> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444957-createoffsetdescriptor](https://developer.apple.com/documentation/coreservices/1444957-createoffsetdescriptor)

# CreateOffsetDescriptor(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.

## Declaration

```swift
func CreateOffsetDescriptor(_ theOffset: Int, _ theDescriptor: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `theOffset`: A positive integer that specifies the offset from the beginning of the container (the first element has an offset of 1), or a negative integer that specifies the offset from the end (the last element has an offset of –1).
- `theDescriptor`: A pointer to a descriptor. On successful return, the offset descriptor created by `CreateOffsetDescriptor`. On error, returns a null descriptor. Your application must dispose of the descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

## See Also

### Creating Object Specifiers

- [CreateCompDescriptor(\_:\_:\_:\_:\_:)](1449155-createcompdescriptor.md): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor(\_:\_:\_:\_:)](1445212-createlogicaldescriptor.md): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateObjSpecifier(\_:\_:\_:\_:\_:\_:)](1450244-createobjspecifier.md): Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.
- [CreateRangeDescriptor(\_:\_:\_:\_:)](1444087-createrangedescriptor.md): Creates a range descriptor that specifies a series of consecutive elements in the same container.

# CreateOffsetDescriptor (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.

## Declaration

```objectivec
OSErr CreateOffsetDescriptor(long theOffset, AEDesc *theDescriptor);
```

## Parameters

- `theOffset`: A positive integer that specifies the offset from the beginning of the container (the first element has an offset of 1), or a negative integer that specifies the offset from the end (the last element has an offset of –1).
- `theDescriptor`: A pointer to a descriptor. On successful return, the offset descriptor created by `CreateOffsetDescriptor`. On error, returns a null descriptor. Your application must dispose of the descriptor after it has finished using it. See [AEDesc](aedesc.md).

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

## See Also

### Creating Object Specifiers

- [CreateCompDescriptor](1449155-createcompdescriptor.md): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor](1445212-createlogicaldescriptor.md): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateObjSpecifier](1450244-createobjspecifier.md): Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.
- [CreateRangeDescriptor](1444087-createrangedescriptor.md): Creates a range descriptor that specifies a series of consecutive elements in the same container.
