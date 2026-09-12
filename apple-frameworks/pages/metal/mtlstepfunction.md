> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstepfunction](https://developer.apple.com/documentation/metal/mtlstepfunction)

# MTLStepFunction (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The frequency and locations at which a function fetches attribute data.

## Declaration

```swift
enum MTLStepFunction
```

## Topics

### Step options

- [MTLStepFunction.constant](mtlstepfunction/constant.md): The function fetches attribute data once.
- [MTLStepFunction.perInstance](mtlstepfunction/perinstance.md): The function fetches data based on the instance index.
- [MTLStepFunction.perPatch](mtlstepfunction/perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunction.perPatchControlPoint](mtlstepfunction/perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunction.perVertex](mtlstepfunction/pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunction.threadPositionInGridX](mtlstepfunction/threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunction.threadPositionInGridY](mtlstepfunction/threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunction.threadPositionInGridXIndexed](mtlstepfunction/threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.
- [MTLStepFunction.threadPositionInGridYIndexed](mtlstepfunction/threadpositioningridyindexed.md): The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.

### Initializers

- [init(rawValue:)](mtlstepfunction/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing fetch behavior

- [stride](mtlbufferlayoutdescriptor/stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](mtlbufferlayoutdescriptor/stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](mtlbufferlayoutdescriptor/steprate.md): How frequently the step function should load data.

# MTLStepFunction (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The frequency and locations at which a function fetches attribute data.

## Declaration

```objectivec
enum MTLStepFunction : NSUInteger;
```

## Topics

### Step options

- [MTLStepFunctionConstant](mtlstepfunction/constant.md): The function fetches attribute data once.
- [MTLStepFunctionPerInstance](mtlstepfunction/perinstance.md): The function fetches data based on the instance index.
- [MTLStepFunctionPerPatch](mtlstepfunction/perpatch.md): The post-tessellation function fetches data based on the patch index of the patch.
- [MTLStepFunctionPerPatchControlPoint](mtlstepfunction/perpatchcontrolpoint.md): The post-tessellation function fetches data based on the control-point indices associated with the patch.
- [MTLStepFunctionPerVertex](mtlstepfunction/pervertex.md): The vertex function fetches data for every vertex.
- [MTLStepFunctionThreadPositionInGridX](mtlstepfunction/threadpositioningridx.md): The compute function fetches data based on the thread’s `x` coordinate.
- [MTLStepFunctionThreadPositionInGridY](mtlstepfunction/threadpositioningridy.md): The compute function fetches data based on the thread’s `y` coordinate.
- [MTLStepFunctionThreadPositionInGridXIndexed](mtlstepfunction/threadpositioningridxindexed.md): The compute function fetches data by using the thread’s `x` coordinate to look up a value in the index buffer.
- [MTLStepFunctionThreadPositionInGridYIndexed](mtlstepfunction/threadpositioningridyindexed.md): The compute function fetches data by using the thread’s `y` coordinate to look up a value in the index buffer.

## See Also

### Describing fetch behavior

- [stride](mtlbufferlayoutdescriptor/stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](mtlbufferlayoutdescriptor/stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](mtlbufferlayoutdescriptor/steprate.md): How frequently the step function should load data.
