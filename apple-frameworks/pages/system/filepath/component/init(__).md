> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/init(_:)](https://developer.apple.com/documentation/system/filepath/component/init(_:))

# init(\_:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a file path component from a string.

## Declaration

```swift
init?(_ string: String)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `string` is empty, a root, or has more than one component in it.
