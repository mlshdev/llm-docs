> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/pushpanel(_:completion:)

# pushPanel(\_:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Pushes a new panel.

## Declaration

```swift
func pushPanel(_ panel: CPMapPanel, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func pushPanel(_ panel: CPMapPanel) async throws -> Bool
```

## Parameters

- `panel`: The panel to push.
- `completion`: An optional block called when the panel has been pushed.

## See Also

### Displaying overlay panels

- [showPanel(\_:completion:)](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [hidePanel(completion:)](hidepanel%28completion_%29.md): Hides the overlay.
- [popPanel(completion:)](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.

# pushPanel:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Pushes a new panel.

## Declaration

```objectivec
- (void) pushPanel:(CPMapPanel *) panel completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `panel`: The panel to push.
- `completion`: An optional block called when the panel has been pushed.

## See Also

### Displaying overlay panels

- [showPanel:completion:](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [hidePanelWithCompletion:](hidepanel%28completion_%29.md): Hides the overlay.
- [popPanelWithCompletion:](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.
