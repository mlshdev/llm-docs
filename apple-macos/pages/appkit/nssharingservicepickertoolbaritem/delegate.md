> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritem/delegate

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The custom object from your app that provides the items to share.

## Declaration

```swift
weak var delegate: (any NSSharingServicePickerToolbarItemDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Use your delegate object to provide the set of items you want to share from your window. If this property is `nil`, AppKit disables the toolbar item.

## See Also

### Getting the Toolbar Items

- [NSSharingServicePickerToolbarItemDelegate](../nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.
- [activityItemsConfiguration](activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The custom object from your app that provides the items to share.

## Declaration

```objectivec
@property (weak) id<NSSharingServicePickerToolbarItemDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Use your delegate object to provide the set of items you want to share from your window. If this property is `nil`, AppKit disables the toolbar item.

## See Also

### Getting the Toolbar Items

- [NSSharingServicePickerToolbarItemDelegate](../nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.
- [activityItemsConfiguration](activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.
