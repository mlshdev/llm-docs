> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/removelastcomponent()](https://developer.apple.com/documentation/system/filepath/removelastcomponent())

# removeLastComponent()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

In-place mutating variant of `removingLastComponent`.

## Declaration

```swift
@discardableResult mutating func removeLastComponent() -> Bool
```

<a id="discussion"></a>

## Discussion

If `self` only contains a root, does nothing and returns `false`. Otherwise removes `lastComponent` and returns `true`.

Example:

```swift
var path = "/usr/bin"
path.removeLastComponent() == true  // path is "/usr"
path.removeLastComponent() == true  // path is "/"
path.removeLastComponent() == false // path is "/"
```
