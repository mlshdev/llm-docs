> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibackgroundextensionview/contentview

# contentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The content view to extend to fill the `UIBackgroundExtensionView`.

## Declaration

```swift
var contentView: UIView? { get set }
```

<a id="discussion"></a>

## Discussion

The content view will be added as a subview of the extension view and placed within the safe area by default. See `automaticallyPlacesContentView` to customize the layout.

# contentView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The content view to extend to fill the `UIBackgroundExtensionView`.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * contentView;
```

<a id="discussion"></a>

## Discussion

The content view will be added as a subview of the extension view and placed within the safe area by default. See `automaticallyPlacesContentView` to customize the layout.
