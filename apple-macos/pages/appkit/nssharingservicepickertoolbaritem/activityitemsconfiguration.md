> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertoolbaritem/activityitemsconfiguration](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritem/activityitemsconfiguration)

# activityItemsConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The custom object from an app built with Mac Catalyst that provides the items to share.

## Declaration

```swift
var activityItemsConfiguration: (any UIActivityItemsConfigurationReading)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this object to provide the set of items to share from your macOS window.

If this property is `nil`, the item uses the activity items configuration the window scene provides. For more information, see [activityItemsConfigurationSource](https://developer.apple.com/documentation/uikit/uiwindowscene/activityitemsconfigurationsource).

## See Also

### Getting the Toolbar Items

- [delegate](delegate.md): The custom object from your app that provides the items to share.
- [NSSharingServicePickerToolbarItemDelegate](../nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.

# activityItemsConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+

The custom object from an app built with Mac Catalyst that provides the items to share.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<UIActivityItemsConfigurationReading> activityItemsConfiguration;
```

<a id="Discussion"></a>

## Discussion

Use this object to provide the set of items to share from your macOS window.

If this property is `nil`, the item uses the activity items configuration the window scene provides. For more information, see [activityItemsConfigurationSource](https://developer.apple.com/documentation/uikit/uiwindowscene/activityitemsconfigurationsource).

## See Also

### Getting the Toolbar Items

- [delegate](delegate.md): The custom object from your app that provides the items to share.
- [NSSharingServicePickerToolbarItemDelegate](../nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.
