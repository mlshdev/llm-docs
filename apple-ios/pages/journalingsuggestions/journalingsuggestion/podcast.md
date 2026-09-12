> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/podcast](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/podcast)

# JournalingSuggestion.Podcast

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 17.2+

A suggestion that describes a podcast episode a person listened to.

## Declaration

```swift
struct Podcast
```

## Mentioned In

- [Presenting the suggestions picker and processing a selection](../presenting-the-suggestions-picker-and-processing-a-selection.md)

<a id="overview"></a>

## Overview

The system provides an instance of this structure to your app when a person chooses a podcast suggestion in the [JournalingSuggestionsPicker](../journalingsuggestionspicker.md).

## Topics

### Identifying the podcast

- [show](podcast/show.md): The podcast’s show name.
- [episode](podcast/episode.md): The podcast episode’s name.
- [artwork](podcast/artwork.md): The URL to an image on disk for the podcast artwork.

### Inspecting interaction details

- [date](podcast/date.md): The podcast’s recent play date.

## Relationships

### Conforms To

- [JournalingSuggestionAsset](../journalingsuggestionasset.md)

## See Also

### Interacting with suggestion types

- [JournalingSuggestion.Contact](contact.md): A suggestion for a connection a person makes with someone else.
- [JournalingSuggestion.EventPoster](eventposter.md): A suggestion for a poster image of an event.
- [JournalingSuggestion.GenericMedia](genericmedia.md): A suggestion describing now playable media that a person listened to.
- [JournalingSuggestion.LivePhoto](livephoto.md): A suggestion for a Live Photo from a person’s library.
- [JournalingSuggestion.Location](location.md): A suggestion that represents a location that a person visits.
- [JournalingSuggestion.LocationGroup](locationgroup.md): A suggestion that contains multiple visited locations that a person chooses in the picker.
- [JournalingSuggestion.MotionActivity](motionactivity.md): A suggestion that describes motion activity, including the number of steps a person takes.
- [JournalingSuggestion.Photo](photo.md): A suggestion for a photo from a person’s library.
- [JournalingSuggestion.Reflection](reflection.md): A suggestion for a reflection prompt.
- [JournalingSuggestion.StateOfMind](stateofmind.md): A suggestion that describes a state of mind reflection in the Health app.
- [JournalingSuggestion.Song](song.md): A suggestion for a song from a person’s music library.
- [JournalingSuggestion.Video](video.md): A suggestion for a video from a person’s library.
- [JournalingSuggestion.Workout](workout.md): A suggestion that describes a workout that a person completed.
- [JournalingSuggestion.WorkoutGroup](workoutgroup.md): A suggestion that contains multiple workouts that a person chooses in the picker.
