> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/clearcaches()](https://developer.apple.com/documentation/coreimage/cicontext/clearcaches())

# clearCaches() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 10.0+ · visionOS 1.0+

Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.

## Declaration

```swift
func clearCaches()
```

<a id="Discussion"></a>

## Discussion

You can use this method to remove textures from the texture cache that reference deleted images.

## See Also

### Managing Resources

- [reclaimResources()](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount()](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.

# clearCaches (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 10.0+ · visionOS 1.0+

Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.

## Declaration

```objectivec
- (void) clearCaches;
```

<a id="Discussion"></a>

## Discussion

You can use this method to remove textures from the texture cache that reference deleted images.

## See Also

### Managing Resources

- [reclaimResources](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [offlineGPUCount](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.
