> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceimage/physicalsize](https://developer.apple.com/documentation/arkit/referenceimage/physicalsize)

# physicalSize

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The size, in meters, of a reference image in the real world.

## Declaration

```swift
var physicalSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

For example, set the [physicalSize](physicalsize.md) of a reference image of a yard stick to `0.9144` meters.

## See Also

### Inspecting a reference image

- [name](name.md): The name of a reference image.
- [resourceGroupName](resourcegroupname.md): A string value the represents the name of the resource group the framework loads an image from.
- [description](description.md): A textual representation of this reference image.
