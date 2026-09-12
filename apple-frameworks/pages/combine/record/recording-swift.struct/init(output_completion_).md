> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/record/recording-swift.struct/init(output:completion:)](https://developer.apple.com/documentation/combine/record/recording-swift.struct/init(output:completion:))

# init(output:completion:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Set up a complete recording with the specified output and completion.

## Declaration

```swift
init(output: [Output], completion: Subscribers.Completion<Failure> = .finished)
```

## See Also

### Creating a recording

- [init()](init%28%29.md): Set up a recording in a state ready to receive output.
