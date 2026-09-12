> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsarraycontroller/arrangedobjects](https://developer.apple.com/documentation/appkit/nsarraycontroller/arrangedobjects)

# arrangedObjects (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the receiver’s content objects arranged using [arrange(\_:)](arrange%28__%29.md).

## Declaration

```swift
var arrangedObjects: Any { get }
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Arranging Objects

- [arrange(\_:)](arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [rearrangeObjects()](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.

# arrangedObjects (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing the receiver’s content objects arranged using [arrangeObjects:](arrange%28__%29.md).

## Declaration

```objectivec
@property (strong, readonly) id arrangedObjects;
```

<a id="Discussion"></a>

## Discussion

This property is observable using key-value observing.

## See Also

### Arranging Objects

- [arrangeObjects:](arrange%28__%29.md): Returns a given array, appropriately sorted and filtered.
- [rearrangeObjects](rearrangeobjects%28%29.md): Triggers filtering of the receiver’s content.
