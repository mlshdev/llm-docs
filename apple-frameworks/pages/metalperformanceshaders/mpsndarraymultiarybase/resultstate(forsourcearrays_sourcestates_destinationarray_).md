> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarybase/resultstate(forsourcearrays:sourcestates:destinationarray:)

# resultState(forSourceArrays:sourceStates:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func resultState(forSourceArrays sourceArrays: [MPSNDArray], sourceStates: [MPSState]?, destinationArray: MPSNDArray) -> MPSState?
```

# resultStateForSourceArrays:sourceStates:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSState *) resultStateForSourceArrays:(NSArray<MPSNDArray *> *) sourceArrays sourceStates:(NSArray<MPSState *> *) sourceStates destinationArray:(MPSNDArray *) destinationArray;
```
