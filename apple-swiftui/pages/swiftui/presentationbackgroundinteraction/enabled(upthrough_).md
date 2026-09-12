> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/presentationbackgroundinteraction/enabled(upthrough:)](https://developer.apple.com/documentation/swiftui/presentationbackgroundinteraction/enabled(upthrough:))

# enabled(upThrough:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

People can interact with the view behind a presentation up through a specified detent.

## Declaration

```swift
static func enabled(upThrough detent: PresentationDetent) -> PresentationBackgroundInteraction
```

## Parameters

- `detent`: The largest detent at which people can interact with the view behind the presentation.

<a id="discussion"></a>

## Discussion

At detents larger than the one you specify, SwiftUI disables interaction.

## See Also

### Getting interaction types

- [automatic](automatic.md): The default background interaction for the presentation.
- [disabled](disabled.md): People can’t interact with the view behind a presentation.
- [enabled](enabled.md): People can interact with the view behind a presentation.
