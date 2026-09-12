> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/journalingsuggestions/journalingsuggestionasset](https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestionasset)

# JournalingSuggestionAsset

**Framework:** Journaling Suggestions  
**Kind:** Protocol  
**Availability:** iOS 17.2+

An interface for the content that the suggestions picker presents.

## Declaration

```swift
protocol JournalingSuggestionAsset
```

## Mentioned In

- [Presenting the suggestions picker and processing a selection](presenting-the-suggestions-picker-and-processing-a-selection.md)

<a id="overview"></a>

## Overview

When a person makes a selection in a [JournalingSuggestionsPicker](journalingsuggestionspicker.md), the system invokes the picker’s `onCompletion` closure, and passes in the selected suggestion ([JournalingSuggestion](journalingsuggestion.md)). Each item in the suggestion’s [items](journalingsuggestion/items.md) array conforms to this protocol.

## Topics

### Associated Types

- [JournalingSuggestionContent](journalingsuggestionasset/journalingsuggestioncontent.md): Represents a generic content type for journaling suggestions.

## Relationships

### Conforming Types

- [JournalingSuggestion.Contact](journalingsuggestion/contact.md)
- [JournalingSuggestion.EventPoster](journalingsuggestion/eventposter.md)
- [JournalingSuggestion.GenericMedia](journalingsuggestion/genericmedia.md)
- [JournalingSuggestion.LivePhoto](journalingsuggestion/livephoto.md)
- [JournalingSuggestion.Location](journalingsuggestion/location.md)
- [JournalingSuggestion.LocationGroup](journalingsuggestion/locationgroup.md)
- [JournalingSuggestion.MotionActivity](journalingsuggestion/motionactivity.md)
- [JournalingSuggestion.Photo](journalingsuggestion/photo.md)
- [JournalingSuggestion.Podcast](journalingsuggestion/podcast.md)
- [JournalingSuggestion.Reflection](journalingsuggestion/reflection.md)
- [JournalingSuggestion.Song](journalingsuggestion/song.md)
- [JournalingSuggestion.StateOfMind](journalingsuggestion/stateofmind.md)
- [JournalingSuggestion.Video](journalingsuggestion/video.md)
- [JournalingSuggestion.Workout](journalingsuggestion/workout.md)
- [JournalingSuggestion.Workout.Details](journalingsuggestion/workout/details-swift.struct.md)
- [JournalingSuggestion.WorkoutGroup](journalingsuggestion/workoutgroup.md)

## See Also

### Implementation

- [JournalingSuggestionsPicker](journalingsuggestionspicker.md): A view that lists different types of recent events in a person’s life.
- [JournalingSuggestion](journalingsuggestion.md): High-level information about a suggestion that a person chooses in the journaling suggestions picker.
