> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cmmcreatetransformpropertyproc](https://developer.apple.com/documentation/colorsync/cmmcreatetransformpropertyproc)

# CMMCreateTransformPropertyProc (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to create a transform property for a given key.

## Declaration

```swift
typealias CMMCreateTransformPropertyProc = (ColorSyncTransform?, CFTypeRef?, CFDictionary?) -> Unmanaged<CFTypeRef>?
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

# CMMCreateTransformPropertyProc (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to create a transform property for a given key.

## Declaration

```objectivec
typedef const void *(*)(struct ColorSyncTransform *, const void *, const struct __CFDictionary *) CMMCreateTransformPropertyProc;
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.
