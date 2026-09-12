> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/popuppopover](https://developer.apple.com/documentation/webkit/wkwebextension/action/popuppopover)

# popupPopover (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A popover that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.

## Declaration

```swift
var popupPopover: NSPopover? { get }
```

<a id="discussion"></a>

## Discussion

This popover contains a view controller with a web view preloaded with the pop-up page. It automatically adjusts its size to fit the web view’s content size. The [presentsPopup](presentspopup.md) property should be checked to determine the availability of a pop-up before using this property.  Dismissing the popover will close the pop-up and unload the web view.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.

# popupPopover (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A popover that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSPopover * popupPopover;
```

<a id="discussion"></a>

## Discussion

This popover contains a view controller with a web view preloaded with the pop-up page. It automatically adjusts its size to fit the web view’s content size. The [presentsPopup](presentspopup.md) property should be checked to determine the availability of a pop-up before using this property.  Dismissing the popover will close the pop-up and unload the web view.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.
