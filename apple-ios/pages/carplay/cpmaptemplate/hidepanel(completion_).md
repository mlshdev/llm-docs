> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplate/hidepanel(completion:)

# hidePanel(completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Hides the overlay.

## Declaration

```swift
func hidePanel(completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func hidePanel() async throws -> Bool
```

## Parameters

- `completion`: An optional block called when the overlay has been hidden.

## See Also

### Displaying overlay panels

- [showPanel(\_:completion:)](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [pushPanel(\_:completion:)](pushpanel%28__completion_%29.md): Pushes a new panel.
- [popPanel(completion:)](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.

# hidePanelWithCompletion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Hides the overlay.

## Declaration

```objectivec
- (void) hidePanelWithCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `completion`: An optional block called when the overlay has been hidden.

## See Also

### Displaying overlay panels

- [showPanel:completion:](showpanel%28__completion_%29.md): Shows an overlay with the specified panel.
- [pushPanel:completion:](pushpanel%28__completion_%29.md): Pushes a new panel.
- [popPanelWithCompletion:](poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.
