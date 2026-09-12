> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/action](https://developer.apple.com/documentation/appkit/nsstatusitem/action)

# action (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The selector the status item sends to its target when someone clicks the status item.

## Declaration

```swift
var action: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

If the status item has a menu set, clicking the status item doesn’t send the action to the target; instead, the click causes the menu to appear.

## See Also

### Configuring target-action behavior

- [target](target.md): The object that receives the status item’s action message when someone clicks the status item.

# action (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The selector the status item sends to its target when someone clicks the status item.

## Declaration

```objectivec
@property (nullable) SEL action;
```

<a id="Discussion"></a>

## Discussion

If the status item has a menu set, clicking the status item doesn’t send the action to the target; instead, the click causes the menu to appear.

## See Also

### Configuring target-action behavior

- [target](target.md): The object that receives the status item’s action message when someone clicks the status item.
