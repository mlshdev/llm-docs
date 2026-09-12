> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserfilterselectednotification](https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterselectednotification)

# IKFilterBrowserFilterSelectedNotification

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Posted when the user clicks a filter name in the filter browser.

## Declaration

```objectivec
extern NSString * const IKFilterBrowserFilterSelectedNotification;
```

<a id="Discussion"></a>

## Discussion

The name of the selected filter is sent as the object in the notification.

## See Also

### Notifications

- [IKFilterBrowserWillPreviewFilterNotification](ikfilterbrowserwillpreviewfilternotification.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [IKFilterBrowserFilterDoubleClickNotification](ikfilterbrowserfilterdoubleclicknotification.md): Posted when the user double-clicks a filter in the filter browser.
