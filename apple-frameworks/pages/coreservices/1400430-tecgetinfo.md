> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1400430-tecgetinfo](https://developer.apple.com/documentation/coreservices/1400430-tecgetinfo)

# TECGetInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+

Allocates a converter information structure of type `TECInfo` inthe application heap using `NewHandle`,fills it out, and returns a handle.

## Declaration

```objectivec
OSStatus TECGetInfo(TECInfoHandle *tecInfo);
```

## Parameters

- `tecInfo`: A handle to a structure of type [TECInfo](tecinfo.md) containing information about the converter.

<a id="return_value"></a>

## Return Value

A resultcode. See [Result Codes](carbon_core/text_encoding_conversion_manager.md#1664324). This function canreturn memory errors.

<a id="discussion"></a>

## Discussion

When you are finished with the handle, your application mustdispose of it using `DisposeHandle`.You must also perform any required preflighting or memory rearrangementbefore calling `TECGetInfo`.
