> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/menu(contents:)](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/menu(contents:))

# menu(contents:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
func menu(contents: AVLegibleMediaOptionsMenuController.MenuContents = []) -> UIMenu?
```

```swift
func menu(contents: AVLegibleMediaOptionsMenuController.MenuContents = []) -> NSMenu?
```

## Parameters

- `contents`: A set of values from the AVLegibleMediaOptionsMenuContents

<a id="return-value"></a>

## Return Value

A NSMenu ready to be presented by the client, or nil if the menu cannot be built

<a id="discussion"></a>

## Discussion

Builds a legible options menu using the specified contents.

Returns nil if the requested menu type cannot be built due to missing content (e.g., requesting track selection without a player).

## See Also

### Managing the menu

- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuController.MenuContents](menucontents.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuController.StateChangeReason](statechangereason.md)

# menuWithContents: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
- (UIMenu *) menuWithContents:(AVLegibleMediaOptionsMenuContents) contents;
```

```objectivec
- (NSMenu *) menuWithContents:(AVLegibleMediaOptionsMenuContents) contents;
```

## Parameters

- `contents`: A set of values from the AVLegibleMediaOptionsMenuContents

<a id="return-value"></a>

## Return Value

A NSMenu ready to be presented by the client, or nil if the menu cannot be built

<a id="discussion"></a>

## Discussion

Builds a legible options menu using the specified contents.

Returns nil if the requested menu type cannot be built due to missing content (e.g., requesting track selection without a player).

## See Also

### Managing the menu

- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuContents](menucontents.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuStateChangeReason](statechangereason.md)
