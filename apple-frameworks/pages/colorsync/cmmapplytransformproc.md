> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cmmapplytransformproc](https://developer.apple.com/documentation/colorsync/cmmapplytransformproc)

# CMMApplyTransformProc (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to apply a color transform to image data.

## Declaration

```swift
typealias CMMApplyTransformProc = (ColorSyncTransform?, Int, Int, Int, UnsafeMutablePointer<UnsafeMutableRawPointer>, ColorSyncDataDepth, ColorSyncDataLayout, Int, Int, UnsafeMutablePointer<UnsafeRawPointer>, ColorSyncDataDepth, ColorSyncDataLayout, Int, CFDictionary?) -> Bool
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

# CMMApplyTransformProc (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to apply a color transform to image data.

## Declaration

```objectivec
typedef _Bool (*)(struct ColorSyncTransform *, unsigned long, unsigned long, unsigned long, void **, enum ColorSyncDataDepth, unsigned int, unsigned long, unsigned long, const void **, enum ColorSyncDataDepth, unsigned int, unsigned long, const struct __CFDictionary *) CMMApplyTransformProc;
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.
