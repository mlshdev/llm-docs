> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptor/stride](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptor/stride)

# stride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of bytes from one buffer entry to the next.

## Declaration

```swift
var stride: Int { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `1`. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Describing fetch behavior

- [stepFunction](stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](steprate.md): How frequently the step function should load data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.

# stride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of bytes from one buffer entry to the next.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger stride;
```

<a id="discussion"></a>

## Discussion

The default value is `1`. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

## See Also

### Describing fetch behavior

- [stepFunction](stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](steprate.md): How frequently the step function should load data.
- [MTLStepFunction](../mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.
