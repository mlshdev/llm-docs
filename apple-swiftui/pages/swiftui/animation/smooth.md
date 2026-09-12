> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animation/smooth](https://developer.apple.com/documentation/swiftui/animation/smooth)

# smooth

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A smooth spring animation with a predefined duration and no bounce.

## Declaration

```swift
@export(implementation) static var smooth: Animation { get }
```

## See Also

### Getting built-in spring animations

- [bouncy](bouncy.md): A spring animation with a predefined duration and higher amount of bounce.
- [bouncy(duration:extraBounce:)](bouncy%28duration_extrabounce_%29.md): A spring animation with a predefined duration and higher amount of bounce that can be tuned.
- [smooth(duration:extraBounce:)](smooth%28duration_extrabounce_%29.md): A smooth spring animation with a predefined duration and no bounce that can be tuned.
- [snappy](snappy.md): A spring animation with a predefined duration and small amount of bounce that feels more snappy.
- [snappy(duration:extraBounce:)](snappy%28duration_extrabounce_%29.md): A spring animation with a predefined duration and small amount of bounce that feels more snappy and can be tuned.
