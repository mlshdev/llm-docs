> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiosessionactivationoptions

# AVAudioSessionActivationOptions (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the options to pass when activating the audio session.

## Declaration

```swift
struct AVAudioSessionActivationOptions
```

## Topics

### Creating an Activation Option

- [init(rawValue:)](avaudiosessionactivationoptions/init%28rawvalue_%29.md): Creates an activation-options set from a raw bitmask.

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

### Activating and deactivating the session

- [setActive(\_:options:)](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activate(options:completionHandler:)](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivate(options:completionHandler:)](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionDeactivationOptions](avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession

# AVAudioSessionActivationOptions (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the options to pass when activating the audio session.

## Declaration

```objectivec
enum AVAudioSessionActivationOptions : NSUInteger;
```

## Topics

### Getting Standard Activation Options

- [AVAudioSessionActivationOptionNone](avaudiosessionactivationoptions/avaudiosessionactivationoptionnone.md)

## See Also

### Activating and deactivating the session

- [setActive:error:](avaudiosession/setactive_error_.md): Activates or deactivates your app’s audio session.
- [setActive:withOptions:error:](avaudiosession/setactive%28__options_%29.md): Activates or deactivates your app’s audio session using the specified options.
- [activateWithOptions:completionHandler:](avaudiosession/activate%28options_completionhandler_%29.md): Activates an audio session asynchronously.
- [deactivateWithOptions:completionHandler:](avaudiosession/deactivate%28options_completionhandler_%29.md): Deactivates the audio session asynchronously.
- [AVAudioSessionDeactivationOptions](avaudiosessiondeactivationoptions.md): Options for deactivating an AVAudioSession
