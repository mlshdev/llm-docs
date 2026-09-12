> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/version-swift.struct/init(_:_:_:)](https://developer.apple.com/documentation/swiftdata/schema/version-swift.struct/init(_:_:_:))

# init(\_:\_:\_:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Initializes a version struct with the provided components of a semantic version.

## Declaration

```swift
init(_ major: Int, _ minor: Int, _ patch: Int)
```

## Parameters

- `major`: The major version number.
- `minor`: The minor version number.
- `patch`: The patch version number.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `major >= 0 && minor >= 0 && patch >= 0`.
