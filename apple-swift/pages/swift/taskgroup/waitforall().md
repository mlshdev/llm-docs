> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/taskgroup/waitforall()

# waitForAll()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Wait for all of the group’s remaining tasks to complete.

## Declaration

```swift
nonisolated(nonsending) mutating func waitForAll() async
```

## See Also

### Accessing Individual Results

- [next()](next%28%29.md)
- [next(isolation:)](next%28isolation_%29.md): Waits for the next child task to complete, and returns the value it returned.
- [isEmpty](isempty.md): A Boolean value that indicates whether the group has any remaining tasks.
