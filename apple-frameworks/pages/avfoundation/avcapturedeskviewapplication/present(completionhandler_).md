> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeskviewapplication/present(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/present(completionhandler:))

# present(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

Launches Desk View with no additional configuration and then performs a completion handler if you specify it.

## Declaration

```swift
func present(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func present() async throws
```

## Parameters

- `completionHandler`: The code to perform after the system displays Desk View.

<a id="Discussion"></a>

## Discussion

If the Desk View app is already running, this method brings it to the front. If Desk View is in the Dock, this method opens it and brings it to the front.

Desk View launches in setup mode. This mode shows the full field of view of an ultrawide camera with a superimposed trapezoid that indicates the cropped desk region to display. The system displays this region after the user completes setup and starts Desk View.

## See Also

### Presenting the Desk View app

- [present(launchConfiguration:completionHandler:)](present%28launchconfiguration_completionhandler_%29.md): Launches Desk View with the configuration and completion handler that you specify.
- [AVCaptureDeskViewApplication.LaunchConfiguration](launchconfiguration.md): An object that configures how to present Desk View.

# presentWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

Launches Desk View with no additional configuration and then performs a completion handler if you specify it.

## Declaration

```objectivec
- (void) presentWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The code to perform after the system displays Desk View.

<a id="Discussion"></a>

## Discussion

If the Desk View app is already running, this method brings it to the front. If Desk View is in the Dock, this method opens it and brings it to the front.

Desk View launches in setup mode. This mode shows the full field of view of an ultrawide camera with a superimposed trapezoid that indicates the cropped desk region to display. The system displays this region after the user completes setup and starts Desk View.

## See Also

### Presenting the Desk View app

- [presentWithLaunchConfiguration:completionHandler:](present%28launchconfiguration_completionhandler_%29.md): Launches Desk View with the configuration and completion handler that you specify.
- [AVCaptureDeskViewApplicationLaunchConfiguration](launchconfiguration.md): An object that configures how to present Desk View.
