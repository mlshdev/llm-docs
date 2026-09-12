> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsvisualeffectview/blendingmode-swift.enum/withinwindow](https://developer.apple.com/documentation/appkit/nsvisualeffectview/blendingmode-swift.enum/withinwindow)

# NSVisualEffectView.BlendingMode.withinWindow (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.10+

A mode that blends and blurs the visual effect view with contents behind the view in the current window only.

## Declaration

```swift
case withinWindow
```

<a id="Discussion"></a>

## Discussion

Views using this blending mode must not overlap each other.

## See Also

### Blend Modes

- [NSVisualEffectView.BlendingMode.behindWindow](behindwindow.md): A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.

# NSVisualEffectBlendingModeWithinWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.10+

A mode that blends and blurs the visual effect view with contents behind the view in the current window only.

## Declaration

```objectivec
NSVisualEffectBlendingModeWithinWindow
```

<a id="Discussion"></a>

## Discussion

Views using this blending mode must not overlap each other.

## See Also

### Blend Modes

- [NSVisualEffectBlendingModeBehindWindow](behindwindow.md): A mode that blends and blurs the visual effect view with the contents behind the window, such as the desktop or other windows.
