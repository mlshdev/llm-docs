> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/geometryeffect/ignoredbylayout()](https://developer.apple.com/documentation/swiftui/geometryeffect/ignoredbylayout())

# ignoredByLayout()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns an effect that produces the same geometry transform as this effect, but only applies the transform while rendering its view.

## Declaration

```swift
nonisolated func ignoredByLayout() -> _IgnoredByLayoutEffect<Self>
```

<a id="discussion"></a>

## Discussion

Use this method to disable layout changes during transitions. The view ignores the transform returned by this method while the view is performing its layout calculations.

## See Also

### Applying effects

- [effectValue(size:)](effectvalue%28size_%29.md): Returns the current value of the effect.
