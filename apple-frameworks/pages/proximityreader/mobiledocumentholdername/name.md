> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentholdername/name](https://developer.apple.com/documentation/proximityreader/mobiledocumentholdername/name)

# name

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A string representation of the name.

## Declaration

```swift
let name: String
```

<a id="discussion"></a>

## Discussion

If available, this string will be taken directly from the underlying document. If not, then it will be synthesized by formatting the available name components from the underlying document.
