> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/deactivate(options:completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/deactivate(options:completionhandler:))

# deactivate(options:completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deactivates the audio session asynchronously.

## Declaration

```swift
func deactivate(options: AVAudioSessionDeactivationOptions = [], completionHandler handler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func deactivate(options: AVAudioSessionDeactivationOptions = []) async throws -> Bool
```

## Parameters

- `options`: Deactivation options.
- `handler`: A completion handler called with a success flag and an error if deactivation failed.

<a id="discussion"></a>

## Discussion

This method returns immediately without blocking the calling thread. The system calls the completion handler with the result.

## See Also

### Activating the audio configuration

- [setActive(\_:options:)](setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activate(options:completionHandler:)](activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

# deactivateWithOptions:completionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Deactivates the audio session asynchronously.

## Declaration

```objectivec
- (void) deactivateWithOptions:(AVAudioSessionDeactivationOptions) options completionHandler:(void (^)(BOOL deactivated, NSError *error)) handler;
```

## Parameters

- `options`: Deactivation options.
- `handler`: A completion handler called with a success flag and an error if deactivation failed.

<a id="discussion"></a>

## Discussion

This method returns immediately without blocking the calling thread. The system calls the completion handler with the result.

## See Also

### Activating the audio configuration

- [setActive:error:](setactive_error_.md): Activates or deactivates your app’s audio session.
- [setActive:withOptions:error:](setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activateWithOptions:completionHandler:](activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession
