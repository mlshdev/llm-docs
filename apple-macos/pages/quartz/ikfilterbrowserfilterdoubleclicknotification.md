> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikfilterbrowserfilterdoubleclicknotification

# IKFilterBrowserFilterDoubleClickNotification

**Interface language:** Objective-C

**Framework:** Quartz  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Posted when the user double-clicks a filter in the filter browser.

## Declaration

```objectivec
extern NSString * const IKFilterBrowserFilterDoubleClickNotification;
```

<a id="Discussion"></a>

## Discussion

The name of the selected filter is send as the object in the notification.

## See Also

### Notifications

- [IKFilterBrowserWillPreviewFilterNotification](ikfilterbrowserwillpreviewfilternotification.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [IKFilterBrowserFilterSelectedNotification](ikfilterbrowserfilterselectednotification.md): Posted when the user clicks a filter name in the filter browser.
