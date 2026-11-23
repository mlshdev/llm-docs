> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/poppanel(completion:)

# popPanel(completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Pops the top panel from the overlay’s panel stack.

## Declaration

```swift
func popPanel(completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func popPanel() async throws -> Bool
```

## Parameters

- `completion`: An optional block called when the panel has been popped.

## See Also

### Displaying overlay panels

- [showPanel(\_:completion:)](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [hidePanel(completion:)](hidepanel%28completion_%29.md): Hides the overlay.
- [pushPanel(\_:completion:)](pushpanel%28__completion_%29.md): Pushes a new panel.

# popPanelWithCompletion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Pops the top panel from the overlay’s panel stack.

## Declaration

```objectivec
- (void) popPanelWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: An optional block called when the panel has been popped.

## See Also

### Displaying overlay panels

- [showPanel:completion:](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [hidePanelWithCompletion:](hidepanel%28completion_%29.md): Hides the overlay.
- [pushPanel:completion:](pushpanel%28__completion_%29.md): Pushes a new panel.
