> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentview/textlayoutguide](https://developer.apple.com/documentation/uikit/uilistcontentview/textlayoutguide)

# textLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A guide for positioning the primary text in the content view.

## Declaration

```swift
var textLayoutGuide: UILayoutGuide? { get }
```

<a id="Discussion"></a>

## Discussion

If the configuration doesn’t specify primary text, the value of this property is `nil`.

If you apply a new configuration without primary text to the content view, the system removes this layout guide from the view and deactivates any constraints associated with it.

## See Also

### Managing the content layout

- [secondaryTextLayoutGuide](secondarytextlayoutguide.md): A guide for positioning the secondary text in the content view.
- [imageLayoutGuide](imagelayoutguide.md): A guide for positioning the image in the content view.

# textLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A guide for positioning the primary text in the content view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UILayoutGuide * textLayoutGuide;
```

<a id="Discussion"></a>

## Discussion

If the configuration doesn’t specify primary text, the value of this property is `nil`.

If you apply a new configuration without primary text to the content view, the system removes this layout guide from the view and deactivates any constraints associated with it.

## See Also

### Managing the content layout

- [secondaryTextLayoutGuide](secondarytextlayoutguide.md): A guide for positioning the secondary text in the content view.
- [imageLayoutGuide](imagelayoutguide.md): A guide for positioning the image in the content view.
