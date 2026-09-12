> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycustomrotor/searchparameters/currentitem](https://developer.apple.com/documentation/appkit/nsaccessibilitycustomrotor/searchparameters/currentitem)

# currentItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The current item that determines where the search starts.

## Declaration

```swift
var currentItem: NSAccessibilityCustomRotor.ItemResult? { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, [searchDirection](searchdirection.md) determines the current item. A search direction of [NSAccessibilityCustomRotor.SearchDirection.next](../searchdirection/next.md) begins the search from the first item, and a search direction of [NSAccessibilityCustomRotor.SearchDirection.previous](../searchdirection/previous.md) begins the search from the last item.

## See Also

### Managing the Current Item

- [NSAccessibilityCustomRotor.ItemResult](../itemresult.md): A target accessibility element that a custom rotor references.

# currentItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The current item that determines where the search starts.

## Declaration

```objectivec
@property (strong, nullable) NSAccessibilityCustomRotorItemResult * currentItem;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, [searchDirection](searchdirection.md) determines the current item. A search direction of [NSAccessibilityCustomRotorSearchDirectionNext](../searchdirection/next.md) begins the search from the first item, and a search direction of [NSAccessibilityCustomRotorSearchDirectionPrevious](../searchdirection/previous.md) begins the search from the last item.

## See Also

### Managing the Current Item

- [NSAccessibilityCustomRotorItemResult](../itemresult.md): A target accessibility element that a custom rotor references.
