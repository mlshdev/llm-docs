> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcslicelayer/init(start:end:stride:)](https://developer.apple.com/documentation/mlcompute/mlcslicelayer/init(start:end:stride:))

# init(start:end:stride:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a slice layer with the start, end, and stride you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init?(start: [Int], end: [Int], stride: [Int]?)
```

## Parameters

- `start`: The start vector.
- `end`: The end vector.
- `stride`: The stride vector.
