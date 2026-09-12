> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/interactivespring(duration:extrabounce:blendduration:)](https://developer.apple.com/documentation/swiftui/animation/interactivespring(duration:extrabounce:blendduration:))

# interactiveSpring(duration:extraBounce:blendDuration:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A convenience for a `spring` animation with a lower `response` value, intended for driving interactive animations.

## Declaration

```swift
@export(implementation) static func interactiveSpring(duration: TimeInterval = 0.15, extraBounce: Double = 0.0, blendDuration: TimeInterval = 0.25) -> Animation
```
