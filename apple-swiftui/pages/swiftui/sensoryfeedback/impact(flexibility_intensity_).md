> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/impact(flexibility:intensity:)](https://developer.apple.com/documentation/swiftui/sensoryfeedback/impact(flexibility:intensity:))

# impact(flexibility:intensity:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Provides a physical metaphor you can use to complement a visual experience.

## Declaration

```swift
static func impact(flexibility: SensoryFeedback.Flexibility, intensity: Double = 1.0) -> SensoryFeedback
```

<a id="discussion"></a>

## Discussion

Use this to provide feedback for UI elements colliding. It should supplement the user experience, since only some platforms will play feedback in response to it.

Not all platforms will play different feedback for different flexibilities and intensities of impact.

Only plays feedback on iOS and watchOS.

## See Also

### Producing a physical impact

- [impact](impact.md): Provides a physical metaphor you can use to complement a visual experience.
- [impact(weight:intensity:)](impact%28weight_intensity_%29.md): Provides a physical metaphor you can use to complement a visual experience.
- [SensoryFeedback.Flexibility](flexibility.md): The flexibility to be represented by a type of feedback.
- [SensoryFeedback.Weight](weight.md): The weight to be represented by a type of feedback.
