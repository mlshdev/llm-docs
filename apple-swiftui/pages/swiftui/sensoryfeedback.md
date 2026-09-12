> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback](https://developer.apple.com/documentation/swiftui/sensoryfeedback)

# SensoryFeedback

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Represents a type of haptic and/or audio feedback that can be played.

## Declaration

```swift
struct SensoryFeedback
```

<a id="overview"></a>

## Overview

This feedback can be passed to `View.sensoryFeedback` to play it.

## Topics

### Indicating start and stop

- [start](sensoryfeedback/start.md): Indicates that an activity started.
- [stop](sensoryfeedback/stop.md): Indicates that an activity stopped.

### Indicating changes and selections

- [alignment](sensoryfeedback/alignment.md): Indicates the alignment of a dragged item.
- [decrease](sensoryfeedback/decrease.md): Indicates that an important value decreased below a significant threshold.
- [increase](sensoryfeedback/increase.md): Indicates that an important value increased above a significant threshold.
- [levelChange](sensoryfeedback/levelchange.md): Indicates movement between discrete levels of pressure.
- [selection](sensoryfeedback/selection.md): Indicates that a UI element’s values are changing.
- [pathComplete](sensoryfeedback/pathcomplete.md): Indicates a drawn path has completed and/or recognized.

### Indicating the outcome of an operation

- [success](sensoryfeedback/success.md): Indicates that a task or action has completed.
- [warning](sensoryfeedback/warning.md): Indicates that a task or action has produced a warning of some kind.
- [error](sensoryfeedback/error.md): Indicates that an error has occurred.

### Producing a physical impact

- [impact](sensoryfeedback/impact.md): Provides a physical metaphor you can use to complement a visual experience.
- [impact(weight:intensity:)](sensoryfeedback/impact%28weight_intensity_%29.md): Provides a physical metaphor you can use to complement a visual experience.
- [impact(flexibility:intensity:)](sensoryfeedback/impact%28flexibility_intensity_%29.md): Provides a physical metaphor you can use to complement a visual experience.
- [SensoryFeedback.Flexibility](sensoryfeedback/flexibility.md): The flexibility to be represented by a type of feedback.
- [SensoryFeedback.Weight](sensoryfeedback/weight.md): The weight to be represented by a type of feedback.

### Structures

- [SensoryFeedback.PressFeedback](sensoryfeedback/pressfeedback.md): Feedback that can be played in response to a press (touch down) on a control.
- [SensoryFeedback.ReleaseFeedback](sensoryfeedback/releasefeedback.md): Feedback that can be played in response to a release (touch up) of a control.
- [SensoryFeedback.SelectionFeedback](sensoryfeedback/selectionfeedback.md): Feedback that can be played in response to a specific UI element’s values changing.

### Type Methods

- [press(\_:)](sensoryfeedback/press%28__%29.md): Plays feedback in response to a specific UI element being pressed (touch down).
- [release(\_:)](sensoryfeedback/release%28__%29.md): Plays feedback in response to a specific UI element being released (touch up).
- [selection(\_:)](sensoryfeedback/selection%28__%29.md): Plays feedback in response to a specific UI element’s values changing.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing haptic feedback

- [sensoryFeedback(\_:trigger:)](view/sensoryfeedback%28__trigger_%29.md): Plays the specified `feedback` when the provided `trigger` value changes.
- [sensoryFeedback(trigger:\_:)](view/sensoryfeedback%28trigger___%29.md): Plays feedback when returned from the `feedback` closure after the provided `trigger` value changes.
- [sensoryFeedback(\_:trigger:condition:)](view/sensoryfeedback%28__trigger_condition_%29.md): Plays the specified `feedback` when the provided `trigger` value changes and the `condition` closure returns `true`.
