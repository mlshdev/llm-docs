> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cmminitializetransformproc](https://developer.apple.com/documentation/colorsync/cmminitializetransformproc)

# CMMInitializeTransformProc (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to initialize a color transform.

## Declaration

```swift
typealias CMMInitializeTransformProc = (ColorSyncTransform?, CFArray?, CFDictionary?) -> Bool
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.

# CMMInitializeTransformProc (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to initialize a color transform.

## Declaration

```objectivec
typedef _Bool (*)(struct ColorSyncTransform *, const struct __CFArray *, const struct __CFDictionary *) CMMInitializeTransformProc;
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
