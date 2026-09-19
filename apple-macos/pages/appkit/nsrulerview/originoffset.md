> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsrulerview/originoffset

# originOffset (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The distance to the zero hash mark from the bounds origin of the NSScrollView’s document view (not of the receiver’s client view), in the document view’s coordinate system.

## Declaration

```swift
var originOffset: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default offset is 0.0, meaning that the ruler origin coincides with the bounds origin of the document view.

# originOffset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The distance to the zero hash mark from the bounds origin of the NSScrollView’s document view (not of the receiver’s client view), in the document view’s coordinate system.

## Declaration

```objectivec
@property CGFloat originOffset;
```

<a id="Discussion"></a>

## Discussion

The default offset is 0.0, meaning that the ruler origin coincides with the bounds origin of the document view.
