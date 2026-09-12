> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/getusertraveled(completionhandler:)](https://developer.apple.com/documentation/exposurenotification/enmanager/getusertraveled(completionhandler:))

# getUserTraveled(completionHandler:) (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Obtains information about the user’s travel within an exposure period.

> No longer supported.

## Declaration

```swift
func getUserTraveled(completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func userTraveled() async throws -> Bool
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func userTraveled() async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Use this method to determine whether the user has traveled outside of the region associated with your app anytime in the last 14 days. You might use this information to determine when to share keys across regions. The first time you use this method, the user will be asked for permission. The app must be in the foreground the first time this is called so that the app may ask the user for permission.

## See Also

### Obtaining Exposure Information

- [detectExposures(configuration:diagnosisKeyURLs:completionHandler:)](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposures(configuration:completionHandler:)](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindows(summary:completionHandler:)](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfo(summary:userExplanation:completionHandler:)](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.

# getUserTraveledWithCompletionHandler: (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Method  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Obtains information about the user’s travel within an exposure period.

> No longer supported.

## Declaration

```objectivec
- (void) getUserTraveledWithCompletionHandler:(ENGetUserTraveledHandler) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler that the framework calls when the method completes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func userTraveled() async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

> **Important**

>  This method is available in iOS 12.5, and in iOS 13.5 and later.

Use this method to determine whether the user has traveled outside of the region associated with your app anytime in the last 14 days. You might use this information to determine when to share keys across regions. The first time you use this method, the user will be asked for permission. The app must be in the foreground the first time this is called so that the app may ask the user for permission.

## See Also

### Obtaining Exposure Information

- [detectExposuresWithConfiguration:diagnosisKeyURLs:completionHandler:](detectexposures%28configuration_diagnosiskeyurls_completionhandler_%29.md): Deprecated. Detects exposures using the configuration that you specify for controlling the scoring algorithm.
- [detectExposuresWithConfiguration:completionHandler:](detectexposures%28configuration_completionhandler_%29.md): Deprecated. Detects exposures using the specified configuration to control the scoring algorithm.
- [getExposureWindowsFromSummary:completionHandler:](getexposurewindows%28summary_completionhandler_%29.md): Deprecated. Obtains information from the provided summary about the user’s exposure within a window of time.
- [ENGetExposureWindowsHandler](../engetexposurewindowshandler.md): Deprecated. The handler the system invokes when the acquisition of windows completes.
- [ENGetUserTraveledHandler](../engetusertraveledhandler.md): Deprecated. The handler the system invokes when acquistiion of the user’s travel status completes.
- [getExposureInfoFromSummary:userExplanation:completionHandler:](getexposureinfo%28summary_userexplanation_completionhandler_%29.md): Deprecated. Returns information about each exposure.
