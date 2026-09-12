> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusbar/removestatusitem(_:)](https://developer.apple.com/documentation/appkit/nsstatusbar/removestatusitem(_:))

# removeStatusItem(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified status item from the receiver.

## Declaration

```swift
func removeStatusItem(_ item: NSStatusItem)
```

## Parameters

- `item`: The `NSStatusItem` object to remove.

<a id="Discussion"></a>

## Discussion

Status items to the left of the specified one in the status bar shift to the right to reclaim its space.

## See Also

### Managing Status items

- [statusItem(withLength:)](statusitem%28withlength_%29.md): Returns a newly created status item that has been allotted a specified space within the status bar.

# removeStatusItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the specified status item from the receiver.

## Declaration

```objectivec
- (void) removeStatusItem:(NSStatusItem *) item;
```

## Parameters

- `item`: The `NSStatusItem` object to remove.

<a id="Discussion"></a>

## Discussion

Status items to the left of the specified one in the status bar shift to the right to reclaim its space.

## See Also

### Managing Status items

- [statusItemWithLength:](statusitem%28withlength_%29.md): Returns a newly created status item that has been allotted a specified space within the status bar.
