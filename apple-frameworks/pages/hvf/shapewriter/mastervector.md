> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/shapewriter/mastervector](https://developer.apple.com/documentation/hvf/shapewriter/mastervector)

# masterVector

**Framework:** hvf  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

The master point segments, in path order. Each segment is in the order: Curve: parallel factor, zero, off X, off Y Not curve: on X, on Y, off X, off Y

## Declaration

```swift
var masterVector: [Double] { get set }
```
