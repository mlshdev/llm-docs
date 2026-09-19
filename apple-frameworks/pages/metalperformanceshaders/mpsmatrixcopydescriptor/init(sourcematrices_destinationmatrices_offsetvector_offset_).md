> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsmatrixcopydescriptor/init(sourcematrices:destinationmatrices:offsetvector:offset:)

# init(sourceMatrices:destinationMatrices:offsetVector:offset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
init(sourceMatrices: [MPSMatrix], destinationMatrices: [MPSMatrix], offsetVector offsets: MPSVector?, offset byteOffset: Int)
```

# initWithSourceMatrices:destinationMatrices:offsetVector:offset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithSourceMatrices:(NSArray<MPSMatrix *> *) sourceMatrices destinationMatrices:(NSArray<MPSMatrix *> *) destinationMatrices offsetVector:(MPSVector *) offsets offset:(NSUInteger) byteOffset;
```
