> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptor/stepfunction](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptor/stepfunction)

# stepFunction (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Determines how and when compute functions fetch data.

## Declaration

```swift
var stepFunction: MTLStepFunction { get set }
```

## See Also

### Describing fetch behavior

- [stride](stride.md): The number of bytes from one buffer entry to the next.
- [stepRate](steprate.md): How frequently the step function should load data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.

# stepFunction (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Determines how and when compute functions fetch data.

## Declaration

```objectivec
@property (nonatomic, assign) MTLStepFunction stepFunction;
```

## See Also

### Describing fetch behavior

- [stride](stride.md): The number of bytes from one buffer entry to the next.
- [stepRate](steprate.md): How frequently the step function should load data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.
