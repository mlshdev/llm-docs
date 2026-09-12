> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphoperation/controldependencies](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphoperation/controldependencies)

# controlDependencies (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The set of operations guaranteed to execute before this operation.

## Declaration

```swift
var controlDependencies: [MPSGraphOperation] { get }
```

# controlDependencies (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The set of operations guaranteed to execute before this operation.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) NSArray<MPSGraphOperation *> * controlDependencies;
```
