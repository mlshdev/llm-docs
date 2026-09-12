> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/referenceimage/resourcegroupname](https://developer.apple.com/documentation/arkit/referenceimage/resourcegroupname)

# resourceGroupName

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

A string value the represents the name of the resource group the framework loads an image from.

## Declaration

```swift
var resourceGroupName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The property contains a value only if the framework loads a reference image from a resource group. Otherwise, it’s `nil`.

## See Also

### Inspecting a reference image

- [physicalSize](physicalsize.md): The size, in meters, of a reference image in the real world.
- [name](name.md): The name of a reference image.
- [description](description.md): A textual representation of this reference image.
