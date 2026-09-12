> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound](https://developer.apple.com/documentation/appkit/nssound)

# NSSound (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A simple interface for loading and playing audio files.

## Declaration

```swift
class NSSound
```

<a id="overview"></a>

## Overview

You create a sound object with an audio file or data, which can be in any format that Core Audio supports. Customize the sound by configuring its properties, such as setting its playback volume and looping behavior. Call the sound’s [play()](nssound/play%28%29.md) method to begin playback. The system executes this call asynchronously so that it doesn’t interrupt the functioning of your app.

If you want to play the system beep sound, use the [beep()](nssound/beep%28%29.md) (Swift) or [NSBeep](nsbeep.md) (Objective-C) function.

## Topics

### Detecting When a Sound Finishes Playing

- [delegate](nssound/delegate.md): The sound’s delegate.
- [NSSoundDelegate](nssounddelegate.md): A set of optional methods implemented by delegates of [NSSound](nssound.md) objects.

### Creating Sounds

- [canInit(with:)](nssound/caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [init(contentsOfFile:byReference:)](nssound/init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [init(contentsOf:byReference:)](nssound/init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [init(data:)](nssound/init%28data_%29.md): Initializes the receiver with a given audio data.
- [init(pasteboard:)](nssound/init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.

### Configuring Sounds

- [name](nssound/name-swift.property.md): The name assigned to the sound.
- [NSSound.Name](nssound/name-swift.typealias.md)
- [setName(\_:)](nssound/setname%28__%29.md)
- [volume](nssound/volume.md): The volume of the sound.
- [currentTime](nssound/currenttime.md): The sound’s playback progress, in seconds.
- [loops](nssound/loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](nssound/playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSound.PlaybackDeviceIdentifier](nssound/playbackdeviceidentifier-swift.typealias.md)

### Getting Sound Information

- [soundUnfilteredTypes](nssound/soundunfilteredtypes.md): Provides the file types the `NSSound` class understands.
- [init(named:)](nssound/init%28named_%29.md): Returns the `NSSound` instance associated with a given name.
- [duration](nssound/duration.md): The duration of the sound, in seconds.

### Playing Sounds

- [beep()](nssound/beep%28%29.md): Plays the system beep.
- [isPlaying](nssound/isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause()](nssound/pause%28%29.md): Pauses audio playback.
- [play()](nssound/play%28%29.md): Initiates audio playback.
- [resume()](nssound/resume%28%29.md): Resumes audio playback.
- [stop()](nssound/stop%28%29.md): Concludes audio playback.

### Writing Sounds

- [write(to:)](nssound/write%28to_%29.md): Writes the receiver’s data to a pasteboard.

### Constants

- [NSPasteboard Type for Sound Data](nspasteboard-type-for-sound-data.md): The `NSSound` class defines this common pasteboard data type.

### Initializers

- [init(coder:)](nssound/init%28coder_%29.md)
- [init(contentsOfURL:byReference:)](nssound/init%28contentsofurl_byreference_%29.md)
- [init(pasteboardPropertyList:ofType:)](nssound/init%28pasteboardpropertylist_oftype_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)

# NSSound (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A simple interface for loading and playing audio files.

## Declaration

```objectivec
@interface NSSound : NSObject
```

<a id="overview"></a>

## Overview

You create a sound object with an audio file or data, which can be in any format that Core Audio supports. Customize the sound by configuring its properties, such as setting its playback volume and looping behavior. Call the sound’s [play](nssound/play%28%29.md) method to begin playback. The system executes this call asynchronously so that it doesn’t interrupt the functioning of your app.

If you want to play the system beep sound, use the [beep()](nssound/beep%28%29.md) (Swift) or [NSBeep](nsbeep.md) (Objective-C) function.

## Topics

### Detecting When a Sound Finishes Playing

- [delegate](nssound/delegate.md): The sound’s delegate.
- [NSSoundDelegate](nssounddelegate.md): A set of optional methods implemented by delegates of [NSSound](nssound.md) objects.

### Creating Sounds

- [canInitWithPasteboard:](nssound/caninit%28with_%29.md): Indicates whether the receiver can create an instance of itself from the data in a pasteboard.
- [initWithContentsOfFile:byReference:](nssound/init%28contentsoffile_byreference_%29.md): Initializes the receiver with the audio data located at a given filepath.
- [initWithContentsOfURL:byReference:](nssound/init%28contentsof_byreference_%29.md): Initializes the receiver with the audio data located at a given URL.
- [initWithData:](nssound/init%28data_%29.md): Initializes the receiver with a given audio data.
- [initWithPasteboard:](nssound/init%28pasteboard_%29.md): Initializes the receiver with data from a pasteboard. The pasteboard should contain a type returned by [NSSound](nssound.md). `NSSound` expects the data to have a proper magic number, sound header, and data for the formats it supports.

### Configuring Sounds

- [name](nssound/name-swift.property.md): The name assigned to the sound.
- [NSSoundName](nssound/name-swift.typealias.md)
- [setName:](nssound/setname%28__%29.md)
- [volume](nssound/volume.md): The volume of the sound.
- [currentTime](nssound/currenttime.md): The sound’s playback progress, in seconds.
- [loops](nssound/loops.md): A Boolean that indicates whether the sound restarts playback when it reaches the end of its content.
- [playbackDeviceIdentifier](nssound/playbackdeviceidentifier-swift.property.md): Identifies the sound’s output device
- [NSSoundPlaybackDeviceIdentifier](nssound/playbackdeviceidentifier-swift.typealias.md)

### Getting Sound Information

- [soundUnfilteredTypes](nssound/soundunfilteredtypes.md): Provides the file types the `NSSound` class understands.
- [soundNamed:](nssound/init%28named_%29.md): Returns the `NSSound` instance associated with a given name.
- [duration](nssound/duration.md): The duration of the sound, in seconds.

### Playing Sounds

- [playing](nssound/isplaying.md): A Boolean that indicates whether the sound is playing its audio data.
- [pause](nssound/pause%28%29.md): Pauses audio playback.
- [play](nssound/play%28%29.md): Initiates audio playback.
- [resume](nssound/resume%28%29.md): Resumes audio playback.
- [stop](nssound/stop%28%29.md): Concludes audio playback.

### Writing Sounds

- [writeToPasteboard:](nssound/write%28to_%29.md): Writes the receiver’s data to a pasteboard.

### Deprecated

- [channelMapping](nssound/channelmapping.md): Deprecated. Provides the receiver’s channel map.
- [setChannelMapping:](nssound/setchannelmapping_.md): Deprecated. Specifies the receiver’s channel map.
- [soundUnfilteredFileTypes](nssound/soundunfilteredfiletypes.md): Deprecated. Provides the list of file types the [NSSound](nssound.md) class understands.
- [soundUnfilteredPasteboardTypes](nssound/soundunfilteredpasteboardtypes.md): Deprecated. Provides a list of the pasteboard types that the `NSSound` class can accept.

### Constants

- [NSPasteboard Type for Sound Data](nspasteboard-type-for-sound-data.md): The `NSSound` class defines this common pasteboard data type.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Sounds

- [NSBeep](nsbeep.md): Plays the system beep.
