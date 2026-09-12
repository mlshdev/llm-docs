> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccmmiteratecallback](https://developer.apple.com/documentation/colorsync/colorsynccmmiteratecallback)

# ColorSyncCMMIterateCallback (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A callback that the framework invokes for each installed CMM during iteration.

## Declaration

```swift
typealias ColorSyncCMMIterateCallback = (ColorSyncCMM?, UnsafeMutableRawPointer?) -> Bool
```

## Parameters

- `cmm`: The CMM for this iteration step.
- `userInfo`: The user info passed to the iteration function.

<a id="discussion"></a>

## Discussion

Return `false` to stop the iteration.

## See Also

### Implementing CMM callbacks

- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.

# ColorSyncCMMIterateCallback (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** macOS 10.4+

A callback that the framework invokes for each installed CMM during iteration.

## Declaration

```objectivec
typedef _Bool (*)(struct ColorSyncCMM *, void *) ColorSyncCMMIterateCallback;
```

## Parameters

- `cmm`: The CMM for this iteration step.
- `userInfo`: The user info passed to the iteration function.

<a id="discussion"></a>

## Discussion

Return `false` to stop the iteration.

## See Also

### Implementing CMM callbacks

- [CMMApplyTransformProc](cmmapplytransformproc.md): A function a CMM provider implements to apply a color transform to image data.
- [CMMCreateTransformPropertyProc](cmmcreatetransformpropertyproc.md): A function a CMM provider implements to create a transform property for a given key.
- [CMMInitializeLinkProfileProc](cmminitializelinkprofileproc.md): A function a CMM provider implements to initialize a device-link profile.
- [CMMInitializeTransformProc](cmminitializetransformproc.md): A function a CMM provider implements to initialize a color transform.
