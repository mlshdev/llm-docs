> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomrotor/itemsearchblock](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomrotor/itemsearchblock)

# itemSearchBlock (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The block for retrieving the next or previous rotor.

## Declaration

```swift
var itemSearchBlock: UIAccessibilityCustomRotor.Search { get set }
```

<a id="Discussion"></a>

## Discussion

Your implementation of the block facilitates navigation from the current rotor to the next or previous rotor.

## See Also

### Navigating to the next item

- [UIAccessibilityCustomRotor.Search](search.md): The block type for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotor.Direction](direction.md): Constants that indicate the search direction.

# itemSearchBlock (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The block for retrieving the next or previous rotor.

## Declaration

```objectivec
@property (nonatomic, copy) UIAccessibilityCustomRotorSearch itemSearchBlock;
```

<a id="Discussion"></a>

## Discussion

Your implementation of the block facilitates navigation from the current rotor to the next or previous rotor.

## See Also

### Navigating to the next item

- [UIAccessibilityCustomRotorSearch](search.md): The block type for retrieving the next or previous rotor.
- [UIAccessibilityCustomRotorDirection](direction.md): Constants that indicate the search direction.
