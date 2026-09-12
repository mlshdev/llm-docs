> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/infinity](https://developer.apple.com/documentation/swift/float16/infinity)

# infinity

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Positive infinity.

## Declaration

```swift
static var infinity: Float16 { get }
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
