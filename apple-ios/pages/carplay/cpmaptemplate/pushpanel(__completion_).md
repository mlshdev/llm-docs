> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/pushpanel(_:completion:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/pushpanel(_:completion:))

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
