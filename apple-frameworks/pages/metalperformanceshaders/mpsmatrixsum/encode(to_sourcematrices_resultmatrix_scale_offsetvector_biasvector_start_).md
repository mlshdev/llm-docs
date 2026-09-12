> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsmatrixsum/encode(to:sourcematrices:resultmatrix:scale:offsetvector:biasvector:start:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixsum/encode(to:sourcematrices:resultmatrix:scale:offsetvector:biasvector:start:))

# encode(to:sourceMatrices:resultMatrix:scale:offsetVector:biasVector:start:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to buffer: any MTLCommandBuffer, sourceMatrices: [MPSMatrix], resultMatrix: MPSMatrix, scale scaleVector: MPSVector?, offsetVector: MPSVector?, biasVector: MPSVector?, start startIndex: Int)
```

# encodeToCommandBuffer:sourceMatrices:resultMatrix:scaleVector:offsetVector:biasVector:startIndex: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) buffer sourceMatrices:(NSArray<MPSMatrix *> *) sourceMatrices resultMatrix:(MPSMatrix *) resultMatrix scaleVector:(MPSVector *) scaleVector offsetVector:(MPSVector *) offsetVector biasVector:(MPSVector *) biasVector startIndex:(NSUInteger) startIndex;
```
