> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/behavior-swift.property](https://developer.apple.com/documentation/appkit/nsstatusitem/behavior-swift.property)

# behavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The set of allowed behaviors for the status item.

## Declaration

```swift
var behavior: NSStatusItem.Behavior { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property includes no behavior options. See [NSStatusItem.Behavior](behavior-swift.struct.md) for a list of available behavior options and their effects.

## See Also

### Managing the status item’s behavior

- [NSStatusItem.Behavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [button](button.md): The button displayed in the status bar.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.

# behavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

The set of allowed behaviors for the status item.

## Declaration

```objectivec
@property (assign) NSStatusItemBehavior behavior;
```

<a id="Discussion"></a>

## Discussion

By default, this property includes no behavior options. See [NSStatusItemBehavior](behavior-swift.struct.md) for a list of available behavior options and their effects.

## See Also

### Managing the status item’s behavior

- [NSStatusItemBehavior](behavior-swift.struct.md): A set of optional status item behaviors.
- [button](button.md): The button displayed in the status bar.
- [menu](menu.md): The pull-down menu displayed when the user clicks the status item.
