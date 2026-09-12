> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurfacegetpropertymaximum(_:)](https://developer.apple.com/documentation/iosurface/iosurfacegetpropertymaximum(_:))

# IOSurfaceGetPropertyMaximum(\_:) (Swift)

**Framework:** IOSurface  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns the maximum value for a given property that is guaranteed to be compatible with all of the current devices (GPUs, etc.) in the system.

## Declaration

```swift
func IOSurfaceGetPropertyMaximum(_ property: CFString) -> Int
```

<a id="Discussion"></a>

## Discussion

The most important values to obtain are:

- `kIOSurfaceBytesPerRow`
- `kIOSurfaceWidth`
- `kIOSurfaceHeight`
- `kIOSurfacePlaneBytesPerRow`
- `kIOSurfacePlaneWidth`
- `kIOSurfacePlaneHeight`

For the width and height properties, the maximum values are the largest that are guaranteed to work for both reading and writing. In OpenGL terms this translates into the largest size that will work for both textures and render targets.

This function returns 0 for properties that have no predefined limit or where the concept of a limit would be considered invalid (such as `kIOSurfacePixelFormat`).

## See Also

### Functions

- [IOSurfaceAlignProperty(\_:\_:)](iosurfacealignproperty%28____%29.md): Returns the smallest aligned value greater than or equal to the specified value.
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

# IOSurfaceGetPropertyMaximum (Objective-C)

**Framework:** IOSurface  
**Kind:** Function  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns the maximum value for a given property that is guaranteed to be compatible with all of the current devices (GPUs, etc.) in the system.

## Declaration

```objectivec
size_t IOSurfaceGetPropertyMaximum(CFStringRef property);
```

<a id="Discussion"></a>

## Discussion

The most important values to obtain are:

- `kIOSurfaceBytesPerRow`
- `kIOSurfaceWidth`
- `kIOSurfaceHeight`
- `kIOSurfacePlaneBytesPerRow`
- `kIOSurfacePlaneWidth`
- `kIOSurfacePlaneHeight`

For the width and height properties, the maximum values are the largest that are guaranteed to work for both reading and writing. In OpenGL terms this translates into the largest size that will work for both textures and render targets.

This function returns 0 for properties that have no predefined limit or where the concept of a limit would be considered invalid (such as `kIOSurfacePixelFormat`).

## See Also

### Functions

- [IOSurfaceAlignProperty](iosurfacealignproperty%28____%29.md): Returns the smallest aligned value greater than or equal to the specified value.
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
