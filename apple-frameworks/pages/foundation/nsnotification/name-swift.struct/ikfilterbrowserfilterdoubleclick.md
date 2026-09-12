> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/ikfilterbrowserfilterdoubleclick](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/ikfilterbrowserfilterdoubleclick)

# IKFilterBrowserFilterDoubleClick

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+

Posted when the user double-clicks a filter in the filter browser.

## Declaration

```swift
static let IKFilterBrowserFilterDoubleClick: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The name of the selected filter is send as the object in the notification.

## See Also

### Quartz

- [IKFilterBrowserFilterSelected](ikfilterbrowserfilterselected.md): Posted when the user clicks a filter name in the filter browser.
- [IKFilterBrowserWillPreviewFilter](ikfilterbrowserwillpreviewfilter.md): Posted before showing a filter preview, allowing an application to set the parameters of a filter.
- [quartzFilterManagerDidAddFilter](quartzfiltermanagerdidaddfilter.md)
- [quartzFilterManagerDidModifyFilter](quartzfiltermanagerdidmodifyfilter.md)
- [quartzFilterManagerDidRemoveFilter](quartzfiltermanagerdidremovefilter.md)
- [quartzFilterManagerDidSelectFilter](quartzfiltermanagerdidselectfilter.md)
- [QCCompositionPickerPanelDidSelectComposition](qccompositionpickerpaneldidselectcomposition.md): Deprecated. Posted when the user chooses a composition.
- [QCCompositionPickerViewDidSelectComposition](qccompositionpickerviewdidselectcomposition.md): Deprecated. Posted when the user selects a composition in the picker view.
- [QCCompositionRepositoryDidUpdate](qccompositionrepositorydidupdate.md): Deprecated. Posted whenever the list of compositions in the composition repository is updated.
- [QCViewDidStartRendering](qcviewdidstartrendering.md): Deprecated. Posted when the view starts rendering.
- [QCViewDidStopRendering](qcviewdidstoprendering.md): Deprecated. Posted when the view stops rendering.
