> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/reclaimresources()](https://developer.apple.com/documentation/coreimage/cicontext/reclaimresources())

# reclaimResources() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Runs the garbage collector to reclaim any resources that the context no longer requires.

## Declaration

```swift
func reclaimResources()
```

<a id="Discussion"></a>

## Discussion

The system calls this method automatically after every rendering operation. You can use this method to remove textures from the texture cache that reference deleted images.

## See Also

### Managing Resources

- [clearCaches()](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [offlineGPUCount()](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.

# reclaimResources (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Runs the garbage collector to reclaim any resources that the context no longer requires.

## Declaration

```objectivec
- (void) reclaimResources;
```

<a id="Discussion"></a>

## Discussion

The system calls this method automatically after every rendering operation. You can use this method to remove textures from the texture cache that reference deleted images.

## See Also

### Managing Resources

- [clearCaches](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [offlineGPUCount](offlinegpucount%28%29.md): Returns the number of GPUs not currently driving a display.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.
