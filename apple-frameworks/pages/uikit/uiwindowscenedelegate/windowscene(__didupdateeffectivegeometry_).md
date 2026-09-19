> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiwindowscenedelegate/windowscene(_:didupdateeffectivegeometry:)

# windowScene(\_:didUpdateEffectiveGeometry:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called when the window scene’s effective geometry has changed.

## Declaration

```swift
optional func windowScene(_ windowScene: UIWindowScene, didUpdateEffectiveGeometry previousEffectiveGeometry: UIWindowScene.Geometry)
```

<a id="discussion"></a>

## Discussion

Always called when a `UIWindowScene` moves between screens.

# windowScene:didUpdateEffectiveGeometry: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Called when the window scene’s effective geometry has changed.

## Declaration

```objectivec
- (void) windowScene:(UIWindowScene *) windowScene didUpdateEffectiveGeometry:(UIWindowSceneGeometry *) previousEffectiveGeometry;
```

<a id="discussion"></a>

## Discussion

Always called when a `UIWindowScene` moves between screens.
