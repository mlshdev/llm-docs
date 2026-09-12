> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commands/body-swift.associatedtype](https://developer.apple.com/documentation/swiftui/commands/body-swift.associatedtype)

# Body

**Framework:** SwiftUI  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The type of commands that represents the body of this command hierarchy.

## Declaration

```swift
associatedtype Body : Commands
```

<a id="discussion"></a>

## Discussion

When you create custom commands, Swift infers this type from your implementation of the required [body](body-swift.property.md) property.

## See Also

### Implementing commands

- [body](body-swift.property.md): The contents of the command hierarchy.
