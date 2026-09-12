> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbackgroundextensionview/contentview](https://developer.apple.com/documentation/appkit/nsbackgroundextensionview/contentview)

# contentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The content view to extend to fill the `NSBackgroundExtensionView`.

## Declaration

```swift
var contentView: NSView? { get set }
```

<a id="discussion"></a>

## Discussion

The content view will be added as a subview of the extension view and placed within the safe area by default. See `automaticallyPlacesContentView` to customize the layout.

# contentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The content view to extend to fill the `NSBackgroundExtensionView`.

## Declaration

```objectivec
@property (strong, nullable) NSView * contentView;
```

<a id="discussion"></a>

## Discussion

The content view will be added as a subview of the extension view and placed within the safe area by default. See `automaticallyPlacesContentView` to customize the layout.
