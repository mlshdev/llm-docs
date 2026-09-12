> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource](https://developer.apple.com/documentation/scenekit/scnaudiosource)

# SCNAudioSource (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A simple, reusable audio source—music or sound effects loaded from a file—for use in positional audio playback.

## Declaration

```swift
class SCNAudioSource
```

<a id="overview"></a>

## Overview

To create positional audio effects, create an [SCNAudioPlayer](scnaudioplayer.md) object from the audio source to control playback, and add that player object to an [SCNNode](scnnode.md) object in your scene. SceneKit then automatically spatializes 3D audio effects based on the position of that node relative to the scene’s [audioListener](scnscenerenderer/audiolistener.md) node.

## Topics

### Creating an Audio Source

- [init(named:)](scnaudiosource/init%28named_%29.md): Returns the audio source associated with the specified filename.
- [init(fileNamed:)](scnaudiosource/init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.
- [init(url:)](scnaudiosource/init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.

### Controlling 3D Audio Spatialization

- [isPositional](scnaudiosource/ispositional.md): A Boolean value that determines whether audio from this source uses 3D positional mixing.

### Preloading Audio Data

- [load()](scnaudiosource/load%28%29.md): Loads audio data from the source and prepares it for playing.

### Setting Default Playback Parameters

- [volume](scnaudiosource/volume.md): The default playback volume for the audio source.
- [rate](scnaudiosource/rate.md): The default playback rate for the audio source.
- [reverbBlend](scnaudiosource/reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](scnaudiosource/loops.md): A Boolean value that determines whether the audio source should play repeatedly.
- [shouldStream](scnaudiosource/shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.

### Initializers

- [init(URL:)](scnaudiosource/init%28url_%29-8cknu.md)
- [init(coder:)](scnaudiosource/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Audio

- [SCNAudioPlayer](scnaudioplayer.md): A controller for playback of a positional audio source in a SceneKit scene.

# SCNAudioSource (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A simple, reusable audio source—music or sound effects loaded from a file—for use in positional audio playback.

## Declaration

```objectivec
@interface SCNAudioSource : NSObject
```

<a id="overview"></a>

## Overview

To create positional audio effects, create an [SCNAudioPlayer](scnaudioplayer.md) object from the audio source to control playback, and add that player object to an [SCNNode](scnnode.md) object in your scene. SceneKit then automatically spatializes 3D audio effects based on the position of that node relative to the scene’s [audioListener](scnscenerenderer/audiolistener.md) node.

## Topics

### Creating an Audio Source

- [audioSourceNamed:](scnaudiosource/init%28named_%29.md): Returns the audio source associated with the specified filename.
- [initWithFileNamed:](scnaudiosource/init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.
- [initWithURL:](scnaudiosource/init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.

### Controlling 3D Audio Spatialization

- [positional](scnaudiosource/ispositional.md): A Boolean value that determines whether audio from this source uses 3D positional mixing.

### Preloading Audio Data

- [load](scnaudiosource/load%28%29.md): Loads audio data from the source and prepares it for playing.

### Setting Default Playback Parameters

- [volume](scnaudiosource/volume.md): The default playback volume for the audio source.
- [rate](scnaudiosource/rate.md): The default playback rate for the audio source.
- [reverbBlend](scnaudiosource/reverbblend.md): The default blend of blend of unmodified and reverb-processed (also called dry and wet) audio for playback of the audio source.
- [loops](scnaudiosource/loops.md): A Boolean value that determines whether the audio source should play repeatedly.
- [shouldStream](scnaudiosource/shouldstream.md): A Boolean value that determines whether the audio source should stream content from its source URL when playing.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Audio

- [SCNAudioPlayer](scnaudioplayer.md): A controller for playback of a positional audio source in a SceneKit scene.
