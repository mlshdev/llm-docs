> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/getexposurewindows(summary:completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/getexposurewindows(summary:completionhandler:))

# getExposureWindows(summary:completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Obtains information from the provided summary about the user’s exposure within a window of time.

> No longer supported.

## Declaration

```swift
func getExposureWindows(summary: ENExposureDetectionSummary, completionHandler: @escaping ENGetExposureWindowsHandler) -> Progress
```

## Parameters

- `summary`: The summary of exposure detections.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Use this method to retrieve summary data about the user’s potential exposure within different time windows. This method will only provide information when your app’s `Info.plist` file has `ENAPIVersion` set to `2`.

## See Also

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposures(configuration:completionHandler:)](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveled(completionHandler:)](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfo(summary:userExplanation:completionHandler:)](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

# getExposureWindowsFromSummary:completionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Obtains information from the provided summary about the user’s exposure within a window of time.

> No longer supported.

## Declaration

```objectivec
- (NSProgress *) getExposureWindowsFromSummary:(ENExposureDetectionSummary *) summary completionHandler:(ENGetExposureWindowsHandler) completionHandler;
```

## Parameters

- `summary`: The summary of exposure detections.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Use this method to retrieve summary data about the user’s potential exposure within different time windows. This method will only provide information when your app’s `Info.plist` file has `ENAPIVersion` set to `2`.

## See Also

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposuresWithConfiguration:completionHandler:](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveledWithCompletionHandler:](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfoFromSummary:userExplanation:completionHandler:](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.
