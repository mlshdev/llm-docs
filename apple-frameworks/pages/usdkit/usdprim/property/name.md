> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/name](https://developer.apple.com/documentation/usdkit/usdprim/property/name)

# name

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of this property.

## Declaration

```swift
var name: USDToken { get }
```

<a id="discussion"></a>

## Discussion

A property’s name is the last component of its [path](path.md). `name` is equivalent to the `USDLayer.Path/name` of that path.
