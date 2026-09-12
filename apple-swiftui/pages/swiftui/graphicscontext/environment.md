> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/environment](https://developer.apple.com/documentation/swiftui/graphicscontext/environment)

# environment

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The environment associated with the graphics context.

## Declaration

```swift
var environment: EnvironmentValues { get set }
```

<a id="discussion"></a>

## Discussion

SwiftUI initially sets this to the environment of the context’s enclosing view. The context uses values like display resolution and the color scheme from the environment to resolve types like [Image](../image.md) and [Color](../color.md). You can also access values stored in the environment for your own purposes.
