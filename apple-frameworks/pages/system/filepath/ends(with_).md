> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/ends(with:)](https://developer.apple.com/documentation/system/filepath/ends(with:))

# ends(with:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns whether `other` is a suffix of `self`, only considering whole path components.

## Declaration

```swift
func ends(with other: FilePath) -> Bool
```

<a id="discussion"></a>

## Discussion

Example:

```swift
let path: FilePath = "/usr/bin/ls"
path.ends(with: "ls")             // true
path.ends(with: "bin/ls")         // true
path.ends(with: "usr/bin/ls")     // true
path.ends(with: "/usr/bin/ls///") // true
path.ends(with: "/ls")            // false
```
