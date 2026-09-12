> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserwillpreviewfilternotification](https://developer.apple.com/documentation/quartz/ikfilterbrowserwillpreviewfilternotification)

# IKFilterBrowserWillPreviewFilterNotification

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Posted before showing a filter preview, allowing an application to set the parameters of a filter.

## Declaration

```objectivec
extern NSString * const IKFilterBrowserWillPreviewFilterNotification;
```

<a id="Discussion"></a>

## Discussion

The selected filter is sent as the object in the notification.

## See Also

### Notifications

- [IKFilterBrowserFilterSelectedNotification](ikfilterbrowserfilterselectednotification.md): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserFilterDoubleClickNotification](ikfilterbrowserfilterdoubleclicknotification.md): Posted when the user double-clicks a filter in the filter browser.
