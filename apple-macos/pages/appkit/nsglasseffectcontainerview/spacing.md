> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsglasseffectcontainerview/spacing

# spacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The proximity at which the glass effect container view begins merging eligible descendent glass effect views.

## Declaration

```swift
var spacing: CGFloat { get set }
```

<a id="discussion"></a>

## Discussion

The default value, zero, is sufficient for batch processing eligible glass effect views, while avoiding distortion and merging effects for other views in close proximity.

# spacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The proximity at which the glass effect container view begins merging eligible descendent glass effect views.

## Declaration

```objectivec
@property CGFloat spacing;
```

<a id="discussion"></a>

## Discussion

The default value, zero, is sufficient for batch processing eligible glass effect views, while avoiding distortion and merging effects for other views in close proximity.
