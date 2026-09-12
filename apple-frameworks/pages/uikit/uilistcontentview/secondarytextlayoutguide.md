> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilistcontentview/secondarytextlayoutguide](https://developer.apple.com/documentation/uikit/uilistcontentview/secondarytextlayoutguide)

# secondaryTextLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A guide for positioning the secondary text in the content view.

## Declaration

```swift
var secondaryTextLayoutGuide: UILayoutGuide? { get }
```

<a id="Discussion"></a>

## Discussion

If the configuration doesn’t specify secondary text, the value of this property is `nil`.

If you apply a new configuration without secondary text to the content view, the system removes this layout guide from the view and deactivates any constraints associated with it.

## See Also

### Managing the content layout

- [textLayoutGuide](textlayoutguide.md): A guide for positioning the primary text in the content view.
- [imageLayoutGuide](imagelayoutguide.md): A guide for positioning the image in the content view.

# secondaryTextLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A guide for positioning the secondary text in the content view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UILayoutGuide * secondaryTextLayoutGuide;
```

<a id="Discussion"></a>

## Discussion

If the configuration doesn’t specify secondary text, the value of this property is `nil`.

If you apply a new configuration without secondary text to the content view, the system removes this layout guide from the view and deactivates any constraints associated with it.

## See Also

### Managing the content layout

- [textLayoutGuide](textlayoutguide.md): A guide for positioning the primary text in the content view.
- [imageLayoutGuide](imagelayoutguide.md): A guide for positioning the image in the content view.
