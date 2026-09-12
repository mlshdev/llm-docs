> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionincompatiblecategory](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionincompatiblecategory)

# kAudioSessionIncompatibleCategory (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The specified audio session category cannot be used for the attempted audio operation. For example, you attempted to play or record audio with the audio session category set to `kAudioSessionCategory_AudioProcessing`.

## Declaration

```swift
var kAudioSessionIncompatibleCategory: Int { get }
```

## See Also

### Constants

- [kAudioSessionNoError](kaudiosessionnoerror.md): No error has occurred.
- [kAudioSessionNotInitialized](kaudiosessionnotinitialized.md): An Audio Session function was called without first initializing the session. To avoid this error, call the `AudioSessionInitialize` function before attempting to use the session.
- [kAudioSessionAlreadyInitialized](kaudiosessionalreadyinitialized.md): The `AudioSessionInitialize` function was called more than once during the lifetime of your application.
- [kAudioSessionInitializationError](kaudiosessioninitializationerror.md): There was an error during audio session initialization.
- [kAudioSessionUnsupportedPropertyError](kaudiosessionunsupportedpropertyerror.md): The audio session property is not supported.
- [kAudioSessionBadPropertySizeError](kaudiosessionbadpropertysizeerror.md): The size of the audio session property data was not correct.
- [kAudioSessionNotActiveError](kaudiosessionnotactiveerror.md): The audio operation failed because your application’s audio session was not active.
- [kAudioServicesNoHardwareError](kaudioservicesnohardwareerror.md): The audio operation failed because the device has no audio input available.
- [kAudioSessionNoCategorySet](kaudiosessionnocategoryset.md): The audio operation failed because it requires the audio session to have an explicitly-set category, but none was set. To use a hardware codec you must explicitly initialize the audio session and explicitly set an audio session category.
- [kAudioSessionUnspecifiedError](kaudiosessionunspecifiederror.md): An unspecified audio session error has occurred. This typically results from the audio system being in an inconsistent state.

# kAudioSessionIncompatibleCategory (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The specified audio session category cannot be used for the attempted audio operation. For example, you attempted to play or record audio with the audio session category set to `kAudioSessionCategory_AudioProcessing`.

## Declaration

```objectivec
kAudioSessionIncompatibleCategory
```

## See Also

### Constants

- [kAudioSessionNoError](kaudiosessionnoerror.md): No error has occurred.
- [kAudioSessionNotInitialized](kaudiosessionnotinitialized.md): An Audio Session function was called without first initializing the session. To avoid this error, call the `AudioSessionInitialize` function before attempting to use the session.
- [kAudioSessionAlreadyInitialized](kaudiosessionalreadyinitialized.md): The `AudioSessionInitialize` function was called more than once during the lifetime of your application.
- [kAudioSessionInitializationError](kaudiosessioninitializationerror.md): There was an error during audio session initialization.
- [kAudioSessionUnsupportedPropertyError](kaudiosessionunsupportedpropertyerror.md): The audio session property is not supported.
- [kAudioSessionBadPropertySizeError](kaudiosessionbadpropertysizeerror.md): The size of the audio session property data was not correct.
- [kAudioSessionNotActiveError](kaudiosessionnotactiveerror.md): The audio operation failed because your application’s audio session was not active.
- [kAudioServicesNoHardwareError](kaudioservicesnohardwareerror.md): The audio operation failed because the device has no audio input available.
- [kAudioSessionNoCategorySet](kaudiosessionnocategoryset.md): The audio operation failed because it requires the audio session to have an explicitly-set category, but none was set. To use a hardware codec you must explicitly initialize the audio session and explicitly set an audio session category.
- [kAudioSessionUnspecifiedError](kaudiosessionunspecifiederror.md): An unspecified audio session error has occurred. This typically results from the audio system being in an inconsistent state.
