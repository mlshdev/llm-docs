> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/journalingsuggestions/journalingsuggestion/motionactivity/movementtype-swift.struct

# JournalingSuggestion.MotionActivity.MovementType

**Framework:** Journaling Suggestions  
**Kind:** Structure  
**Availability:** iOS 18.0+

The movement activity type that the phone records when it detects motion.

## Declaration

```swift
struct MovementType
```

## Topics

### Recording movement type

- [running](movementtype-swift.struct/running.md): A running movement activity type.
- [runningWalking](movementtype-swift.struct/runningwalking.md): A mixed running and walking movement activity type.
- [walking](movementtype-swift.struct/walking.md): A walking movement activity type.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Inspecting motion details

- [steps](steps.md): The number of steps a person takes.
- [movementType](movementtype-swift.property.md): The specific type of movement associated with the activity.
