> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbackgroundextensionview/automaticallyplacescontentview](https://developer.apple.com/documentation/appkit/nsbackgroundextensionview/automaticallyplacescontentview)

# automaticallyPlacesContentView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Controls the automatic safe area placement of the `contentView` within the container.

## Declaration

```swift
var automaticallyPlacesContentView: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When `NO`, the frame of the content view must be explicitly set or constraints added. The extension effect will be used to fill the container view around the content.

Defaults to `YES`.

# automaticallyPlacesContentView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Controls the automatic safe area placement of the `contentView` within the container.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyPlacesContentView;
```

<a id="discussion"></a>

## Discussion

When `NO`, the frame of the content view must be explicitly set or constraints added. The extension effect will be used to fill the container view around the content.

Defaults to `YES`.
