> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/cmminitializelinkprofileproc](https://developer.apple.com/documentation/colorsync/cmminitializelinkprofileproc)

# CMMInitializeLinkProfileProc (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to initialize a device-link profile.

## Declaration

```swift
typealias CMMInitializeLinkProfileProc = (ColorSyncMutableProfile?, CFArray?, CFDictionary?) -> Bool
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

# CMMInitializeLinkProfileProc (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A function a CMM provider implements to initialize a device-link profile.

## Declaration

```objectivec
typedef _Bool (*)(struct ColorSyncProfile *, const struct __CFArray *, const struct __CFDictionary *) CMMInitializeLinkProfileProc;
```

## See Also

### Implementing CMM callbacks

- [ColorSyncCMMIterateCallback](colorsynccmmiteratecallback.md): A callback that the framework invokes for each installed CMM during iteration.
- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.
