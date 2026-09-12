> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/init(initialstate:)](https://developer.apple.com/documentation/os/osallocatedunfairlock/init(initialstate:))

# init(initialState:)

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a lock object that maintains and protects state data.

## Declaration

```swift
init(initialState: State)
```

## Parameters

- `initialState`: The starting state of the operation.

## See Also

### Creating a lock object

- [init()](init%28%29.md): Conforms when `State` is `()`. Creates a lock object that doesn’t protect state data.
