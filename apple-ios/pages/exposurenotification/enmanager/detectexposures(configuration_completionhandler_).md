> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/detectexposures(configuration:completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/detectexposures(configuration:completionhandler:))

# detectExposures(configuration:completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Detects exposures using the specified configuration to control the scoring algorithm.

> No longer supported.

## Declaration

```swift
func detectExposures(configuration: ENExposureConfiguration, completionHandler: @escaping ENDetectExposuresHandler) -> Progress
```

## Parameters

- `configuration`: The exposure configuration.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

This method allows recalculating a new score using different configuration parameters. If you’ve previously called   [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md), any keys you submitted in the previous 14 days are cached. Only use this method if your app specifies an `ENAPIVersion` of `2` in its `Info.plist` file, because older versions did not cache keys.

> **Important**

>  On iOS 13.6 and later, you’re limited to using this method a maximum of 15 times per 24-hour period. If you’re on iOS 13.7 and later and specify `2` as the `ENAPIVersion` in your app’s `Info.plist` file, you’re limited to using this method a maximum of 6 times per 24-hour period.
>
> On iOS 13.5, you can only submit 15 uncached key files per 24-hour period, regardless of the number of API calls you make.

## See Also

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [getExposureWindows(summary:completionHandler:)](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveled(completionHandler:)](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfo(summary:userExplanation:completionHandler:)](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

# detectExposuresWithConfiguration:completionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Detects exposures using the specified configuration to control the scoring algorithm.

> No longer supported.

## Declaration

```objectivec
- (NSProgress *) detectExposuresWithConfiguration:(ENExposureConfiguration *) configuration completionHandler:(ENDetectExposuresHandler) completionHandler;
```

## Parameters

- `configuration`: The exposure configuration.
- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="return-value"></a>

## Return Value

The progress of the method.

<a id="Discussion"></a>

## Discussion

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

This method allows recalculating a new score using different configuration parameters. If you’ve previously called   [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md), any keys you submitted in the previous 14 days are cached. Only use this method if your app specifies an `ENAPIVersion` of `2` in its `Info.plist` file, because older versions did not cache keys.

> **Important**

>  On iOS 13.6 and later, you’re limited to using this method a maximum of 15 times per 24-hour period. If you’re on iOS 13.7 and later and specify `2` as the `ENAPIVersion` in your app’s `Info.plist` file, you’re limited to using this method a maximum of 6 times per 24-hour period.
>
> On iOS 13.5, you can only submit 15 uncached key files per 24-hour period, regardless of the number of API calls you make.

## See Also

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [getExposureWindowsFromSummary:completionHandler:](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [getUserTraveledWithCompletionHandler:](getusertraveled%28completionhandler_%29.md): Deprecated. Obtains information about the user’s travel within an exposure period.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfoFromSummary:userExplanation:completionHandler:](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.
