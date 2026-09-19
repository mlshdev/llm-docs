> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibackgroundextensionview/automaticallyplacescontentview

# automaticallyPlacesContentView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls the automatic safe area placement of the `contentView` within the container.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticallyPlacesContentView;
```

<a id="discussion"></a>

## Discussion

When `NO`, the frame of the content view must be explicitly set or constraints added. The extension effect will be used to fill the container view around the content.

Defaults to `YES`.
