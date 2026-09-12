> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivecontentbrightness/custom(_:)](https://developer.apple.com/documentation/swiftui/immersivecontentbrightness/custom(_:))

# custom(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 1.0+

Creates a content brightness with a custom value.

## Declaration

```swift
static func custom(_ value: Double) -> ImmersiveContentBrightness
```

## Parameters

- `value`: The value of the brightness. Provide a value between 0 and 1. Larger values correspond to a brighter environment.

## See Also

### Getting brightness levels

- [automatic](automatic.md): The default content brightness.
- [dark](dark.md): A dark content brightness.
- [dim](dim.md): A dimmed content brightness.
- [bright](bright.md): A bright content brightness.
