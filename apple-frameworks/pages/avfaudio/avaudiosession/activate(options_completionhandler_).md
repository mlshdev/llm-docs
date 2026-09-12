> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/activate(options:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/activate(options:completionhandler:))

# activate(options:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 5.0+

Activates an audio session asynchronously.

## Declaration

```swift
func activate(options: AVAudioSessionActivationOptions = [], completionHandler handler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func activate(options: AVAudioSessionActivationOptions = []) async throws -> Bool
```

## Parameters

- `options`: The options to apply when activating the session.
- `handler`: The callback the system invokes when the operation completes.

<a id="Discussion"></a>

## Discussion

Configure the session before activating it: call [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md) to set the category and route sharing policy you need.

This method begins activating the audio session asynchronously. The system calls the completion handler as soon as the session has successfully activated or if the activation fails.

<a id="Activate-playback-on-watchOS"></a>

## Activate playback on watchOS

On watchOS, activating a session with the [playback](category-swift.struct/playback.md) category and the [AVAudioSession.RouteSharingPolicy.longFormAudio](routesharingpolicy-swift.enum/longformaudio.md) or [AVAudioSession.RouteSharingPolicy.longFormVideo](routesharingpolicy-swift.enum/longformvideo.md) route-sharing policy requires a Bluetooth output route. On supported Apple Watch models running watchOS 11.0 or later, the built-in speaker also satisfies this routing requirement.

The system selects a reachable route automatically when one is available. If no Bluetooth route is available, or when supported AirPods or Beats headphones are nearby:

- If the watch supports speaker playback, the system routes to the watch’s built-in speaker.
- If the watch does not support speaker playback, the system presents the route picker. If the user dismisses the picker without selecting a valid route, the system calls the completion handler with false.

The system only presents the audio route picker for the [playback](category-swift.struct/playback.md) category and [longForm](routesharingpolicy-swift.enum/longform.md) route sharing policy. Use the [activate(options:completionHandler:)](activate%28options_completionhandler_%29.md) method instead of [setActive(\_:options:)](setactive%28__options_%29.md) to authorize other categories and sharing policies.

> **Note**

> On watchOS, long-form audio can’t play through the built-in speaker while the watch is charging.

## See Also

### Activating the audio configuration

- [setActive(\_:options:)](setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [deactivate(options:completionHandler:)](deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

# activateWithOptions:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 5.0+

Activates an audio session asynchronously.

## Declaration

```objectivec
- (void) activateWithOptions:(AVAudioSessionActivationOptions) options completionHandler:(void (^)(BOOL activated, NSError *error)) handler;
```

## Parameters

- `options`: The options to apply when activating the session.
- `handler`: The callback the system invokes when the operation completes.

<a id="Discussion"></a>

## Discussion

Configure the session before activating it: call [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md) to set the category and route sharing policy you need.

This method begins activating the audio session asynchronously. The system calls the completion handler as soon as the session has successfully activated or if the activation fails.

<a id="Activate-playback-on-watchOS"></a>

## Activate playback on watchOS

On watchOS, activating a session with the [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md) category and the [AVAudioSessionRouteSharingPolicyLongFormAudio](routesharingpolicy-swift.enum/longformaudio.md) or [AVAudioSessionRouteSharingPolicyLongFormVideo](routesharingpolicy-swift.enum/longformvideo.md) route-sharing policy requires a Bluetooth output route. On supported Apple Watch models running watchOS 11.0 or later, the built-in speaker also satisfies this routing requirement.

The system selects a reachable route automatically when one is available. If no Bluetooth route is available, or when supported AirPods or Beats headphones are nearby:

- If the watch supports speaker playback, the system routes to the watch’s built-in speaker.
- If the watch does not support speaker playback, the system presents the route picker. If the user dismisses the picker without selecting a valid route, the system calls the completion handler with false.

The system only presents the audio route picker for the [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md) category and [AVAudioSessionRouteSharingPolicyLongForm](routesharingpolicy-swift.enum/longform.md) route sharing policy. Use the [activateWithOptions:completionHandler:](activate%28options_completionhandler_%29.md) method instead of [setActive:withOptions:error:](setactive%28__options_%29.md) to authorize other categories and sharing policies.

> **Note**

> On watchOS, long-form audio can’t play through the built-in speaker while the watch is charging.

## See Also

### Activating the audio configuration

- [setActive:error:](setactive_error_.md): Activates or deactivates your app’s audio session.
- [setActive:withOptions:error:](setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [deactivateWithOptions:completionHandler:](deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession
