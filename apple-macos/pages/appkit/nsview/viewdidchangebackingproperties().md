> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/viewdidchangebackingproperties()](https://developer.apple.com/documentation/appkit/nsview/viewdidchangebackingproperties())

# viewDidChangeBackingProperties() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Responds when the view’s backing store properties change.

## Declaration

```swift
func viewDidChangeBackingProperties()
```

<a id="Discussion"></a>

## Discussion

The view gets this message when the backing store scale or color space changes. Provide an implementation if you need to swap assets or make other adjustments when a view’s backing store properties change.

## See Also

### Responding to Appearance Changes

- [viewDidChangeEffectiveAppearance()](viewdidchangeeffectiveappearance%28%29.md): Informs the view that its effective appearance changed.

# viewDidChangeBackingProperties (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Responds when the view’s backing store properties change.

## Declaration

```objectivec
- (void) viewDidChangeBackingProperties;
```

<a id="Discussion"></a>

## Discussion

The view gets this message when the backing store scale or color space changes. Provide an implementation if you need to swap assets or make other adjustments when a view’s backing store properties change.

## See Also

### Responding to Appearance Changes

- [viewDidChangeEffectiveAppearance](viewdidchangeeffectiveappearance%28%29.md): Informs the view that its effective appearance changed.
