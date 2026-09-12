> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iosurface/kiosurfaceplaneoffset](https://developer.apple.com/documentation/iosurface/kiosurfaceplaneoffset)

# kIOSurfacePlaneOffset (Swift)

**Framework:** IOSurface  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The offset into the buffer for this plane.

## Declaration

```swift
let kIOSurfacePlaneOffset: CFString
```

<a id="Discussion"></a>

## Discussion

If not specified then IOSurface will lay out each plane sequentially based on the previous plane’s allocation size.

This value is stored as a [CFNumber](../corefoundation/cfnumber.md).

## See Also

### Constants

- [kIOSurfaceAllocSize](kiosurfaceallocsize.md): CFNumber of the total allocation size of the buffer including all planes.
- [kIOSurfaceBytesPerElement](kiosurfacebytesperelement.md): The total number of bytes in an element.
- [kIOSurfaceBytesPerRow](kiosurfacebytesperrow.md): The bytes per row of the buffer.
- [kIOSurfaceCacheMode](kiosurfacecachemode.md): The CPU cache mode to be used for the allocation.
- [kIOSurfaceColorSpace](kiosurfacecolorspace.md)
- [kIOSurfaceElementHeight](kiosurfaceelementheight.md): CFNumber for how many pixels high each element is.
- [kIOSurfaceElementWidth](kiosurfaceelementwidth.md): CFNumber for how many pixels wide each element is.
- [kIOSurfaceHeight](kiosurfaceheight.md): The height of the IOSurface buffer in pixels.
- [kIOSurfaceICCProfile](kiosurfaceiccprofile.md)
- [kIOSurfaceIsGlobal](kiosurfaceisglobal.md): Deprecated. CFBoolean If true, the IOSurface may be looked up by any task in the system by its ID.
- [kIOSurfaceName](kiosurfacename.md)
- [kIOSurfaceOffset](kiosurfaceoffset.md): The starting offset into the buffer.
- [kIOSurfacePixelFormat](kiosurfacepixelformat.md): A 32-bit unsigned integer that stores the traditional macOS buffer format.
- [kIOSurfacePixelSizeCastingAllowed](kiosurfacepixelsizecastingallowed.md)
- [kIOSurfacePlaneBase](kiosurfaceplanebase.md): The base offset into the buffer for this plane.

# kIOSurfacePlaneOffset (Objective-C)

**Framework:** IOSurface  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

The offset into the buffer for this plane.

## Declaration

```objectivec
extern CFStringRef const kIOSurfacePlaneOffset;
```

<a id="Discussion"></a>

## Discussion

If not specified then IOSurface will lay out each plane sequentially based on the previous plane’s allocation size.

This value is stored as a [CFNumberRef](../corefoundation/cfnumber.md).

## See Also

### Constants

- [kIOSurfaceAllocSize](kiosurfaceallocsize.md): CFNumber of the total allocation size of the buffer including all planes.
- [kIOSurfaceBytesPerElement](kiosurfacebytesperelement.md): The total number of bytes in an element.
- [kIOSurfaceBytesPerRow](kiosurfacebytesperrow.md): The bytes per row of the buffer.
- [kIOSurfaceCacheMode](kiosurfacecachemode.md): The CPU cache mode to be used for the allocation.
- [kIOSurfaceColorSpace](kiosurfacecolorspace.md)
- [kIOSurfaceElementHeight](kiosurfaceelementheight.md): CFNumber for how many pixels high each element is.
- [kIOSurfaceElementWidth](kiosurfaceelementwidth.md): CFNumber for how many pixels wide each element is.
- [kIOSurfaceHeight](kiosurfaceheight.md): The height of the IOSurface buffer in pixels.
- [kIOSurfaceICCProfile](kiosurfaceiccprofile.md)
- [kIOSurfaceIsGlobal](kiosurfaceisglobal.md): Deprecated. CFBoolean If true, the IOSurface may be looked up by any task in the system by its ID.
- [kIOSurfaceName](kiosurfacename.md)
- [kIOSurfaceOffset](kiosurfaceoffset.md): The starting offset into the buffer.
- [kIOSurfacePixelFormat](kiosurfacepixelformat.md): A 32-bit unsigned integer that stores the traditional macOS buffer format.
- [kIOSurfacePixelSizeCastingAllowed](kiosurfacepixelsizecastingallowed.md)
- [kIOSurfacePlaneBase](kiosurfaceplanebase.md): The base offset into the buffer for this plane.
