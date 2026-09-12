> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transitionproperties/hasmotion](https://developer.apple.com/documentation/swiftui/transitionproperties/hasmotion)

# hasMotion

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Whether the transition includes motion.

## Declaration

```swift
var hasMotion: Bool
```

<a id="discussion"></a>

## Discussion

When this behavior is included in a transition, that transition will be replaced by opacity when Reduce Motion is enabled.

Defaults to `true`.

## See Also

### Creating the transition properties

- [init(hasMotion:)](init%28hasmotion_%29.md)
