> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setcancontrolquicklookpanel(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setcancontrolquicklookpanel(_:))

# setCanControlQuickLookPanel(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the view can automatically take control of the QuickLook panel.

## Declaration

```swift
func setCanControlQuickLookPanel(_ flag: Bool)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true), if the view can display the QuickLook panel, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the browser view displays the QuickLook panel it sets itself as the QuickLook datasource. If the browser cells returned by the datasource return items that are URLs or paths, then the QuickLook panel will display the image at that location. Otherwise, the browser cell must implement the [QLPreviewItem](https://developer.apple.com/documentation/quicklook/qlpreviewitem) protocol and return the requested URL for the custom cell.

## See Also

### QuickLook Support

- [canControlQuickLookPanel()](cancontrolquicklookpanel%28%29.md): Returns whether the view can automatically take control of the QuickLook panel.

# setCanControlQuickLookPanel: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Specifies whether the view can automatically take control of the QuickLook panel.

## Declaration

```objectivec
- (void) setCanControlQuickLookPanel:(BOOL) flag;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true), if the view can display the QuickLook panel, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the browser view displays the QuickLook panel it sets itself as the QuickLook datasource. If the browser cells returned by the datasource return items that are URLs or paths, then the QuickLook panel will display the image at that location. Otherwise, the browser cell must implement the [QLPreviewItem](https://developer.apple.com/documentation/quicklook/qlpreviewitem) protocol and return the requested URL for the custom cell.

## See Also

### QuickLook Support

- [canControlQuickLookPanel](cancontrolquicklookpanel%28%29.md): Returns whether the view can automatically take control of the QuickLook panel.
