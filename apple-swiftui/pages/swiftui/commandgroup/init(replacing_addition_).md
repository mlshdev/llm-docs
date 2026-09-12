> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroup/init(replacing:addition:)](https://developer.apple.com/documentation/swiftui/commandgroup/init(replacing:addition:))

# init(replacing:addition:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A value describing the complete replacement of the contents of the indicated group with the given views.

## Declaration

```swift
nonisolated init(replacing group: CommandGroupPlacement, @ContentBuilder addition: () -> Content)
```

## See Also

### Creating a command group

- [init(after:addition:)](init%28after_addition_%29.md): A value describing the addition of the given views to the end of the indicated group.
- [init(before:addition:)](init%28before_addition_%29.md): A value describing the addition of the given views to the beginning of the indicated group.
