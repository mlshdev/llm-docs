> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/root-swift.struct/init(_:)](https://developer.apple.com/documentation/system/filepath/root-swift.struct/init(_:))

# init(\_:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a file path root from a string.

## Declaration

```swift
init?(_ string: String)
```

<a id="discussion"></a>

## Discussion

Returns `nil` if `string` is empty or is not a root.
