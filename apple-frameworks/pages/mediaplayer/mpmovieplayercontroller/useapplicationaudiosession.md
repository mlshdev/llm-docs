> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmovieplayercontroller/useapplicationaudiosession](https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller/useapplicationaudiosession)

# useApplicationAudioSession (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the movie player should use the app’s audio session.

> There is not replacement for this property and its use is discouraged.

## Declaration

```swift
var useApplicationAudioSession: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Setting this property to [false](https://developer.apple.com/documentation/swift/false) causes the movie player to use a system-supplied audio session with a non-mixable playback category.

When this property is [true](https://developer.apple.com/documentation/swift/true), the movie player shares the app’s audio session. This give you control over how the movie player content interacts with your audio and with audio from other apps, such as the iPod. For important guidance on using this feature, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875) in [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

Changing the value of this property does not affect the currently playing movie. For the new setting to take effect, you must stop playback and then start it again.

<a id="Special-considerations"></a>

### Special considerations

In iOS 3.1 and earlier, a movie player always uses a system-supplied audio session. To obtain that same behavior in iOS 3.2 and newer, you must set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [isAirPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [isFullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen(\_:animated:)](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.

# useApplicationAudioSession (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 9.0) · iPadOS 6.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the movie player should use the app’s audio session.

> There is not replacement for this property and its use is discouraged.

## Declaration

```objectivec
@property (nonatomic) BOOL useApplicationAudioSession;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Setting this property to [false](https://developer.apple.com/documentation/swift/false) causes the movie player to use a system-supplied audio session with a non-mixable playback category.

When this property is [true](https://developer.apple.com/documentation/swift/true), the movie player shares the app’s audio session. This give you control over how the movie player content interacts with your audio and with audio from other apps, such as the iPod. For important guidance on using this feature, see [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875) in [Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40007875).

Changing the value of this property does not affect the currently playing movie. For the new setting to take effect, you must stop playback and then start it again.

<a id="Special-considerations"></a>

### Special considerations

In iOS 3.1 and earlier, a movie player always uses a system-supplied audio session. To obtain that same behavior in iOS 3.2 and newer, you must set this property’s value to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing movie properties

- [contentURL](contenturl.md): Deprecated. The URL that points to the movie file.
- [movieSourceType](moviesourcetype.md): Deprecated. The playback type of the movie.
- [movieMediaTypes](moviemediatypes.md): Deprecated. The types of media available in the movie.
- [allowsAirPlay](allowsairplay.md): Deprecated. Specifies whether the movie player allows AirPlay movie playback.
- [airPlayVideoActive](isairplayvideoactive.md): Deprecated. Indicates whether the movie player is currently playing video via AirPlay.
- [naturalSize](naturalsize.md): Deprecated. The width and height of the movie frame.
- [fullscreen](isfullscreen.md): Deprecated. A Boolean that indicates whether the movie player is in full-screen mode.
- [setFullscreen:animated:](setfullscreen%28__animated_%29.md): Deprecated. Causes the movie player to enter or exit full-screen mode.
- [scalingMode](scalingmode.md): Deprecated. The scaling mode to use when displaying the movie.
- [controlStyle](controlstyle.md): Deprecated. The style of the playback controls.
