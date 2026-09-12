> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/poppanel(completion:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/poppanel(completion:))

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
