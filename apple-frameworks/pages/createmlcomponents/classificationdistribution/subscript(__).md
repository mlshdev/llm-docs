> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/classificationdistribution/subscript(_:)](https://developer.apple.com/documentation/createmlcomponents/classificationdistribution/subscript(_:))

# subscript(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Subscript  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Accesses a contiguous range of elements.

## Declaration

```swift
subscript(bounds: Range<Int>) -> Slice<ClassificationDistribution<Label>> { get }
```

## Parameters

- `bounds`: A range of valid indices in the classification distribution.
