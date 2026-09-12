> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/blendingmode-swift.enum/behindwindow](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.enum/behindwindow)

# NSVisualEffectView.BlendingMode.behindWindow (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.

## Declaration

```swift
case behindWindow
```

<a id="Discussion"></a>

## Discussion

Views using this blending mode can overlap, and the view lower in the hierarchy “wins”.

## See Also

### Blend Modes

- [NSVisualEffectView.BlendingMode.withinWindow](withinwindow.md): A mode that blends and blurs the visual effect view with contents behind the view in the current window only.

# NSVisualEffectBlendingModeBehindWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.

## Declaration

```objectivec
NSVisualEffectBlendingModeBehindWindow
```

<a id="Discussion"></a>

## Discussion

Views using this blending mode can overlap, and the view lower in the hierarchy “wins”.

## See Also

### Blend Modes

- [NSVisualEffectBlendingModeWithinWindow](withinwindow.md): A mode that blends and blurs the visual effect view with contents behind the view in the current window only.
