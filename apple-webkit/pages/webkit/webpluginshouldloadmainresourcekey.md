> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpluginshouldloadmainresourcekey](https://developer.apple.com/documentation/webkit/webpluginshouldloadmainresourcekey)

# WebPlugInShouldLoadMainResourceKey (Swift)

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.14)

A Boolean value indicating whether the plug-in should load its own main resource (the `src` URL, in most cases).

## Declaration

```swift
let WebPlugInShouldLoadMainResourceKey: String
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the plug-in should load its own main resource. If [false](https://developer.apple.com/documentation/swift/false), the plug-in uses the data provided by WebKit and the `webPlugInMainResourceDidReceiveData:` message is sent to the plug-in when data is received. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### WebKit Constants (Legacy)

- [WebActionButtonKey](webactionbuttonkey.md): Deprecated. An NSNumber object where `0` indicates the left button, `1` indicates the middle button, and `2` indicates the right button.
- [WebActionElementKey](webactionelementkey.md): Deprecated. A dictionary containing element information. See [WebView](webview-swift.class.md) for a description of the key-value pairs in this dictionary.
- [WebActionModifierFlagsKey](webactionmodifierflagskey.md): Deprecated. An unsigned number that indicates the modifier flag.
- [WebActionNavigationTypeKey](webactionnavigationtypekey.md): Deprecated. The navigation type of the action. Can be any of the values defined in [WebNavigationType](webnavigationtype.md) below.
- [WebActionOriginalURLKey](webactionoriginalurlkey.md): Deprecated. The URL that initiated the action.
- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.
- [WebElementDOMNodeKey](webelementdomnodekey.md): Deprecated. The DOMNode for this element.
- [WebElementFrameKey](webelementframekey.md): Deprecated. The WebFrame object associated with this element.
- [WebElementImageAltStringKey](webelementimagealtstringkey.md): Deprecated. An NSString of the ALT attribute of an image element.
- [WebElementImageKey](webelementimagekey.md): Deprecated. An NSImage representing an image element.
- [WebElementImageRectKey](webelementimagerectkey.md): Deprecated. An NSValue containing an NSRect, the size of an image element.
- [WebElementImageURLKey](webelementimageurlkey.md): Deprecated. An NSURL containing the location of an image element.
- [WebElementIsSelectedKey](webelementisselectedkey.md): Deprecated. An NSNumber used as a BOOL value to indicate whether a text element is selected or not. Zero value indicates false, true otherwise.
- [WebElementLinkLabelKey](webelementlinklabelkey.md): Deprecated. An NSString containing the text within an anchor.
- [WebElementLinkTargetFrameKey](webelementlinktargetframekey.md): Deprecated. The WebFrame object associated with the target of the anchor.

# WebPlugInShouldLoadMainResourceKey (Objective-C)

**Framework:** WebKit  
**Kind:** Global Variable  
**Availability:** macOS 10.6+ (deprecated in 10.14)

A Boolean value indicating whether the plug-in should load its own main resource (the `src` URL, in most cases).

## Declaration

```objectivec
extern NSString * WebPlugInShouldLoadMainResourceKey;
```

<a id="discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the plug-in should load its own main resource. If [false](https://developer.apple.com/documentation/swift/false), the plug-in uses the data provided by WebKit and the `webPlugInMainResourceDidReceiveData:` message is sent to the plug-in when data is received. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### WebKit Constants (Legacy)

- [WebActionButtonKey](webactionbuttonkey.md): Deprecated. An NSNumber object where `0` indicates the left button, `1` indicates the middle button, and `2` indicates the right button.
- [WebActionElementKey](webactionelementkey.md): Deprecated. A dictionary containing element information. See [WebView](webview-swift.class.md) for a description of the key-value pairs in this dictionary.
- [WebActionModifierFlagsKey](webactionmodifierflagskey.md): Deprecated. An unsigned number that indicates the modifier flag.
- [WebActionNavigationTypeKey](webactionnavigationtypekey.md): Deprecated. The navigation type of the action. Can be any of the values defined in [WebNavigationType](webnavigationtype.md) below.
- [WebActionOriginalURLKey](webactionoriginalurlkey.md): Deprecated. The URL that initiated the action.
- [WebArchivePboardType](webarchivepboardtype.md): Deprecated. The pasteboard type constant used when adding or accessing a WebArchive on the pasteboard.
- [WebElementDOMNodeKey](webelementdomnodekey.md): Deprecated. The DOMNode for this element.
- [WebElementFrameKey](webelementframekey.md): Deprecated. The WebFrame object associated with this element.
- [WebElementImageAltStringKey](webelementimagealtstringkey.md): Deprecated. An NSString of the ALT attribute of an image element.
- [WebElementImageKey](webelementimagekey.md): Deprecated. An NSImage representing an image element.
- [WebElementImageRectKey](webelementimagerectkey.md): Deprecated. An NSValue containing an NSRect, the size of an image element.
- [WebElementImageURLKey](webelementimageurlkey.md): Deprecated. An NSURL containing the location of an image element.
- [WebElementIsSelectedKey](webelementisselectedkey.md): Deprecated. An NSNumber used as a BOOL value to indicate whether a text element is selected or not. Zero value indicates false, true otherwise.
- [WebElementLinkLabelKey](webelementlinklabelkey.md): Deprecated. An NSString containing the text within an anchor.
- [WebElementLinkTargetFrameKey](webelementlinktargetframekey.md): Deprecated. The WebFrame object associated with the target of the anchor.
