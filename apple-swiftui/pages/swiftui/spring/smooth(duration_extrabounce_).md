> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spring/smooth(duration:extrabounce:)](https://developer.apple.com/documentation/swiftui/spring/smooth(duration:extrabounce:))

# smooth(duration:extraBounce:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A smooth spring with a predefined duration and no bounce that can be tuned.

## Declaration

```swift
@export(implementation) static func smooth(duration: TimeInterval = 0.5, extraBounce: Double = 0.0) -> Spring
```

## Parameters

- `duration`: The perceptual duration, which defines the pace of the spring. This is approximately equal to the settling duration, but for very bouncy springs, will be the duration of the period of oscillation for the spring.
- `extraBounce`: How much additional bounce should be added to the base bounce of 0.

## See Also

### Getting built-in springs

- [bouncy](bouncy.md): A spring with a predefined duration and higher amount of bounce.
- [bouncy(duration:extraBounce:)](bouncy%28duration_extrabounce_%29.md): A spring with a predefined duration and higher amount of bounce that can be tuned.
- [smooth](smooth.md): A smooth spring with a predefined duration and no bounce.
- [snappy](snappy.md): A spring with a predefined duration and small amount of bounce that feels more snappy.
- [snappy(duration:extraBounce:)](snappy%28duration_extrabounce_%29.md): A spring with a predefined duration and small amount of bounce that feels more snappy and can be tuned.
