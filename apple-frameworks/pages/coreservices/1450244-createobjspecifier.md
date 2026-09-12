> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1450244-createobjspecifier](https://developer.apple.com/documentation/coreservices/1450244-createobjspecifier)

# CreateObjSpecifier(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.

## Declaration

```swift
func CreateObjSpecifier(_ desiredClass: DescType, _ theContainer: UnsafeMutablePointer<AEDesc>!, _ keyForm: DescType, _ keyData: UnsafeMutablePointer<AEDesc>!, _ disposeInputs: Bool, _ objSpecifier: UnsafeMutablePointer<AEDesc>!) -> OSErr
```

## Parameters

- `desiredClass`: The object class of the desired Apple event objects. See [DescType](desctype.md).
- `theContainer`: A pointer to a descriptor that describes the container for the requested object, usually in the form of another object specifier. See [AEDesc](aedesc.md).
- `keyForm`: The key form for the object specifier.
- `keyData`: A pointer to a descriptor that supplies the key data for the object specifier.
- `disposeInputs`: A Boolean value. Pass (`TRUE`) if the function should dispose of the descriptors for the `theContainer` and `keyData` parameters or (`FALSE`) if your application will. A value of `FALSE` may be more efficient for some applications because it allows them to reuse descriptors.
- `objSpecifier`: On successful return, a pointer to the object specifier created by the `CreateObjSpecifier` function. If the function returns successfully, your application should call the [AEDisposeDesc(\_:)](1444208-aedisposedesc.md) function to dispose of this descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

## See Also

### Creating Object Specifiers

- [CreateCompDescriptor(\_:\_:\_:\_:\_:)](1449155-createcompdescriptor.md): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor(\_:\_:\_:\_:)](1445212-createlogicaldescriptor.md): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateOffsetDescriptor(\_:\_:)](1444957-createoffsetdescriptor.md): Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.
- [CreateRangeDescriptor(\_:\_:\_:\_:)](1444087-createrangedescriptor.md): Creates a range descriptor that specifies a series of consecutive elements in the same container.

# CreateObjSpecifier (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Assembles an object specifier that identifies one or more Apple event objects, from other descriptors.

## Declaration

```objectivec
OSErr CreateObjSpecifier(DescType desiredClass, AEDesc *theContainer, DescType keyForm, AEDesc *keyData, Boolean disposeInputs, AEDesc *objSpecifier);
```

## Parameters

- `desiredClass`: The object class of the desired Apple event objects. See [DescType](desctype.md).
- `theContainer`: A pointer to a descriptor that describes the container for the requested object, usually in the form of another object specifier. See [AEDesc](aedesc.md).
- `keyForm`: The key form for the object specifier.
- `keyData`: A pointer to a descriptor that supplies the key data for the object specifier.
- `disposeInputs`: A Boolean value. Pass (`TRUE`) if the function should dispose of the descriptors for the `theContainer` and `keyData` parameters or (`FALSE`) if your application will. A value of `FALSE` may be more efficient for some applications because it allows them to reuse descriptors.
- `objSpecifier`: On successful return, a pointer to the object specifier created by the `CreateObjSpecifier` function. If the function returns successfully, your application should call the [AEDisposeDesc](1444208-aedisposedesc.md) function to dispose of this descriptor after it has finished using it.

<a id="return_value"></a>

## Return Value

A result code. See [Result Codes](https://developer.apple.com/documentation/applicationservices/apple_event_manager#1656145).

## See Also

### Creating Object Specifiers

- [CreateCompDescriptor](1449155-createcompdescriptor.md): Creates a comparison descriptor that specifies how to compare one or more Apple event objects with either another Apple event object or a descriptor.
- [CreateLogicalDescriptor](1445212-createlogicaldescriptor.md): Creates a logical descriptor that specifies a logical operator and one or more logical terms for the Apple Event Manager to evaluate.
- [CreateOffsetDescriptor](1444957-createoffsetdescriptor.md): Creates an offset descriptor that specifies the position of an element in relation to the beginning or end of its container.
- [CreateRangeDescriptor](1444087-createrangedescriptor.md): Creates a range descriptor that specifies a series of consecutive elements in the same container.
