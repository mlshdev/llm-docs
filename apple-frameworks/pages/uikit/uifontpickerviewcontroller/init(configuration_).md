> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifontpickerviewcontroller/init(configuration:)](https://developer.apple.com/documentation/uikit/uifontpickerviewcontroller/init(configuration:))

# init(configuration:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a controller for a font picker view.

## Declaration

```swift
init(configuration: UIFontPickerViewController.Configuration)
```

## Parameters

- `configuration`: Settings for fonts the font picker should offer to the user and how to display those fonts.

<a id="return-value"></a>

## Return Value

A new view controller to show a font picker with the specified configuration.

## See Also

### Configuring a font picker to display in iOS

- [configuration](configuration-swift.property.md): Settings for fonts the font picker should offer to the user and how to display those fonts.
- [UIFontPickerViewController.Configuration](configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.

# initWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a controller for a font picker view.

## Declaration

```objectivec
- (instancetype) initWithConfiguration:(UIFontPickerViewControllerConfiguration *) configuration;
```

## Parameters

- `configuration`: Settings for fonts the font picker should offer to the user and how to display those fonts.

<a id="return-value"></a>

## Return Value

A new view controller to show a font picker with the specified configuration.

## See Also

### Configuring a font picker to display in iOS

- [configuration](configuration-swift.property.md): Settings for fonts the font picker should offer to the user and how to display those fonts.
- [UIFontPickerViewControllerConfiguration](configuration-swift.class.md): The filters and display settings a font picker view controller uses to set up a font picker.
