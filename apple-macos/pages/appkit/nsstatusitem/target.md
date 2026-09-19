> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsstatusitem/target

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The object that receives the status item’s action message when someone clicks the status item.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

If the status item has a menu set, clicking the status item doesn’t send the action to the target; instead, the click causes the menu to appear.

## See Also

### Configuring target-action behavior

- [action](action.md): The selector the status item sends to its target when someone clicks the status item.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The object that receives the status item’s action message when someone clicks the status item.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

If the status item has a menu set, clicking the status item doesn’t send the action to the target; instead, the click causes the menu to appear.

## See Also

### Configuring target-action behavior

- [action](action.md): The selector the status item sends to its target when someone clicks the status item.
