> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/engetexposurewindowshandler](https://developer.apple.com/documentation/exposurenotification/engetexposurewindowshandler)

# ENGetExposureWindowsHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler the system invokes when the acquisition of windows completes.

> No longer supported.

## Declaration

```swift
typealias ENGetExposureWindowsHandler = ([ENExposureWindow]?, (any Error)?) -> Void
```

## Parameters

- `exposureWindows`: An array of available exposure windows. The contents of this array are in no particular order.
- `error`: A successful invocation if `nil`; otherwise, the error that occured.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](enmanager/detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposures(configuration:completionHandler:)](enmanager/detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindows(summary:completionHandler:)](enmanager/getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [getUserTraveled(completionHandler:)](enmanager/getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfo(summary:userExplanation:completionHandler:)](enmanager/getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

# ENGetExposureWindowsHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler the system invokes when the acquisition of windows completes.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(NSArray<ENExposureWindow *> *, NSError *) ENGetExposureWindowsHandler;
```

## Parameters

- `exposureWindows`: An array of available exposure windows. The contents of this array are in no particular order.
- `error`: A successful invocation if `nil`; otherwise, the error that occured.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This type is available in iOS 12.5, and in iOS 13.5 and later.

## See Also

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](enmanager/detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposuresWithConfiguration:completionHandler:](enmanager/detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindowsFromSummary:completionHandler:](enmanager/getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [getUserTraveledWithCompletionHandler:](enmanager/getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfoFromSummary:userExplanation:completionHandler:](enmanager/getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.
