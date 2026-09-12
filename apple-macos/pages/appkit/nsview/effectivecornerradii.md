> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/effectivecornerradii](https://developer.apple.com/documentation/appkit/nsview/effectivecornerradii)

# effectiveCornerRadii (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.

## Declaration

```swift
@NSCopying var effectiveCornerRadii: NSViewCornerRadii? { get }
```

## See Also

### Configuring corners

- [cornerConfiguration](cornerconfiguration.md): Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.
- [invalidateCornerConfiguration()](invalidatecornerconfiguration%28%29.md): Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.
- [viewDidChangeEffectiveCornerRadii()](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.

# effectiveCornerRadii (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSViewCornerRadii * effectiveCornerRadii;
```

## See Also

### Configuring corners

- [cornerConfiguration](cornerconfiguration.md): Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.
- [invalidateCornerConfiguration](invalidatecornerconfiguration%28%29.md): Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.
- [viewDidChangeEffectiveCornerRadii](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.
