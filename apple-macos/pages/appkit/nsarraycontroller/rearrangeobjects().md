> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/rearrangeobjects()](https://developer.apple.com/documentation/appkit/nsarraycontroller/rearrangeobjects())

# rearrangeObjects() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Triggers filtering of the receiver’s content.

## Declaration

```swift
func rearrangeObjects()
```

<a id="Discussion"></a>

## Discussion

This method invokes [arrange(\_:)](arrange%28__%29.md).

When you detect that filtering criteria change (such as when listening to the text sent by an `NSSearchField` instance), invoke this method on `self`.

## See Also

### Related Documentation

- [didChangeArrangementCriteria()](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

### Arranging Objects

- [arrange(\_:)](arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [arrangedObjects](arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrange(\_:)](arrange%28__%29.md).

# rearrangeObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Triggers filtering of the receiver’s content.

## Declaration

```objectivec
- (void) rearrangeObjects;
```

<a id="Discussion"></a>

## Discussion

This method invokes [arrangeObjects:](arrange%28__%29.md).

When you detect that filtering criteria change (such as when listening to the text sent by an `NSSearchField` instance), invoke this method on `self`.

## See Also

### Related Documentation

- [didChangeArrangementCriteria](didchangearrangementcriteria%28%29.md): Invoked when any criteria for arranging objects change.

### Arranging Objects

- [arrangeObjects:](arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [arrangedObjects](arrangedobjects.md): An array containing the receiver’s content objects arranged using [arrangeObjects:](arrange%28__%29.md).
