> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfilterbrowserpanel/filtername()](https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/filtername())

# filterName() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the name of the  filter that is currently selected in the filter browser.

## Declaration

```swift
func filterName() -> String!
```

<a id="return-value"></a>

## Return Value

The name of the currently selected filter.

<a id="Discussion"></a>

## Discussion

Use this method in response to the notifications [IKFilterBrowserFilterSelectedNotification](../ikfilterbrowserfilterselectednotification.md) or [IKFilterBrowserFilterDoubleClickNotification](../ikfilterbrowserfilterdoubleclicknotification.md), or after the user makes a choice in a dialog.

# filterName (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the name of the  filter that is currently selected in the filter browser.

## Declaration

```objectivec
- (NSString *) filterName;
```

<a id="return-value"></a>

## Return Value

The name of the currently selected filter.

<a id="Discussion"></a>

## Discussion

Use this method in response to the notifications [IKFilterBrowserFilterSelectedNotification](../ikfilterbrowserfilterselectednotification.md) or [IKFilterBrowserFilterDoubleClickNotification](../ikfilterbrowserfilterdoubleclicknotification.md), or after the user makes a choice in a dialog.
