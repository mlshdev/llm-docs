> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/cornerconfiguration](https://developer.apple.com/documentation/appkit/nsview/cornerconfiguration)

# cornerConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.

## Declaration

```swift
@NSCopying var cornerConfiguration: NSViewCornerConfiguration? { get }
```

## See Also

### Configuring corners

- [effectiveCornerRadii](effectivecornerradii.md): The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.
- [invalidateCornerConfiguration()](invalidatecornerconfiguration%28%29.md): Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.
- [viewDidChangeEffectiveCornerRadii()](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.

# cornerConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Defines the corner styles (e.g., square, capsule, concentric, etc) for the view’s corners.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSViewCornerConfiguration * cornerConfiguration;
```

## See Also

### Configuring corners

- [effectiveCornerRadii](effectivecornerradii.md): The effective radius of each corner in the view, calculated based on the corner configuration (`cornerConfiguration`). This value is `nil` when the corner configuration is `nil`.
- [invalidateCornerConfiguration](invalidatecornerconfiguration%28%29.md): Invalidates the corner configuration, causing both the configuration and its dependencies to be recomputed.
- [viewDidChangeEffectiveCornerRadii](viewdidchangeeffectivecornerradii%28%29.md): Informs the view that its effective corner radii changed. This method should be overridden to apply the corner radii to the view as required.
