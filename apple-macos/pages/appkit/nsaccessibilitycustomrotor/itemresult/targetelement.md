> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/itemresult/targetelement](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/itemresult/targetelement)

# targetElement (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A target element that references an element to message for accessibility properties.

## Declaration

```swift
weak var targetElement: (any NSAccessibilityElementProtocol)? { get }
```

## See Also

### Identifying an Item Result

- [itemLoadingToken](itemloadingtoken.md): A token to determine which item to return.
- [targetRange](targetrange.md): A range that specifies the area of interest for text-based elements.
- [customLabel](customlabel.md): A localized label to use instead of the default item label to describe the item result.

# targetElement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

A target element that references an element to message for accessibility properties.

## Declaration

```objectivec
@property (weak, readonly, nullable) id<NSAccessibilityElement> targetElement;
```

## See Also

### Identifying an Item Result

- [itemLoadingToken](itemloadingtoken.md): A token to determine which item to return.
- [targetRange](targetrange.md): A range that specifies the area of interest for text-based elements.
- [customLabel](customlabel.md): A localized label to use instead of the default item label to describe the item result.
