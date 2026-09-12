> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setactive(_:options:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactive(_:options:))

# setActive(\_:options:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Activates or deactivates your app’s audio session using the specified options.

## Declaration

```swift
func setActive(_ active: Bool, options: AVAudioSession.SetActiveOptions = []) throws
```

## Parameters

- `active`: Specify [true](https://developer.apple.com/documentation/swift/true) to activate your app’s audio session, or [false](https://developer.apple.com/documentation/swift/false) to deactivate it.
- `options`: An integer bit mask containing one or more constants from the [AVAudioSession.SetActiveOptions](setactiveoptions.md) enumeration.

<a id="Discussion"></a>

## Discussion

Your app may activate a session with category [playback](category-swift.struct/playback.md) when another app is hosting a call, for example to start a `SharePlay` activity. However, your app isn’t permitted to capture the microphone of the active call.

> **Note**

>  If you attempt to activate a session with category [record](category-swift.struct/record.md) or [playAndRecord](category-swift.struct/playandrecord.md) when another app is already hosting a call, then your session fails with the error [AVAudioSessionErrorInsufficientPriority](../../coreaudiotypes/avaudiosessionerrorinsufficientpriority.md).

The session fails to activate if another audio session has higher priority than yours (such as a phone call) and neither audio session allows mixing. Deactivating an audio session with running audio objects stops the objects, makes the session inactive, and returns an [AVAudioSession.ErrorCode.isBusy](../../coreaudiotypes/avaudiosession/errorcode/isbusy.md) error.

When your app deactivates a session, the return value is [false](../../foundation/nsexpression/false.md) but the active state changes to deactivate.

## Topics

### Data Types

- [AVAudioSession.SetActiveOptions](setactiveoptions.md): Options that provide additional information about your app’s audio intentions upon session deactivation.

## See Also

### Activating the audio configuration

- [activate(options:completionHandler:)](activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivate(options:completionHandler:)](deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

# setActive:withOptions:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Activates or deactivates your app’s audio session using the specified options.

## Declaration

```objectivec
- (BOOL) setActive:(BOOL) active withOptions:(AVAudioSessionSetActiveOptions) options error:(NSError **) outError;
```

## Parameters

- `active`: Specify [true](https://developer.apple.com/documentation/swift/true) to activate your app’s audio session, or [false](https://developer.apple.com/documentation/swift/false) to deactivate it.
- `options`: An integer bit mask containing one or more constants from the [AVAudioSessionSetActiveOptions](setactiveoptions.md) enumeration.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system successfully changed the active state; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Your app may activate a session with category [AVAudioSessionCategoryPlayback](category-swift.struct/playback.md) when another app is hosting a call, for example to start a `SharePlay` activity. However, your app isn’t permitted to capture the microphone of the active call.

> **Note**

>  If you attempt to activate a session with category [AVAudioSessionCategoryRecord](category-swift.struct/record.md) or [AVAudioSessionCategoryPlayAndRecord](category-swift.struct/playandrecord.md) when another app is already hosting a call, then your session fails with the error [AVAudioSessionErrorInsufficientPriority](../../coreaudiotypes/avaudiosessionerrorinsufficientpriority.md).

The session fails to activate if another audio session has higher priority than yours (such as a phone call) and neither audio session allows mixing. Deactivating an audio session with running audio objects stops the objects, makes the session inactive, and returns an [AVAudioSessionErrorCodeIsBusy](../../coreaudiotypes/avaudiosession/errorcode/isbusy.md) error.

When your app deactivates a session, the return value is [falseExpression](../../foundation/nsexpression/false.md) but the active state changes to deactivate.

## Topics

### Data Types

- [AVAudioSessionSetActiveOptions](setactiveoptions.md): Options that provide additional information about your app’s audio intentions upon session deactivation.

## See Also

### Activating the audio configuration

- [setActive:error:](setactive_error_.md): Activates or deactivates your app’s audio session.
- [activateWithOptions:completionHandler:](activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivateWithOptions:completionHandler:](deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession
