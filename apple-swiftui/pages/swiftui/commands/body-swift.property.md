> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commands/body-swift.property](https://developer.apple.com/documentation/swiftui/commands/body-swift.property)

# body

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The contents of the command hierarchy.

## Declaration

```swift
@ContentBuilder @MainActor @preconcurrency var body: Self.Body { get }
```

<a id="discussion"></a>

## Discussion

For any commands that you create, provide a computed `body` property that defines the scene as a composition of other scenes. You can assemble a command hierarchy from built-in commands that SwiftUI provides, as well as other commands that you’ve defined.

## See Also

### Implementing commands

- [Body](body-swift.associatedtype.md): The type of commands that represents the body of this command hierarchy.
