> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidatecornerconfiguration()](https://developer.apple.com/documentation/appkit/nsview/invalidatecornerconfiguration())

# invalidateCornerConfiguration() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.

## Declaration

```swift
func invalidateCornerConfiguration()
```

## See Also

### Configuring corners

- [cornerConfiguration](cornerconfiguration.md): Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.
- [effectiveCornerRadii](effectivecornerradii.md): The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.
- [viewDidChangeEffectiveCornerRadii()](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.

# invalidateCornerConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.

## Declaration

```objectivec
- (void) invalidateCornerConfiguration;
```

## See Also

### Configuring corners

- [cornerConfiguration](cornerconfiguration.md): Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.
- [effectiveCornerRadii](effectivecornerradii.md): The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.
- [viewDidChangeEffectiveCornerRadii](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.
