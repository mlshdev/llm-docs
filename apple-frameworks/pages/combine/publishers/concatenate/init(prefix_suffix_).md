> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/concatenate/init(prefix:suffix:)](https://developer.apple.com/documentation/combine/publishers/concatenate/init(prefix:suffix:))

# init(prefix:suffix:)

**Framework:** Combine  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a publisher that emits all of one publisher’s elements before those from another publisher.

## Declaration

```swift
init(prefix: Prefix, suffix: Suffix)
```

## Parameters

- `prefix`: The publisher to republish, in its entirety, before republishing elements from `suffix`.
- `suffix`: The publisher to republish only after `prefix` finishes.
