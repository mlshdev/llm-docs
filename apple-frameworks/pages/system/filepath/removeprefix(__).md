> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/removeprefix(_:)](https://developer.apple.com/documentation/system/filepath/removeprefix(_:))

# removePrefix(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

If `prefix` is a prefix of `self`, removes it and returns `true`. Otherwise returns `false`.

## Declaration

```swift
mutating func removePrefix(_ prefix: FilePath) -> Bool
```

<a id="discussion"></a>

## Discussion

Example:

```swift
var path: FilePath = "/usr/local/bin"
path.removePrefix("/usr/bin")   // false
path.removePrefix("/us")        // false
path.removePrefix("/usr/local") // true, path is "bin"
```
