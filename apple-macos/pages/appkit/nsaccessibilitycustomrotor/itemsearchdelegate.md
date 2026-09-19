> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/itemsearchdelegate

# itemSearchDelegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The delegate for finding the next item result.

## Declaration

```swift
weak var itemSearchDelegate: (any NSAccessibilityCustomRotorItemSearchDelegate)? { get set }
```

## See Also

### Navigating to the Next Item

- [NSAccessibilityCustomRotorItemSearchDelegate](../nsaccessibilitycustomrotoritemsearchdelegate.md): A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.

# itemSearchDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The delegate for finding the next item result.

## Declaration

```objectivec
@property (weak) id<NSAccessibilityCustomRotorItemSearchDelegate> itemSearchDelegate;
```

## See Also

### Navigating to the Next Item

- [NSAccessibilityCustomRotorItemSearchDelegate](../nsaccessibilitycustomrotoritemsearchdelegate.md): A delegate for a custom rotor that finds the next item result after performing a search with the specified search parameters.
