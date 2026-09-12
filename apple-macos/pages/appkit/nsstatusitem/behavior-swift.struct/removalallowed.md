> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/behavior-swift.struct/removalallowed](https://developer.apple.com/documentation/appkit/nsstatusitem/behavior-swift.struct/removalallowed)

# removalAllowed (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A status item that allows interactive removal.

## Declaration

```swift
static var removalAllowed: NSStatusItem.Behavior { get }
```

<a id="Discussion"></a>

## Discussion

Status items with this behavior allow interactive removal from the menu bar. Upon removal, the item’s [isVisible](../isvisible.md) property changes to [false](https://developer.apple.com/documentation/swift/false). This change is observable using key-value observation.

## See Also

### Behaviors

- [terminationOnRemoval](terminationonremoval.md): A status item that quits the application upon removal.

# NSStatusItemBehaviorRemovalAllowed (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

A status item that allows interactive removal.

## Declaration

```objectivec
NSStatusItemBehaviorRemovalAllowed
```

<a id="Discussion"></a>

## Discussion

Status items with this behavior allow interactive removal from the menu bar. Upon removal, the item’s [visible](../isvisible.md) property changes to [false](https://developer.apple.com/documentation/swift/false). This change is observable using key-value observation.

## See Also

### Behaviors

- [NSStatusItemBehaviorTerminationOnRemoval](terminationonremoval.md): A status item that quits the application upon removal.
