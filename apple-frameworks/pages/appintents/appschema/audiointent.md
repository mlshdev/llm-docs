> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/audiointent](https://developer.apple.com/documentation/appintents/appschema/audiointent)

# AppSchema.AudioIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies intent schemas in the audio domain.

## Declaration

```swift
protocol AudioIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [addToLibrary](audiointent/addtolibrary.md): An intent schema that adds an audio item to the person’s library.
- [addToPlaylist](audiointent/addtoplaylist.md): An intent schema that adds an audio item to a playlist.
- [createStation](audiointent/createstation.md): An intent schema that starts a station based on the now-playing item.
- [playAudio](audiointent/playaudio.md): An intent schema that plays an audio item.
- [recognizeAudio](audiointent/recognizeaudio.md): An intent schema that finds out what audio is playing nearby.
- [updateAudioAffinity](audiointent/updateaudioaffinity.md): An intent schema that sets the like state of an audio item to liked, unliked, or unset.
- [warmupAudioQueue](audiointent/warmupaudioqueue.md): An intent schema that warms up an audio item by setting the queue without starting playback.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [addToLibrary](audiointent/addtolibrary.md): An intent schema that adds an audio item to the person’s library.
- [addToPlaylist](audiointent/addtoplaylist.md): An intent schema that adds an audio item to a playlist.
- [createStation](audiointent/createstation.md): An intent schema that starts a station based on the now-playing item.
- [playAudio](audiointent/playaudio.md): An intent schema that plays an audio item.
- [recognizeAudio](audiointent/recognizeaudio.md): An intent schema that finds out what audio is playing nearby.
- [updateAudioAffinity](audiointent/updateaudioaffinity.md): An intent schema that sets the like state of an audio item to liked, unliked, or unset.
- [warmupAudioQueue](audiointent/warmupaudioqueue.md): An intent schema that warms up an audio item by setting the queue without starting playback.
