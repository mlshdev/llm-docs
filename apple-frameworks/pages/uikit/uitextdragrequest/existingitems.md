> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextdragrequest/existingitems

# existingItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The array of drag items present in a drag session.

## Declaration

```swift
var existingItems: [UIDragItem] { get }
```

## See Also

### Getting the drag items

- [suggestedItems](suggesteditems.md): An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.

# existingItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The array of drag items present in a drag session.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIDragItem *> * existingItems;
```

## See Also

### Getting the drag items

- [suggestedItems](suggesteditems.md): An array of drag items that the system provides when the text drag delegate doesn’t provide custom drag items.
