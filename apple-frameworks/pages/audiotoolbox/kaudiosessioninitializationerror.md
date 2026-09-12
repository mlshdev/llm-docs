> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessioninitializationerror](https://developer.apple.com/documentation/audiotoolbox/kaudiosessioninitializationerror)

# kAudioSessionInitializationError (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

There was an error during audio session initialization.

## Declaration

```swift
var kAudioSessionInitializationError: Int { get }
```

## See Also

### Constants

- [kAudioSessionNoError](kaudiosessionnoerror.md): No error has occurred.
- [kAudioSessionNotInitialized](kaudiosessionnotinitialized.md): An Audio Session function was called without first initializing the session. To avoid this error, call the `AudioSessionInitialize` function before attempting to use the session.
- [kAudioSessionAlreadyInitialized](kaudiosessionalreadyinitialized.md): The `AudioSessionInitialize` function was called more than once during the lifetime of your application.
- [kAudioSessionUnsupportedPropertyError](kaudiosessionunsupportedpropertyerror.md): The audio session property is not supported.
- [kAudioSessionBadPropertySizeError](kaudiosessionbadpropertysizeerror.md): The size of the audio session property data was not correct.
- [kAudioSessionNotActiveError](kaudiosessionnotactiveerror.md): The audio operation failed because your application’s audio session was not active.
- [kAudioServicesNoHardwareError](kaudioservicesnohardwareerror.md): The audio operation failed because the device has no audio input available.
- [kAudioSessionNoCategorySet](kaudiosessionnocategoryset.md): The audio operation failed because it requires the audio session to have an explicitly-set category, but none was set. To use a hardware codec you must explicitly initialize the audio session and explicitly set an audio session category.
- [kAudioSessionIncompatibleCategory](kaudiosessionincompatiblecategory.md): The specified audio session category cannot be used for the attempted audio operation. For example, you attempted to play or record audio with the audio session category set to `kAudioSessionCategory_AudioProcessing`.
- [kAudioSessionUnspecifiedError](kaudiosessionunspecifiederror.md): An unspecified audio session error has occurred. This typically results from the audio system being in an inconsistent state.

# kAudioSessionInitializationError (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

There was an error during audio session initialization.

## Declaration

```objectivec
kAudioSessionInitializationError
```

## See Also

### Constants

- [kAudioSessionNoError](kaudiosessionnoerror.md): No error has occurred.
- [kAudioSessionNotInitialized](kaudiosessionnotinitialized.md): An Audio Session function was called without first initializing the session. To avoid this error, call the `AudioSessionInitialize` function before attempting to use the session.
- [kAudioSessionAlreadyInitialized](kaudiosessionalreadyinitialized.md): The `AudioSessionInitialize` function was called more than once during the lifetime of your application.
- [kAudioSessionUnsupportedPropertyError](kaudiosessionunsupportedpropertyerror.md): The audio session property is not supported.
- [kAudioSessionBadPropertySizeError](kaudiosessionbadpropertysizeerror.md): The size of the audio session property data was not correct.
- [kAudioSessionNotActiveError](kaudiosessionnotactiveerror.md): The audio operation failed because your application’s audio session was not active.
- [kAudioServicesNoHardwareError](kaudioservicesnohardwareerror.md): The audio operation failed because the device has no audio input available.
- [kAudioSessionNoCategorySet](kaudiosessionnocategoryset.md): The audio operation failed because it requires the audio session to have an explicitly-set category, but none was set. To use a hardware codec you must explicitly initialize the audio session and explicitly set an audio session category.
- [kAudioSessionIncompatibleCategory](kaudiosessionincompatiblecategory.md): The specified audio session category cannot be used for the attempted audio operation. For example, you attempted to play or record audio with the audio session category set to `kAudioSessionCategory_AudioProcessing`.
- [kAudioSessionUnspecifiedError](kaudiosessionunspecifiederror.md): An unspecified audio session error has occurred. This typically results from the audio system being in an inconsistent state.
