> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/popupviewcontroller](https://developer.apple.com/documentation/webkit/wkwebextension/action/popupviewcontroller)

# popupViewController (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

A view controller that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.

## Declaration

```swift
var popupViewController: UIViewController? { get }
```

<a id="discussion"></a>

## Discussion

The view controller adaptively adjusts its presentation style based on where it is presented from, preferring popover.

It contains a web view preloaded with the pop-up page and automatically adjusts its `preferredContentSize` to fit the web view’s content size. The [presentsPopup](presentspopup.md) property should be checked to determine the availability of a pop-up before using this property.

Dismissing the view controller will close the pop-up and unload the web view.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.

# popupViewController (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

A view controller that presents a web view loaded with the pop-up page for this action, or `nil` if no popup is specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIViewController * popupViewController;
```

<a id="discussion"></a>

## Discussion

The view controller adaptively adjusts its presentation style based on where it is presented from, preferring popover.

It contains a web view preloaded with the pop-up page and automatically adjusts its `preferredContentSize` to fit the web view’s content size. The [presentsPopup](presentspopup.md) property should be checked to determine the availability of a pop-up before using this property.

Dismissing the view controller will close the pop-up and unload the web view.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.
