> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/mergemany/init(_:)-3hrmo](https://developer.apple.com/documentation/combine/publishers/mergemany/init(_:)-3hrmo)

# init(\_:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher created by applying the merge function to a sequence of upstream publishers.

## Declaration

```swift
init<S>(_ upstream: S) where Upstream == S.Element, S : Sequence
```

## Parameters

- `upstream`: A sequence containing zero or more publishers to merge with this publisher.

## See Also

### Creating a merge many publisher

- [init(\_:)](init%28__%29-1hsqd.md): Creates a publisher created by applying the merge function to an arbitrary number of upstream publishers.
