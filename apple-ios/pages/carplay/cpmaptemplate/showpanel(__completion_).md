> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/showpanel(_:completion:)

# showPanel(\_:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Shows an overlay with the specified panel.

## Declaration

```swift
func showPanel(_ panel: CPMapPanel, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func showPanel(_ panel: CPMapPanel) async throws -> Bool
```

## Parameters

- `panel`: The panel to display.
- `completion`: An optional block called when the overlay has been shown.

## See Also

### Displaying overlay panels

- [hidePanel(completion:)](hidepanel%28completion_%29.md): Hides the overlay.
- [pushPanel(\_:completion:)](pushpanel%28__completion_%29.md): Pushes a new panel.
- [popPanel(completion:)](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.

# showPanel:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Shows an overlay with the specified panel.

## Declaration

```objectivec
- (void) showPanel:(CPMapPanel *) panel completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `panel`: The panel to display.
- `completion`: An optional block called when the overlay has been shown.

## See Also

### Displaying overlay panels

- [hidePanelWithCompletion:](hidepanel%28completion_%29.md): Hides the overlay.
- [pushPanel:completion:](pushpanel%28__completion_%29.md): Pushes a new panel.
- [popPanelWithCompletion:](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.
