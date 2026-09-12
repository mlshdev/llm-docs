> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/action/popupwebview](https://developer.apple.com/documentation/webkit/wkwebextension/action/popupwebview)

# popupWebView (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A web view loaded with the pop-up page for this action, or `nil` if no pop-up is specified.

## Declaration

```swift
var popupWebView: WKWebView? { get }
```

<a id="discussion"></a>

## Discussion

The web view will be preloaded with the pop-up page upon first access or after it has been unloaded. Use the [presentsPopup](presentspopup.md) property to determine whether a pop-up should be displayed before using this property.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.

# popupWebView (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A web view loaded with the pop-up page for this action, or `nil` if no pop-up is specified.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKWebView * popupWebView;
```

<a id="discussion"></a>

## Discussion

The web view will be preloaded with the pop-up page upon first access or after it has been unloaded. Use the [presentsPopup](presentspopup.md) property to determine whether a pop-up should be displayed before using this property.

## See Also

### Related Documentation

- [presentsPopup](presentspopup.md): A Boolean value indicating whether the action has a pop-up.
