> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyhashable/init(_:)](https://developer.apple.com/documentation/swift/anyhashable/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a type-erased hashable value that wraps the given instance.

## Declaration

```swift
init<H>(_ base: H) where H : Hashable
```

## Parameters

- `base`: A hashable value to wrap.
