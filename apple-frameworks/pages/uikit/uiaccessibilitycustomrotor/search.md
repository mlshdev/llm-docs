> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/search

# UIAccessibilityCustomRotor.Search (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The block type for retrieving the next or previous rotor.

## Declaration

```swift
@MainActor typealias Search = (UIAccessibilityCustomRotorSearchPredicate) -> UIAccessibilityCustomRotorItemResult?
```

## See Also

### Navigating to the next item

- [itemSearchBlock](itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotor.Direction](direction.md): Constants that indicate the search direction.

# UIAccessibilityCustomRotorSearch (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The block type for retrieving the next or previous rotor.

## Declaration

```objectivec
typedef UIAccessibilityCustomRotorItemResult *(^)(UIAccessibilityCustomRotorSearchPredicate *) UIAccessibilityCustomRotorSearch;
```

## See Also

### Navigating to the next item

- [itemSearchBlock](itemsearchblock.md): The block for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotorDirection](direction.md): Constants that indicate the search direction.
