> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805322-newcmmiterateupp](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805322-newcmmiterateupp)

# NewCMMIterateUPP (Swift)

**Framework:** Application Services

Creates a new universal procedure pointer (UPP) to a progress-monitoring callback for the `CMIterateCMMInfo` function.

## Declaration

```swift
func NewCMMIterateUPP(_ userRoutine: CMMIterateProcPtr) -> CMMIterateUPP
```

## Parameters

- `userRoutine`: A pointer to your progress-monitoring callback function.

<a id="return_value"></a>

## Return Value

The universal procedure pointer.

## See Also

### Working With Universal Procedure Pointers

- [NewCMBitmapCallBackUPP](1805297-newcmbitmapcallbackupp.md): Creates a new universal procedure pointer (UPP) to a bitmap callback.
- [DisposeCMBitmapCallBackUPP](1805300-disposecmbitmapcallbackupp.md): Disposes of a universal procedure pointer (UPP) to a bitmap callback.
- [InvokeCMBitmapCallBackUPP](1805303-invokecmbitmapcallbackupp.md): Invokes a universal procedure pointer (UPP) to a bitmap callback.
- [NewCMConcatCallBackUPP](1805306-newcmconcatcallbackupp.md): Creates a new universal procedure pointer (UPP) to a progress-monitoring callback.
- [DisposeCMConcatCallBackUPP](1805310-disposecmconcatcallbackupp.md): Disposes of a universal procedure pointer (UPP) to a progress-monitoring callback.
- [InvokeCMConcatCallBackUPP](1805312-invokecmconcatcallbackupp.md): Invokes a universal procedure pointer (UPP) to a progress-monitoring callback.
- [NewCMFlattenUPP](1805315-newcmflattenupp.md): Creates a new universal procedure pointer (UPP) to a data-flattening callback.
- [DisposeCMFlattenUPP](1805318-disposecmflattenupp.md): Disposes of a universal procedure pointer (UPP) to a data-flattening callback.
- [InvokeCMFlattenUPP](1805320-invokecmflattenupp.md): Invokes a universal procedure pointer (UPP) to a data-flattening callback.
- [DisposeCMMIterateUPP](1805323-disposecmmiterateupp.md): Disposes of a universal procedure pointer (UPP) to a progress-monitoring callback for the `CMIterateCMMInfo` function.
- [InvokeCMMIterateUPP](1805325-invokecmmiterateupp.md): Invokes a universal procedure pointer (UPP) to a progress-monitoring callback for the [CMIterateCMMInfo](1805185-cmiteratecmminfo.md) function.
- [NewCMProfileIterateUPP](1805339-newcmprofileiterateupp.md): Creates a new universal procedure pointer (UPP) to a profile-iteration callback.
- [DisposeCMProfileIterateUPP](1805341-disposecmprofileiterateupp.md): Disposes of a universal procedure pointer (UPP) to a profile-iteration callback.
- [InvokeCMProfileIterateUPP](1805343-invokecmprofileiterateupp.md): Invokes a universal procedure pointer (UPP) to a profile-iteration callback.

# NewCMMIterateUPP (Objective-C)

**Framework:** Application Services

Creates a new universal procedure pointer (UPP) to a progress-monitoring callback for the `CMIterateCMMInfo` function.

## Declaration

```objectivec
CMMIterateUPP NewCMMIterateUPP (
   CMMIterateProcPtr userRoutine
);
```

## Parameters

- `userRoutine`: A pointer to your progress-monitoring callback function.

<a id="return_value"></a>

## Return Value

The universal procedure pointer.

## See Also

### Working With Universal Procedure Pointers

- [NewCMBitmapCallBackUPP](1805297-newcmbitmapcallbackupp.md): Creates a new universal procedure pointer (UPP) to a bitmap callback.
- [DisposeCMBitmapCallBackUPP](1805300-disposecmbitmapcallbackupp.md): Disposes of a universal procedure pointer (UPP) to a bitmap callback.
- [InvokeCMBitmapCallBackUPP](1805303-invokecmbitmapcallbackupp.md): Invokes a universal procedure pointer (UPP) to a bitmap callback.
- [NewCMConcatCallBackUPP](1805306-newcmconcatcallbackupp.md): Creates a new universal procedure pointer (UPP) to a progress-monitoring callback.
- [DisposeCMConcatCallBackUPP](1805310-disposecmconcatcallbackupp.md): Disposes of a universal procedure pointer (UPP) to a progress-monitoring callback.
- [InvokeCMConcatCallBackUPP](1805312-invokecmconcatcallbackupp.md): Invokes a universal procedure pointer (UPP) to a progress-monitoring callback.
- [NewCMFlattenUPP](1805315-newcmflattenupp.md): Creates a new universal procedure pointer (UPP) to a data-flattening callback.
- [DisposeCMFlattenUPP](1805318-disposecmflattenupp.md): Disposes of a universal procedure pointer (UPP) to a data-flattening callback.
- [InvokeCMFlattenUPP](1805320-invokecmflattenupp.md): Invokes a universal procedure pointer (UPP) to a data-flattening callback.
- [DisposeCMMIterateUPP](1805323-disposecmmiterateupp.md): Disposes of a universal procedure pointer (UPP) to a progress-monitoring callback for the `CMIterateCMMInfo` function.
- [InvokeCMMIterateUPP](1805325-invokecmmiterateupp.md): Invokes a universal procedure pointer (UPP) to a progress-monitoring callback for the [CMIterateCMMInfo](1805185-cmiteratecmminfo.md) function.
- [NewCMProfileAccessUPP](1805327-newcmprofileaccessupp.md): Creates a new universal procedure pointer (UPP) to a profile-access callback.
- [DisposeCMProfileAccessUPP](1805329-disposecmprofileaccessupp.md): Disposes of a universal procedure pointer (UPP) to a profile-access callback.
- [InvokeCMProfileAccessUPP](1805333-invokecmprofileaccessupp.md): Invokes a universal procedure pointer (UPP) to a profile-access callback.
- [NewCMProfileFilterUPP](1805336-newcmprofilefilterupp.md): Creates a new universal procedure pointer (UPP) to a profile-filter callback.
- [DisposeCMProfileFilterUPP](1805337-disposecmprofilefilterupp.md): Disposes of a universal procedure pointer (UPP) to a profile-filter callback.
- [InvokeCMProfileFilterUPP](1805338-invokecmprofilefilterupp.md): Invokes a universal procedure pointer (UPP) to a profile-filter callback.
- [NewCMProfileIterateUPP](1805339-newcmprofileiterateupp.md): Creates a new universal procedure pointer (UPP) to a profile-iteration callback.
- [DisposeCMProfileIterateUPP](1805341-disposecmprofileiterateupp.md): Disposes of a universal procedure pointer (UPP) to a profile-iteration callback.
- [InvokeCMProfileIterateUPP](1805343-invokecmprofileiterateupp.md): Invokes a universal procedure pointer (UPP) to a profile-iteration callback.
