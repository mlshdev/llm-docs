> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageeditpaneldatasource/setimage(_:imageproperties:)](https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/setimage(_:imageproperties:))

# setImage(\_:imageProperties:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets an image with the specified properties.

## Declaration

```swift
func setImage(_ image: CGImage!, imageProperties metaData: [AnyHashable : Any]!)
```

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Related Documentation

- [IKImageEditPanelDataSource](../ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](../ikimageeditpanel.md) object uses to access the contents of its data source object.

### Getting and Setting Image Properties

- [imageProperties](imageproperties.md): Returns a dictionary of the image properties associated with the image in the image edit panel.

# setImage:imageProperties: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets an image with the specified properties.

## Declaration

```objectivec
- (void) setImage:(CGImageRef) image imageProperties:(NSDictionary *) metaData;
```

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

## See Also

### Related Documentation

- [IKImageEditPanelDataSource](../ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](../ikimageeditpanel.md) object uses to access the contents of its data source object.

### Getting and Setting Image Properties

- [imageProperties](imageproperties.md): Returns a dictionary of the image properties associated with the image in the image edit panel.
