> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageeditpaneldatasource/imageproperties](https://developer.apple.com/documentation/quartz/ikimageeditpaneldatasource/imageproperties)

# imageProperties (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a dictionary of the image properties associated with the image in the image edit panel.

## Declaration

```swift
optional var imageProperties: [AnyHashable : Any]! { get }
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties of the image.

## See Also

### Related Documentation

- [IKImageEditPanelDataSource](../ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](../ikimageeditpanel.md) object uses to access the contents of its data source object.
- [Image Kit Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageKitProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004907)

### Getting and Setting Image Properties

- [setImage(\_:imageProperties:)](setimage%28__imageproperties_%29.md): Sets an image with the specified properties.

# imageProperties (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a dictionary of the image properties associated with the image in the image edit panel.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSDictionary * imageProperties;
```

<a id="return-value"></a>

## Return Value

A dictionary that contains the properties of the image.

## See Also

### Related Documentation

- [IKImageEditPanelDataSource](../ikimageeditpaneldatasource.md): The `IKImageEditPanelDataSource` protocol describes the methods that an [IKImageEditPanel](../ikimageeditpanel.md) object uses to access the contents of its data source object.
- [Image Kit Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageKitProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004907)

### Getting and Setting Image Properties

- [setImage:imageProperties:](setimage%28__imageproperties_%29.md): Sets an image with the specified properties.
