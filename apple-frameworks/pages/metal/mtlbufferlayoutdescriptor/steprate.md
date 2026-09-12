> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptor/steprate](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptor/steprate)

# stepRate (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

How frequently the step function should load data.

## Declaration

```swift
var stepRate: Int { get set }
```

<a id="discussion"></a>

## Discussion

The interpretation of this value depends on the setting of `stepFunction`.

## See Also

### Describing fetch behavior

- [stride](stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](stepfunction.md): Determines how and when compute functions fetch data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.

# stepRate (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

How frequently the step function should load data.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger stepRate;
```

<a id="discussion"></a>

## Discussion

The interpretation of this value depends on the setting of `stepFunction`.

## See Also

### Describing fetch behavior

- [stride](stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](stepfunction.md): Determines how and when compute functions fetch data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.
