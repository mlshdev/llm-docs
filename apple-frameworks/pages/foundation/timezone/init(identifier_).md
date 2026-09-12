> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timezone/init(identifier:)](https://developer.apple.com/documentation/foundation/timezone/init(identifier:))

# init(identifier:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a time zone initialized with a given identifier.

## Declaration

```swift
init?(identifier: String)
```

<a id="discussion"></a>

## Discussion

An example identifier is “America/Los_Angeles”.

If `identifier` is an unknown identifier, then returns `nil`.
