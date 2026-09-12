> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setactive:error:](https://developer.apple.com/documentation/avfaudio/avaudiosession/setactive:error:)

# setActive:error:

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Activates or deactivates your app’s audio session.

## Declaration

```objectivec
- (BOOL) setActive:(BOOL) active error:(NSError **) outError;
```

## Parameters

- `active`: Use [true](https://developer.apple.com/documentation/swift/true) to activate your app’s audio session, or [false](https://developer.apple.com/documentation/swift/false) to deactivate it.
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

## See Also

### Activating the audio configuration

- [setActive:withOptions:error:](setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activateWithOptions:completionHandler:](activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivateWithOptions:completionHandler:](deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](../avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
- [AVAudioSessionDeactivationOptions](../avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession
