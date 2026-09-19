> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/osallocatedunfairlock/init()

# init()

**Framework:** os  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a lock object that doesn’t protect state data.

## Declaration

```swift
init()
```

## See Also

### Creating a lock object

- [init(initialState:)](init%28initialstate_%29.md): Conforms when `State` conforms to `Sendable`. Creates a lock object that maintains and protects state data.
