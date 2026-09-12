> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurfacealignproperty(_:_:)](https://developer.apple.com/documentation/iosurface/iosurfacealignproperty(_:_:))

# IOSurfaceAlignProperty(\_:\_:) (Swift)

**Framework:** IOSurface  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns the smallest aligned value greater than or equal to the specified value.

## Declaration

```swift
func IOSurfaceAlignProperty(_ property: CFString, _ value: Int) -> Int
```

<a id="Discussion"></a>

## Discussion

For properties with no alignment requirements, the original value is returned.

## See Also

### Functions

- [IOSurfaceAllowsPixelSizeCasting(\_:)](iosurfaceallowspixelsizecasting%28__%29.md)
- [IOSurfaceCopyAllValues(\_:)](iosurfacecopyallvalues%28__%29.md)
- [IOSurfaceCopyValue(\_:\_:)](iosurfacecopyvalue%28____%29.md): Retrieves a value from the dictionary associated with the buffer.
- [IOSurfaceCreate(\_:)](iosurfacecreate%28__%29.md): Creates a brand new IOSurface object
- [IOSurfaceCreateMachPort(\_:)](iosurfacecreatemachport%28__%29.md): Returns a mach_port_t that holds a reference to the IOSurface.
- [IOSurfaceCreateXPCObject(\_:)](iosurfacecreatexpcobject%28__%29.md): Returns an xpc_object_t that holds a reference to the IOSurface.
- [IOSurfaceDecrementUseCount(\_:)](iosurfacedecrementusecount%28__%29.md): Decrements the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceGetAllocSize(\_:)](iosurfacegetallocsize%28__%29.md): Returns the total allocation size of the buffer including all planes.
- [IOSurfaceGetBaseAddress(\_:)](iosurfacegetbaseaddress%28__%29.md): Returns the address of the first byte of data in a particular buffer.
- [IOSurfaceGetBaseAddressOfPlane(\_:\_:)](iosurfacegetbaseaddressofplane%28____%29.md): Returns the address of the first byte of data in the specified plane.
- [IOSurfaceGetBitDepthOfComponentOfPlane(\_:\_:\_:)](iosurfacegetbitdepthofcomponentofplane%28______%29.md)
- [IOSurfaceGetBitOffsetOfComponentOfPlane(\_:\_:\_:)](iosurfacegetbitoffsetofcomponentofplane%28______%29.md)
- [IOSurfaceGetBytesPerElement(\_:)](iosurfacegetbytesperelement%28__%29.md): Returns the length (in bytes) of each element in a particular buffer.
- [IOSurfaceGetBytesPerElementOfPlane(\_:\_:)](iosurfacegetbytesperelementofplane%28____%29.md): Returns the size of each element (in bytes) in the specified plane.
- [IOSurfaceGetBytesPerRow(\_:)](iosurfacegetbytesperrow%28__%29.md): Returns the length (in bytes) of each row in a particular buffer.

# IOSurfaceAlignProperty (Objective-C)

**Framework:** IOSurface  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns the smallest aligned value greater than or equal to the specified value.

## Declaration

```objectivec
size_t IOSurfaceAlignProperty(CFStringRef property, size_t value);
```

<a id="Discussion"></a>

## Discussion

For properties with no alignment requirements, the original value is returned.

## See Also

### Functions

- [IOSurfaceAllowsPixelSizeCasting](iosurfaceallowspixelsizecasting%28__%29.md)
- [IOSurfaceCopyAllValues](iosurfacecopyallvalues%28__%29.md)
- [IOSurfaceCopyValue](iosurfacecopyvalue%28____%29.md): Retrieves a value from the dictionary associated with the buffer.
- [IOSurfaceCreate](iosurfacecreate%28__%29.md): Creates a brand new IOSurface object
- [IOSurfaceCreateMachPort](iosurfacecreatemachport%28__%29.md): Returns a mach_port_t that holds a reference to the IOSurface.
- [IOSurfaceCreateXPCObject](iosurfacecreatexpcobject%28__%29.md): Returns an xpc_object_t that holds a reference to the IOSurface.
- [IOSurfaceDecrementUseCount](iosurfacedecrementusecount%28__%29.md): Decrements the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceGetAllocSize](iosurfacegetallocsize%28__%29.md): Returns the total allocation size of the buffer including all planes.
- [IOSurfaceGetBaseAddress](iosurfacegetbaseaddress%28__%29.md): Returns the address of the first byte of data in a particular buffer.
- [IOSurfaceGetBaseAddressOfPlane](iosurfacegetbaseaddressofplane%28____%29.md): Returns the address of the first byte of data in the specified plane.
- [IOSurfaceGetBitDepthOfComponentOfPlane](iosurfacegetbitdepthofcomponentofplane%28______%29.md)
- [IOSurfaceGetBitOffsetOfComponentOfPlane](iosurfacegetbitoffsetofcomponentofplane%28______%29.md)
- [IOSurfaceGetBytesPerElement](iosurfacegetbytesperelement%28__%29.md): Returns the length (in bytes) of each element in a particular buffer.
- [IOSurfaceGetBytesPerElementOfPlane](iosurfacegetbytesperelementofplane%28____%29.md): Returns the size of each element (in bytes) in the specified plane.
- [IOSurfaceGetBytesPerRow](iosurfacegetbytesperrow%28__%29.md): Returns the length (in bytes) of each row in a particular buffer.
