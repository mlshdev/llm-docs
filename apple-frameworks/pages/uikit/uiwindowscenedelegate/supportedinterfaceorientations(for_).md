> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscenedelegate/supportedinterfaceorientations(for:)

# supportedInterfaceOrientations(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

## Declaration

```swift
optional func supportedInterfaceOrientations(for windowScene: UIWindowScene) -> UIInterfaceOrientationMask
```

# supportedInterfaceOrientationsForWindowScene: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Returns the interface orientations supported by the window scene. The returned value replaces the app’s UISupportedInterfaceOrientations Info.plist value for this scene. If not implemented, the Info.plist value is used.

## Declaration

```objectivec
- (UIInterfaceOrientationMask) supportedInterfaceOrientationsForWindowScene:(UIWindowScene *) windowScene;
```
