> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animationcompletioncriteria/removed](https://developer.apple.com/documentation/swiftui/animationcompletioncriteria/removed)

# removed

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The entire animation is finished and will now be removed.

## Declaration

```swift
static let removed: AnimationCompletionCriteria
```

<a id="discussion"></a>

## Discussion

If a subsequent change occurs that creates additional animations on properties with `removed` completion callbacks registered, then those callbacks will only fire when *all* of the created animations are complete.

## See Also

### Getting the completion criteria

- [logicallyComplete](logicallycomplete.md): The animation has logically completed, but may still be in its long tail.
