> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectcommandbufferexecutionrange/init(location:length:)](https://developer.apple.com/documentation/metal/mtlindirectcommandbufferexecutionrange/init(location:length:))

# init(location:length:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Initializes an command execution range.

## Declaration

```swift
init(location: UInt32, length: UInt32)
```

## Parameters

- `location`: The start index of the range.
- `length`: The number of items in the range.

## See Also

### Creating a command execution range

- [init()](init%28%29.md): Initializes an empty command execution range.
- [MTLIndirectCommandBufferExecutionRangeMake(\_:\_:)](../mtlindirectcommandbufferexecutionrangemake%28____%29.md): Creates a command execution range.
