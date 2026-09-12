> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/infinity](https://developer.apple.com/documentation/swift/float80/infinity)

# infinity

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

Positive infinity.

## Declaration

```swift
static var infinity: Float80 { get }
```

<a id="discussion"></a>

## Discussion

Infinity compares greater than all finite numbers and equal to other infinite values.

```swift
let x = Double.greatestFiniteMagnitude
let y = x * 2
// y == Double.infinity
// y > x
```
