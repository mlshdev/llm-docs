> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/init(audiosession:)](https://developer.apple.com/documentation/corehaptics/chhapticengine/init(audiosession:))

# init(audioSession:) (Swift)

**Framework:** Core Haptics  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic engine from an audio session.

## Declaration

```swift
init(audioSession: AVAudioSession?) throws
```

## Parameters

- `audioSession`: The shared audio session, if you’re already using one in your app, to sync with the created engine. For example, pass in [sharedInstance()](../../avfaudio/avaudiosession/sharedinstance%28%29.md) if you’re using audio from [AVAudioSession](../../avfaudio/avaudiosession.md). Pass in `nil` to use default [UIKit](../../uikit.md) audio behavior.

<a id="Discussion"></a>

## Discussion

Create your haptic engine with this initializer if you want the audio behavior of your engine to match other audio APIs in your app. For example, if you’re using [AVAudioSession](../../avfaudio/avaudiosession.md) to manage audio elsewhere in your app, then you want to share the session’s [sharedInstance()](../../avfaudio/avaudiosession/sharedinstance%28%29.md). In this case, the engine mutes and routes audio in accordance with the passed session.

Otherwise, if you don’t pass it a session, it won’t behave the same way as elsewhere in app; audio behaves like [UIKit](../../uikit.md), without syncing to a specific session. You should pass `nil` when you need the engine only for playing haptics.

## See Also

### Initializing a Haptic Engine

- [init()](init%28%29.md): Creates an instance of the haptic engine.

# initWithAudioSession:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a haptic engine from an audio session.

## Declaration

```objectivec
- (instancetype) initWithAudioSession:(AVAudioSession *) audioSession error:(NSError **) error;
```

## Parameters

- `audioSession`: The shared audio session, if you’re already using one in your app, to sync with the created engine. For example, pass in [sharedInstance](../../avfaudio/avaudiosession/sharedinstance%28%29.md) if you’re using audio from [AVAudioSession](../../avfaudio/avaudiosession.md). Pass in `nil` to use default [UIKit](../../uikit.md) audio behavior.
- `error`: An error that contains information about failed engine creation, or `nil` if no error occurred.

<a id="Discussion"></a>

## Discussion

Create your haptic engine with this initializer if you want the audio behavior of your engine to match other audio APIs in your app. For example, if you’re using [AVAudioSession](../../avfaudio/avaudiosession.md) to manage audio elsewhere in your app, then you want to share the session’s [sharedInstance](../../avfaudio/avaudiosession/sharedinstance%28%29.md). In this case, the engine mutes and routes audio in accordance with the passed session.

Otherwise, if you don’t pass it a session, it won’t behave the same way as elsewhere in app; audio behaves like [UIKit](../../uikit.md), without syncing to a specific session. You should pass `nil` when you need the engine only for playing haptics.

## See Also

### Initializing a Haptic Engine

- [initAndReturnError:](init%28%29.md): Creates an instance of the haptic engine.
