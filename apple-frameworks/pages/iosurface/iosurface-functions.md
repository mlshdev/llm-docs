> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/iosurface-functions](https://developer.apple.com/documentation/iosurface/iosurface-functions)

# IOSurface Functions (Swift)

**Framework:** IOSurface  
**Kind:** API Collection

## Topics

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
- [IOSurfaceGetBytesPerRow(\_:)](iosurfacegetbytesperrow%28__%29.md): Returns the length (in bytes) of each row in a particular buffer.
- [IOSurfaceGetBytesPerRowOfPlane(\_:\_:)](iosurfacegetbytesperrowofplane%28____%29.md): Returns the size of each row (in bytes) in the specified plane.
- [IOSurfaceGetElementHeight(\_:)](iosurfacegetelementheight%28__%29.md): Returns the height (in pixels) of each element in a particular buffer.
- [IOSurfaceGetElementHeightOfPlane(\_:\_:)](iosurfacegetelementheightofplane%28____%29.md): Returns the height (in pixels) of each element in the specified plane.
- [IOSurfaceGetElementWidth(\_:)](iosurfacegetelementwidth%28__%29.md): Returns the width (in pixels) of each element in a particular buffer.
- [IOSurfaceGetElementWidthOfPlane(\_:\_:)](iosurfacegetelementwidthofplane%28____%29.md): Returns the width (in pixels) of each element in the specified plane.
- [IOSurfaceGetHeight(\_:)](iosurfacegetheight%28__%29.md): Returns the height of the IOSurface buffer in pixels.
- [IOSurfaceGetHeightOfPlane(\_:\_:)](iosurfacegetheightofplane%28____%29.md): Returns the height of the specified plane (in pixels).
- [IOSurfaceGetID(\_:)](iosurfacegetid%28__%29.md): Retrieves the unique [IOSurfaceID](iosurfaceid.md) value for an [IOSurface](iosurface.md).
- [IOSurfaceGetNameOfComponentOfPlane(\_:\_:\_:)](iosurfacegetnameofcomponentofplane%28______%29.md)
- [IOSurfaceGetNumberOfComponentsOfPlane(\_:\_:)](iosurfacegetnumberofcomponentsofplane%28____%29.md)
- [IOSurfaceGetPixelFormat(\_:)](iosurfacegetpixelformat%28__%29.md): Returns an unsigned integer that contains the traditional macOS buffer format.
- [IOSurfaceGetPlaneCount(\_:)](iosurfacegetplanecount%28__%29.md)
- [IOSurfaceGetPropertyAlignment(\_:)](iosurfacegetpropertyalignment%28__%29.md): Returns the alignment requirements for a property (if any).
- [IOSurfaceGetPropertyMaximum(\_:)](iosurfacegetpropertymaximum%28__%29.md): Returns the maximum value for a given property that is guaranteed to be compatible with all of the current devices (GPUs, etc.) in the system.
- [IOSurfaceGetRangeOfComponentOfPlane(\_:\_:\_:)](iosurfacegetrangeofcomponentofplane%28______%29.md)
- [IOSurfaceGetSeed(\_:)](iosurfacegetseed%28__%29.md)
- [IOSurfaceGetSubsampling(\_:)](iosurfacegetsubsampling%28__%29.md)
- [IOSurfaceGetTypeID()](iosurfacegettypeid%28%29.md)
- [IOSurfaceGetTypeOfComponentOfPlane(\_:\_:\_:)](iosurfacegettypeofcomponentofplane%28______%29.md)
- [IOSurfaceGetUseCount(\_:)](iosurfacegetusecount%28__%29.md): Returns the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceGetWidth(\_:)](iosurfacegetwidth%28__%29.md): Returns the width of the IOSurface buffer in pixels.
- [IOSurfaceGetWidthOfPlane(\_:\_:)](iosurfacegetwidthofplane%28____%29.md): Returns the width of the specified plane (in pixels).
- [IOSurfaceIncrementUseCount(\_:)](iosurfaceincrementusecount%28__%29.md): Increments the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceIsInUse(\_:)](iosurfaceisinuse%28__%29.md): Returns true of an IOSurface is in use by any process in the system, otherwise false.
- [IOSurfaceLock(\_:\_:\_:)](iosurfacelock%28______%29.md): “Lock” an IOSurface for reading or writing.
- [IOSurfaceLookup(\_:)](iosurfacelookup%28__%29.md): Performs an atomic lookup and retain of an IOSurface by its IOSurfaceID.
- [IOSurfaceLookupFromMachPort(\_:)](iosurfacelookupfrommachport%28__%29.md): Recreates an IOSurfaceRef from a mach port.
- [IOSurfaceLookupFromXPCObject(\_:)](iosurfacelookupfromxpcobject%28__%29.md)
- [IOSurfaceRemoveAllValues(\_:)](iosurfaceremoveallvalues%28__%29.md)
- [IOSurfaceRemoveValue(\_:\_:)](iosurfaceremovevalue%28____%29.md): Deletes a value in the dictionary associated with the buffer.
- [IOSurfaceSetOwnershipIdentity(\_:\_:\_:\_:)](iosurfacesetownershipidentity%28________%29.md)
- [IOSurfaceSetPurgeable(\_:\_:\_:)](iosurfacesetpurgeable%28______%29.md)
- [IOSurfaceSetValue(\_:\_:\_:)](iosurfacesetvalue%28______%29.md): Sets a value in the dictionary associated with the buffer.
- [IOSurfaceSetValues(\_:\_:)](iosurfacesetvalues%28____%29.md)
- [IOSurfaceUnlock(\_:\_:\_:)](iosurfaceunlock%28______%29.md): “Unlock” an [IOSurface](iosurface.md) for reading or writing.

## See Also

### Reference

- [IOSurface Structures](iosurface-structures.md)
- [IOSurface Constants](iosurface-constants.md)

# IOSurface Functions (Objective-C)

**Framework:** IOSurface  
**Kind:** API Collection

## Topics

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
- [IOSurfaceGetBytesPerRow](iosurfacegetbytesperrow%28__%29.md): Returns the length (in bytes) of each row in a particular buffer.
- [IOSurfaceGetBytesPerRowOfPlane](iosurfacegetbytesperrowofplane%28____%29.md): Returns the size of each row (in bytes) in the specified plane.
- [IOSurfaceGetElementHeight](iosurfacegetelementheight%28__%29.md): Returns the height (in pixels) of each element in a particular buffer.
- [IOSurfaceGetElementHeightOfPlane](iosurfacegetelementheightofplane%28____%29.md): Returns the height (in pixels) of each element in the specified plane.
- [IOSurfaceGetElementWidth](iosurfacegetelementwidth%28__%29.md): Returns the width (in pixels) of each element in a particular buffer.
- [IOSurfaceGetElementWidthOfPlane](iosurfacegetelementwidthofplane%28____%29.md): Returns the width (in pixels) of each element in the specified plane.
- [IOSurfaceGetHeight](iosurfacegetheight%28__%29.md): Returns the height of the IOSurface buffer in pixels.
- [IOSurfaceGetHeightOfPlane](iosurfacegetheightofplane%28____%29.md): Returns the height of the specified plane (in pixels).
- [IOSurfaceGetID](iosurfacegetid%28__%29.md): Retrieves the unique [IOSurfaceID](iosurfaceid.md) value for an [IOSurface](iosurface.md).
- [IOSurfaceGetNameOfComponentOfPlane](iosurfacegetnameofcomponentofplane%28______%29.md)
- [IOSurfaceGetNumberOfComponentsOfPlane](iosurfacegetnumberofcomponentsofplane%28____%29.md)
- [IOSurfaceGetPixelFormat](iosurfacegetpixelformat%28__%29.md): Returns an unsigned integer that contains the traditional macOS buffer format.
- [IOSurfaceGetPlaneCount](iosurfacegetplanecount%28__%29.md)
- [IOSurfaceGetPropertyAlignment](iosurfacegetpropertyalignment%28__%29.md): Returns the alignment requirements for a property (if any).
- [IOSurfaceGetPropertyMaximum](iosurfacegetpropertymaximum%28__%29.md): Returns the maximum value for a given property that is guaranteed to be compatible with all of the current devices (GPUs, etc.) in the system.
- [IOSurfaceGetRangeOfComponentOfPlane](iosurfacegetrangeofcomponentofplane%28______%29.md)
- [IOSurfaceGetSeed](iosurfacegetseed%28__%29.md)
- [IOSurfaceGetSubsampling](iosurfacegetsubsampling%28__%29.md)
- [IOSurfaceGetTypeID](iosurfacegettypeid%28%29.md)
- [IOSurfaceGetTypeOfComponentOfPlane](iosurfacegettypeofcomponentofplane%28______%29.md)
- [IOSurfaceGetUseCount](iosurfacegetusecount%28__%29.md): Returns the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceGetWidth](iosurfacegetwidth%28__%29.md): Returns the width of the IOSurface buffer in pixels.
- [IOSurfaceGetWidthOfPlane](iosurfacegetwidthofplane%28____%29.md): Returns the width of the specified plane (in pixels).
- [IOSurfaceIncrementUseCount](iosurfaceincrementusecount%28__%29.md): Increments the per-process usage count for an [IOSurface](iosurface.md).
- [IOSurfaceIsInUse](iosurfaceisinuse%28__%29.md): Returns true of an IOSurface is in use by any process in the system, otherwise false.
- [IOSurfaceLock](iosurfacelock%28______%29.md): “Lock” an IOSurface for reading or writing.
- [IOSurfaceLookup](iosurfacelookup%28__%29.md): Performs an atomic lookup and retain of an IOSurface by its IOSurfaceID.
- [IOSurfaceLookupFromMachPort](iosurfacelookupfrommachport%28__%29.md): Recreates an IOSurfaceRef from a mach port.
- [IOSurfaceLookupFromXPCObject](iosurfacelookupfromxpcobject%28__%29.md)
- [IOSurfaceRemoveAllValues](iosurfaceremoveallvalues%28__%29.md)
- [IOSurfaceRemoveValue](iosurfaceremovevalue%28____%29.md): Deletes a value in the dictionary associated with the buffer.
- [IOSurfaceSetOwnershipIdentity](iosurfacesetownershipidentity%28________%29.md)
- [IOSurfaceSetPurgeable](iosurfacesetpurgeable%28______%29.md)
- [IOSurfaceSetValue](iosurfacesetvalue%28______%29.md): Sets a value in the dictionary associated with the buffer.
- [IOSurfaceSetValues](iosurfacesetvalues%28____%29.md)
- [IOSurfaceUnlock](iosurfaceunlock%28______%29.md): “Unlock” an [IOSurface](iosurface.md) for reading or writing.

## See Also

### Reference

- [IOSurface Structures](iosurface-structures.md)
- [IOSurface Enumerations](iosurface-enumerations.md)
- [IOSurface Constants](iosurface-constants.md)
- [IOSurface Data Types](iosurface-data-types.md)
