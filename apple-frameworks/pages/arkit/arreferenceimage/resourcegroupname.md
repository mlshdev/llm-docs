> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/resourcegroupname](https://developer.apple.com/documentation/arkit/arreferenceimage/resourcegroupname)

# resourceGroupName (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The AR resource group name for this image.

## Declaration

```swift
var resourceGroupName: String? { get }
```

<a id="Discussion"></a>

## Discussion

If ARKit loaded this image from an AR resource group in an asset catalog, ARKit sets the value of this property to the resource group’s name. Otherwise, the value of this property is `nil`\>.

## See Also

### Examining a Reference Image

- [name](name.md): A descriptive name for the image.
- [physicalSize](physicalsize.md): The real-world dimensions, in meters, of the image.

# resourceGroupName (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

The AR resource group name for this image.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * resourceGroupName;
```

<a id="Discussion"></a>

## Discussion

If ARKit loaded this image from an AR resource group in an asset catalog, ARKit sets the value of this property to the resource group’s name. Otherwise, the value of this property is `nil`\>.

## See Also

### Examining a Reference Image

- [name](name.md): A descriptive name for the image.
- [physicalSize](physicalsize.md): The real-world dimensions, in meters, of the image.
