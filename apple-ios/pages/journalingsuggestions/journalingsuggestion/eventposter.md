> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestion/eventposter](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/eventposter)

# JournalingSuggestion.EventPoster

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 26.0+

A suggestion for a poster image of an event.

## Declaration

```swift
struct EventPoster
```

## Mentioned In

- [Presenting the suggestions picker and processing a selection](../presenting-the-suggestions-picker-and-processing-a-selection.md)

<a id="overview"></a>

## Overview

The system provides a `EventPoster` value to your app when a person chooses a suggestion with a event poster

## Topics

### Identifying an event

- [title](eventposter/title.md): The title of the event.
- [placeName](eventposter/placename.md): Location displayed name on the poster.
- [image](eventposter/image.md): A poster image URL.

### Reviewing event dates

- [eventEnd](eventposter/eventend.md): The end date of the event.
- [eventStart](eventposter/eventstart.md): The start date of the event.

### Distinguishing the organizer

- [isHost](eventposter/ishost.md): Boolean whether the user is the host of the event.

## Relationships

### Conforms To

- [JournalingSuggestionAsset](../journalingsuggestionasset.md)

## See Also

### Interacting with suggestion types

- [JournalingSuggestion.Contact](contact.md): A suggestion for a connection a person makes with someone else.
- [JournalingSuggestion.GenericMedia](genericmedia.md): A suggestion describing now playable media that a person listened to.
- [JournalingSuggestion.LivePhoto](livephoto.md): A suggestion for a Live Photo from a person’s library.
- [JournalingSuggestion.Location](location.md): A suggestion that represents a location that a person visits.
- [JournalingSuggestion.LocationGroup](locationgroup.md): A suggestion that contains multiple visited locations that a person chooses in the picker.
- [JournalingSuggestion.MotionActivity](motionactivity.md): A suggestion that describes motion activity, including the number of steps a person takes.
- [JournalingSuggestion.Photo](photo.md): A suggestion for a photo from a person’s library.
- [JournalingSuggestion.Podcast](podcast.md): A suggestion that describes a podcast episode a person listened to.
- [JournalingSuggestion.Reflection](reflection.md): A suggestion for a reflection prompt.
- [JournalingSuggestion.StateOfMind](stateofmind.md): A suggestion that describes a state of mind reflection in the Health app.
- [JournalingSuggestion.Song](song.md): A suggestion for a song from a person’s music library.
- [JournalingSuggestion.Video](video.md): A suggestion for a video from a person’s library.
- [JournalingSuggestion.Workout](workout.md): A suggestion that describes a workout that a person completed.
- [JournalingSuggestion.WorkoutGroup](workoutgroup.md): A suggestion that contains multiple workouts that a person chooses in the picker.
