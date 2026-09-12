> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsstatebatchincrementreadcount(_:_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsstatebatchincrementreadcount(_:_:))

# MPSStateBatchIncrementReadCount(\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Increments or decrements the read count of a state batch by a specified amount.

## Declaration

```swift
func MPSStateBatchIncrementReadCount(_ batch: [MPSState]?, _ amount: Int) -> Int
```

# MPSStateBatchIncrementReadCount (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Increments or decrements the read count of a state batch by a specified amount.

## Declaration

```objectivec
NSUInteger MPSStateBatchIncrementReadCount(MPSStateBatch *batch, NSInteger amount);
```
