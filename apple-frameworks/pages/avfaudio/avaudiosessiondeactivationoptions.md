> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondeactivationoptions](https://developer.apple.com/documentation/avfaudio/avaudiosessiondeactivationoptions)

# AVAudioSessionDeactivationOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for deactivating an AVAudioSession

## Declaration

```swift
struct AVAudioSessionDeactivationOptions
```

## Topics

### Initializers

- [init(rawValue:)](avaudiosessiondeactivationoptions/init%28rawvalue_%29.md)

### Type Properties

- [notifyOthersOnDeactivation](avaudiosessiondeactivationoptions/notifyothersondeactivation.md): Notify an interrupted app that the interruption has ended and it may resume playback.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Activating the audio configuration

- [setActive(\_:options:)](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activate(options:completionHandler:)](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivate(options:completionHandler:)](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.

# AVAudioSessionDeactivationOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for deactivating an AVAudioSession

## Declaration

```objectivec
enum AVAudioSessionDeactivationOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [AVAudioSessionDeactivationOptionNone](avaudiosessiondeactivationoptions/avaudiosessiondeactivationoptionnone.md)
- [AVAudioSessionDeactivationOptionNotifyOthersOnDeactivation](avaudiosessiondeactivationoptions/notifyothersondeactivation.md): Notify an interrupted app that the interruption has ended and it may resume playback.

## See Also

### Activating the audio configuration

- [setActive:error:](avaudiosession/setactive_error_.md): Activates or deactivates your app’s audio session.
- [setActive:withOptions:error:](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activateWithOptions:completionHandler:](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivateWithOptions:completionHandler:](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionActivationOptions](avaudiosessionactivationoptions.md): Constants that describe the options to pass when activating the audio session.
