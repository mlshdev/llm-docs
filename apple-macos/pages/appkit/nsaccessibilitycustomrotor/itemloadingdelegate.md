> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/itemloadingdelegate](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/itemloadingdelegate)

# itemLoadingDelegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The delegate for loading item results that don’t have a backing UI element at loading time.

## Declaration

```swift
weak var itemLoadingDelegate: (any NSAccessibilityElementLoading)? { get set }
```

## See Also

### Loading the Item

- [NSAccessibilityElementLoading](../nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.

# itemLoadingDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The delegate for loading item results that don’t have a backing UI element at loading time.

## Declaration

```objectivec
@property (weak, nullable) id<NSAccessibilityElementLoading> itemLoadingDelegate;
```

## See Also

### Loading the Item

- [NSAccessibilityElementLoading](../nsaccessibilityelementloading.md): A role-based protocol that declares the minimum interface necessary for an accessibility element to support loading.
