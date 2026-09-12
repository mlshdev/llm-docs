> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/append(_:)-8f41n](https://developer.apple.com/documentation/system/filepath/append(_:)-8f41n)

# append(\_:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Append a `component` on to the end of this path.

## Declaration

```swift
mutating func append(_ component: FilePath.Component)
```

<a id="discussion"></a>

## Discussion

Example:

```swift
var path: FilePath = "/tmp"
let sub: FilePath = "foo/./bar/../baz/."
for comp in sub.components.filter({ $0.kind != .currentDirectory }) {
  path.append(comp)
}
// path is "/tmp/foo/bar/../baz"
```
