> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/getexposureinfo(summary:userexplanation:completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/getexposureinfo(summary:userexplanation:completionhandler:))

# getExposureInfo(summary:userExplanation:completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 13.5+ (deprecated in 13.6) · iPadOS 13.5+ (deprecated in 13.6) · Mac Catalyst 13.5+ (deprecated in 13.6)

Returns information about each exposure.

> Use getExposureWindowsFromSummary, if needed.

## Declaration

```swift
func getExposureInfo(summary: ENExposureDetectionSummary, userExplanation: String, completionHandler: @escaping ENGetExposureInfoHandler) -> Progress
```

## Parameters

- `summary`: The summary of exposure.
- `userExplanation`: A string that the framework displays to the user informing them of the exposure.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 to 13.6.

Calls to this method generate a user notification that presents the `userExplanation`.

## Topics

### Completion Handlers

- [ENGetExposureInfoHandler](../engetexposureinfohandler.md): Deprecated. The definition of a handler that receives exposure info.

## See Also

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposures(configuration:completionHandler:)](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindows(summary:completionHandler:)](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveled(completionHandler:)](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.

# getExposureInfoFromSummary:userExplanation:completionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 13.5+ (deprecated in 13.6) · iPadOS 13.5+ (deprecated in 13.6) · Mac Catalyst 13.5+ (deprecated in 13.6)

Returns information about each exposure.

> Use getExposureWindowsFromSummary, if needed.

## Declaration

```objectivec
- (NSProgress *) getExposureInfoFromSummary:(ENExposureDetectionSummary *) summary userExplanation:(NSString *) userExplanation completionHandler:(ENGetExposureInfoHandler) completionHandler;
```

## Parameters

- `summary`: The summary of exposure.
- `userExplanation`: A string that the framework displays to the user informing them of the exposure.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 to 13.6.

Calls to this method generate a user notification that presents the `userExplanation`.

## Topics

### Completion Handlers

- [ENGetExposureInfoHandler](../engetexposureinfohandler.md): Deprecated. The definition of a handler that receives exposure info.

## See Also

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposuresWithConfiguration:completionHandler:](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindowsFromSummary:completionHandler:](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveledWithCompletionHandler:](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
