> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows/subscript(_:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindows/subscript(_:))

# subscript(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Subscript  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Accesses a contiguous range of windows.

## Declaration

```swift
subscript(bounds: Range<Int>) -> Slice<SlidingWindows<Scalar>> { get }
```

## Parameters

- `bounds`: A range of valid indices in the classification distribution.
