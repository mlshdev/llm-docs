> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitem/didhintfocusmovement(_:)](https://developer.apple.com/documentation/uikit/uifocusitem/didhintfocusmovement(_:))

# didHintFocusMovement(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Indicates to the currently focused item that focus movement might occur.

## Declaration

```swift
optional func didHintFocusMovement(_ hint: UIFocusMovementHint)
```

## Parameters

- `hint`: The movement hint object corresponding to the user’s input.

<a id="Discussion"></a>

## Discussion

The focus item is mutated by the focus engine whenever the user’s finger moves on the remote.

## See Also

### Providing movement hints

- [UIFocusMovementHint](../uifocusmovementhint.md): Provides movement hint information for the focused item.

# didHintFocusMovement: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Indicates to the currently focused item that focus movement might occur.

## Declaration

```objectivec
- (void) didHintFocusMovement:(UIFocusMovementHint *) hint;
```

## Parameters

- `hint`: The movement hint object corresponding to the user’s input.

<a id="Discussion"></a>

## Discussion

The focus item is mutated by the focus engine whenever the user’s finger moves on the remote.

## See Also

### Providing movement hints

- [UIFocusMovementHint](../uifocusmovementhint.md): Provides movement hint information for the focused item.
