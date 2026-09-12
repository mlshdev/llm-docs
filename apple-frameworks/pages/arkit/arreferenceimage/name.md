> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/name](https://developer.apple.com/documentation/arkit/arreferenceimage/name)

# name (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A descriptive name for the image.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

For reference images loaded from an Xcode asset catalog, this property is the name assigned in the asset catalog. For programmatically created reference images, this value is `nil`.

> **Note**

>  This string is not localized text intended for user display. However, in debugging  you can use this property to indicate which image was detected.

## See Also

### Examining a Reference Image

- [physicalSize](physicalsize.md): The real-world dimensions, in meters, of the image.
- [resourceGroupName](resourcegroupname.md): The AR resource group name for this image.

# name (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A descriptive name for the image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

For reference images loaded from an Xcode asset catalog, this property is the name assigned in the asset catalog. For programmatically created reference images, this value is `nil`.

> **Note**

>  This string is not localized text intended for user display. However, in debugging  you can use this property to indicate which image was detected.

## See Also

### Examining a Reference Image

- [physicalSize](physicalsize.md): The real-world dimensions, in meters, of the image.
- [resourceGroupName](resourcegroupname.md): The AR resource group name for this image.
