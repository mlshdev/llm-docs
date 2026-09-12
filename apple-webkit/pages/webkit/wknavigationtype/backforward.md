> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationtype/backforward](https://developer.apple.com/documentation/webkit/wknavigationtype/backforward)

# WKNavigationType.backForward (Swift)

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A request for the frame’s next or previous item.

## Declaration

```swift
case backForward
```

<a id="Discussion"></a>

## Discussion

This type of action occurs when the navigation originates from an item in a [WKBackForwardList](../wkbackforwardlist.md) object.

## See Also

### Getting the Navigation Types

- [WKNavigationType.linkActivated](linkactivated.md): A link activation.
- [WKNavigationType.formSubmitted](formsubmitted.md): A request to submit a form.
- [WKNavigationType.reload](reload.md): A request to reload the webpage.
- [WKNavigationType.formResubmitted](formresubmitted.md): A request to resubmit a form.
- [WKNavigationType.other](other.md): A navigation request that originates for some other reason.

# WKNavigationTypeBackForward (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A request for the frame’s next or previous item.

## Declaration

```objectivec
WKNavigationTypeBackForward
```

<a id="Discussion"></a>

## Discussion

This type of action occurs when the navigation originates from an item in a [WKBackForwardList](../wkbackforwardlist.md) object.

## See Also

### Getting the Navigation Types

- [WKNavigationTypeLinkActivated](linkactivated.md): A link activation.
- [WKNavigationTypeFormSubmitted](formsubmitted.md): A request to submit a form.
- [WKNavigationTypeReload](reload.md): A request to reload the webpage.
- [WKNavigationTypeFormResubmitted](formresubmitted.md): A request to resubmit a form.
- [WKNavigationTypeOther](other.md): A navigation request that originates for some other reason.
