> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeskviewapplication/present(launchconfiguration:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avcapturedeskviewapplication/present(launchconfiguration:completionhandler:))

# present(launchConfiguration:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

Launches Desk View with the configuration and completion handler that you specify.

## Declaration

```swift
func present(launchConfiguration: AVCaptureDeskViewApplication.LaunchConfiguration, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func present(launchConfiguration: AVCaptureDeskViewApplication.LaunchConfiguration) async throws
```

## Parameters

- `launchConfiguration`: A configuration that specifies how to present Desk View.
- `completionHandler`: The code to perform after the system displays Desk View or the user transitions to Desk View after setup, depending on the configuration.

<a id="Discussion"></a>

## Discussion

If Desk View is already running, this method brings it to the front. If Desk View is in the Dock, this method opens it and brings it to the front.

Desk View launches in setup mode. This mode shows the full field of view of an ultrawide camera with a superimposed trapezoid that indicates the cropped desk region to display. The system displays this region after the user completes setup and starts Desk View.

Create an instance of [AVCaptureDeskViewApplication.LaunchConfiguration](launchconfiguration.md) and set it for `launchConfiguration` to specify the frame for Desk View and when to perform the `completionHandler`.

## See Also

### Presenting the Desk View app

- [present(completionHandler:)](present%28completionhandler_%29.md): Launches Desk View with no additional configuration and then performs a completion handler if you specify it.
- [AVCaptureDeskViewApplication.LaunchConfiguration](launchconfiguration.md): An object that configures how to present Desk View.

# presentWithLaunchConfiguration:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

Launches Desk View with the configuration and completion handler that you specify.

## Declaration

```objectivec
- (void) presentWithLaunchConfiguration:(AVCaptureDeskViewApplicationLaunchConfiguration *) launchConfiguration completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `launchConfiguration`: A configuration that specifies how to present Desk View.
- `completionHandler`: The code to perform after the system displays Desk View or the user transitions to Desk View after setup, depending on the configuration.

<a id="Discussion"></a>

## Discussion

If Desk View is already running, this method brings it to the front. If Desk View is in the Dock, this method opens it and brings it to the front.

Desk View launches in setup mode. This mode shows the full field of view of an ultrawide camera with a superimposed trapezoid that indicates the cropped desk region to display. The system displays this region after the user completes setup and starts Desk View.

Create an instance of [AVCaptureDeskViewApplicationLaunchConfiguration](launchconfiguration.md) and set it for `launchConfiguration` to specify the frame for Desk View and when to perform the `completionHandler`.

## See Also

### Presenting the Desk View app

- [presentWithCompletionHandler:](present%28completionhandler_%29.md): Launches Desk View with no additional configuration and then performs a completion handler if you specify it.
- [AVCaptureDeskViewApplicationLaunchConfiguration](launchconfiguration.md): An object that configures how to present Desk View.
