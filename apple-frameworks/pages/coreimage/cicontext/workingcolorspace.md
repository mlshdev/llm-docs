> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/workingcolorspace](https://developer.apple.com/documentation/coreimage/cicontext/workingcolorspace)

# workingColorSpace (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The working color space of the Core Image context.

## Declaration

```swift
var workingColorSpace: CGColorSpace? { get }
```

<a id="Discussion"></a>

## Discussion

The working color space determines the color space used when executing filter kernels; Core Image automatically converts to and from the source and destination color spaces of input images and output contexts. You specify a working color space using the [workingColorSpace](../cicontextoption/workingcolorspace.md) key in the `options` dictionary when creating a Core Image context.

## See Also

### Managing Resources

- [clearCaches()](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources()](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount()](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.

# workingColorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The working color space of the Core Image context.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGColorSpaceRef workingColorSpace;
```

<a id="Discussion"></a>

## Discussion

The working color space determines the color space used when executing filter kernels; Core Image automatically converts to and from the source and destination color spaces of input images and output contexts. You specify a working color space using the [kCIContextWorkingColorSpace](../cicontextoption/workingcolorspace.md) key in the `options` dictionary when creating a Core Image context.

## See Also

### Managing Resources

- [clearCaches](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.
