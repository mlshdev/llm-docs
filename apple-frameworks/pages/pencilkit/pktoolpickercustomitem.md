> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitem](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem)

# PKToolPickerCustomItem (Swift)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An item that represents a custom tool in the tool picker.

## Declaration

```swift
class PKToolPickerCustomItem
```

<a id="overview"></a>

## Overview

A custom tool item represents a tool that isn’t one of the system tools. You configure details about a custom tool item yourself using [PKToolPickerCustomItem.Configuration](pktoolpickercustomitem/configuration-swift.struct.md), including providing custom images to draw the body of the tool.

The following code shows how to create a tool picker with a custom tool item. This basic implementation of [imageProvider](pktoolpickercustomitem/configuration-swift.struct/imageprovider.md) retrieves an image for the tool body from an asset catalog. A full app might use a more advanced drawing implementation for the image provider, such as using [UIGraphicsImageRenderer](../uikit/uigraphicsimagerenderer.md).

```swift
// Create a configuration for a custom tool item.
var config = PKToolPickerCustomItem.Configuration(identifier: "com.example.custom-tool", name: "My Tool")

// Provide a custom image for the custom tool item.
config.imageProvider = { toolItem in
    guard let toolImage = UIImage(named: config.name) else { 
        return UIImage() 
    }
    return toolImage
}

// Configure additional appearance options for the custom tool item.
config.allowsColorSelection = true
config.defaultColor = .red
config.defaultWidth = 10.0

// Create a custom tool item using the configuration.
let customItem = PKToolPickerCustomItem(configuration: config)

// Create a picker with the custom tool item and a system ruler tool.
let items = [customItem, PKToolPickerRulerItem()]
let picker = PKToolPicker(toolItems: items)
```

For a more complete example of creating a custom tool item, see [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md).

## Topics

### Creating a custom item

- [init(configuration:)](pktoolpickercustomitem/init%28configuration_%29.md): Creates a new custom item with the specified configuration.

### Configuring the custom item

- [color](pktoolpickercustomitem/color.md): The current color of the custom tool item.
- [width](pktoolpickercustomitem/width.md): The current width of the custom tool item.
- [configuration](pktoolpickercustomitem/configuration-41nm4.md): The configuration of the custom tool item.
- [PKToolPickerCustomItem.Configuration](pktoolpickercustomitem/configuration-swift.struct.md): A configuration that specifies the appearance and behavior of a custom tool item and its contents.

### Reloading the custom item image

- [reloadImage()](pktoolpickercustomitem/reloadimage%28%29.md): Requests a new image for the custom tool item from the image provider.

### Instance Properties

- [allowsColorSelection](pktoolpickercustomitem/allowscolorselection.md): Present color selection UI to the user. Defaults to the value set in `configuration`.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a tool picker

- [init()](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [init(toolItems:)](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.

# PKToolPickerCustomItem (Objective-C)

**Framework:** PencilKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An item that represents a custom tool in the tool picker.

## Declaration

```objectivec
@interface PKToolPickerCustomItem : PKToolPickerItem
```

<a id="overview"></a>

## Overview

A custom tool item represents a tool that isn’t one of the system tools. You configure details about a custom tool item yourself using [PKToolPickerCustomItem.Configuration](pktoolpickercustomitem/configuration-swift.struct.md), including providing custom images to draw the body of the tool.

The following code shows how to create a tool picker with a custom tool item. This basic implementation of [imageProvider](pktoolpickercustomitem/configuration-swift.struct/imageprovider.md) retrieves an image for the tool body from an asset catalog. A full app might use a more advanced drawing implementation for the image provider, such as using [UIGraphicsImageRenderer](../uikit/uigraphicsimagerenderer.md).

```swift
// Create a configuration for a custom tool item.
var config = PKToolPickerCustomItem.Configuration(identifier: "com.example.custom-tool", name: "My Tool")

// Provide a custom image for the custom tool item.
config.imageProvider = { toolItem in
    guard let toolImage = UIImage(named: config.name) else { 
        return UIImage() 
    }
    return toolImage
}

// Configure additional appearance options for the custom tool item.
config.allowsColorSelection = true
config.defaultColor = .red
config.defaultWidth = 10.0

// Create a custom tool item using the configuration.
let customItem = PKToolPickerCustomItem(configuration: config)

// Create a picker with the custom tool item and a system ruler tool.
let items = [customItem, PKToolPickerRulerItem()]
let picker = PKToolPicker(toolItems: items)
```

For a more complete example of creating a custom tool item, see [Configuring the PencilKit tool picker](configuring-the-pencilkit-tool-picker.md).

## Topics

### Creating a custom item

- [initWithConfiguration:](pktoolpickercustomitem/initwithconfiguration_.md): Creates a new custom item with the specified configuration.

### Configuring the custom item

- [color](pktoolpickercustomitem/color.md): The current color of the custom tool item.
- [width](pktoolpickercustomitem/width.md): The current width of the custom tool item.
- [configuration](pktoolpickercustomitem/configuration-v7e5.md): The configuration of the custom tool item.
- [PKToolPickerCustomItemConfiguration](pktoolpickercustomitemconfiguration.md): A configuration that specifies the appearance and behavior of a custom tool item and its contents.

### Reloading the custom item image

- [reloadImage](pktoolpickercustomitem/reloadimage%28%29.md): Requests a new image for the custom tool item from the image provider.

### Instance Properties

- [allowsColorSelection](pktoolpickercustomitem/allowscolorselection.md): Present color selection UI to the user. Defaults to the value set in `configuration`.

## Relationships

### Inherits From

- [PKToolPickerItem](pktoolpickeritem.md)

## See Also

### Creating a tool picker

- [init](pktoolpicker/init%28%29.md): Creates a new tool picker with a default set of tools.
- [initWithToolItems:](pktoolpicker/init%28toolitems_%29.md): Creates a new tool picker with the tools you specify.
- [PKToolPickerInkingItem](pktoolpickerinkingitem.md): An item that represents an inking tool in the tool picker.
- [PKToolPickerEraserItem](pktoolpickereraseritem.md): An item that represents an eraser tool in the tool picker.
- [PKToolPickerLassoItem](pktoolpickerlassoitem.md): An item that represents a lasso tool in the tool picker.
- [PKToolPickerRulerItem](pktoolpickerruleritem.md): An item that represents a ruler tool in the tool picker.
- [PKToolPickerScribbleItem](pktoolpickerscribbleitem.md): An item that represents a Scribble tool in the tool picker.
- [PKToolPickerItem](pktoolpickeritem.md): The base class for an item in the tool picker.
