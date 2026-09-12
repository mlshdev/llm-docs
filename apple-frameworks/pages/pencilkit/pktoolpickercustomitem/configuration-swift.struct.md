> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitem/configuration-swift.struct](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem/configuration-swift.struct)

# PKToolPickerCustomItem.Configuration

**Framework:** PencilKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A configuration that specifies the appearance and behavior of a custom tool item and its contents.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(identifier:name:)](configuration-swift.struct/init%28identifier_name_%29.md): Create a new configuration with an identifier and a name.

### Identifying the custom tool

- [identifier](configuration-swift.struct/identifier.md): A string that uniquely identifies the tool in the picker.
- [name](configuration-swift.struct/name.md): A short string to show as the name of the tool in the UI.

### Customizing color

- [defaultColor](configuration-swift.struct/defaultcolor.md): The default color for the tool.
- [allowsColorSelection](configuration-swift.struct/allowscolorselection.md): A Boolean value that determines whether to show the color selection UI for the tool.

### Customizing width

- [defaultWidth](configuration-swift.struct/defaultwidth.md): The default width for the tool.
- [widthVariants](configuration-swift.struct/widthvariants.md): A dictionary with UI options for selecting width, with each element containing a width value and its corresponding image.

### Providing an image for the tool

- [imageProvider](configuration-swift.struct/imageprovider.md): A closure to provide an image that represents the custom tool item.

### Providing a custom view controller for the tool

- [viewControllerProvider](configuration-swift.struct/viewcontrollerprovider.md): A closure to provide a view controller above the system controls in the tool attributes popover.

### Instance Properties

- [toolAttributeControls](configuration-swift.struct/toolattributecontrols.md): Defines which attribute controls are available to be presented in UI such as the tool attributes popover, or inline in the picker presented from a pencil squeeze. Controls for properties which the tool item does not support will not be presented. Excluding a control here does not hide all UI for adjusting that value. For example, excluding the opacity control here will not remove it from the color picker, if the color picker is otherwise available. Defaults to all controls.

## See Also

### Configuring the custom item

- [color](color.md): The current color of the custom tool item.
- [width](width.md): The current width of the custom tool item.
- [configuration](configuration-41nm4.md): The configuration of the custom tool item.
