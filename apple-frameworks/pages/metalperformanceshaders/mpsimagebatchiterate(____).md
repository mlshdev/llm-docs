> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagebatchiterate(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagebatchiterate(_:_:))

# MPSImageBatchIterate(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Executes a callback block once for each unique image in a batch.

## Declaration

```swift
func MPSImageBatchIterate(_ batch: [MPSImage], _ iteratorBlock: @escaping (MPSImage, Int) -> Int) -> Int
```

# MPSImageBatchIterate (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Executes a callback block once for each unique image in a batch.

## Declaration

```objectivec
NSInteger MPSImageBatchIterate(MPSImageBatch *batch, NSInteger (^iteratorBlock)(MPSImage *image, NSUInteger index));
```
