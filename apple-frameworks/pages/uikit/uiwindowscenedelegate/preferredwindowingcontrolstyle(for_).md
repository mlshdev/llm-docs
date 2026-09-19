> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscenedelegate/preferredwindowingcontrolstyle(for:)

# preferredWindowingControlStyle(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called by the system to determine the windowing control style for the provided scene. `automaticStyle` will be used if this method is not implemented.

## Declaration

```swift
optional func preferredWindowingControlStyle(for windowScene: UIWindowScene) -> UIWindowScene.WindowingControlStyle
```

# preferredWindowingControlStyleForScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called by the system to determine the windowing control style for the provided scene. `automaticStyle` will be used if this method is not implemented.

## Declaration

```objectivec
- (UISceneWindowingControlStyle *) preferredWindowingControlStyleForScene:(UIWindowScene *) windowScene;
```
