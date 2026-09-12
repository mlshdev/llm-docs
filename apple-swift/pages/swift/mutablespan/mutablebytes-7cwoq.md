> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan/mutablebytes-7cwoq](https://developer.apple.com/documentation/swift/mutablespan/mutablebytes-7cwoq)

# mutableBytes

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Construct a mutable raw span over the memory represented by this span.

## Declaration

```swift
var mutableBytes: MutableRawSpan { mutating get }
```

<a id="return-value"></a>

## Return Value

A `MutableRawSpan` over the memory represented by this span.

<a id="discussion"></a>

## Discussion

Mutating `self` through this property is unsafe because it is possible to mutate a byte so as to produce an invalid bit pattern in the corresponding instance of `Element`.
