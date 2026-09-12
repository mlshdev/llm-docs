> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnfilternode/traininggraph(withsourcegradient:nodehandler:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnfilternode/traininggraph(withsourcegradient:nodehandler:))

# trainingGraph(withSourceGradient:nodeHandler:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func trainingGraph(withSourceGradient gradientImage: MPSNNImageNode?, nodeHandler: MPSGradientNodeBlock? = nil) -> [MPSNNFilterNode]?
```

# trainingGraphWithSourceGradient:nodeHandler: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (NSArray<MPSNNFilterNode *> *) trainingGraphWithSourceGradient:(MPSNNImageNode *) gradientImage nodeHandler:(MPSGradientNodeBlock) nodeHandler;
```
