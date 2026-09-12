> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/showpanel(_:completion:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/showpanel(_:completion:))

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
