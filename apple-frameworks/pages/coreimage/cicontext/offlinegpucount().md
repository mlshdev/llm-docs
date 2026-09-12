> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/offlinegpucount()](https://developer.apple.com/documentation/coreimage/cicontext/offlinegpucount())

# offlineGPUCount() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the number of GPUs not currently driving a display.

## Declaration

```swift
class func offlineGPUCount() -> UInt32
```

<a id="return-value"></a>

## Return Value

The number of offline GPU devices.

<a id="Discussion"></a>

## Discussion

If this count is greater than zero, the system has attached GPU devices that are not currently driving a display. You can use these devices for Core Image rendering by creating a context with the [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md) or[init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md) method.

## See Also

### Managing Resources

- [clearCaches()](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources()](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.

# offlineGPUCount (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.10+

Returns the number of GPUs not currently driving a display.

## Declaration

```objectivec
+ (unsigned int) offlineGPUCount;
```

<a id="return-value"></a>

## Return Value

The number of offline GPU devices.

<a id="Discussion"></a>

## Discussion

If this count is greater than zero, the system has attached GPU devices that are not currently driving a display. You can use these devices for Core Image rendering by creating a context with the [init(forOfflineGPUAtIndex:)](init%28forofflinegpuatindex_%29.md) or[init(forOfflineGPUAtIndex:colorSpace:options:sharedContext:)](init%28forofflinegpuatindex_colorspace_options_sharedcontext_%29.md) method.

## See Also

### Managing Resources

- [clearCaches](clearcaches%28%29.md): Frees any cached data, such as temporary images, associated with the context and runs the garbage collector.
- [reclaimResources](reclaimresources%28%29.md): Runs the garbage collector to reclaim any resources that the context no longer requires.
- [workingColorSpace](workingcolorspace.md): The working color space of the Core Image context.
- [workingFormat](workingformat.md): The working pixel format of the Core Image context.
