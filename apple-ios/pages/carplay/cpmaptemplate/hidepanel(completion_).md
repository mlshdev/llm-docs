> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/hidepanel(completion:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/hidepanel(completion:))

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
