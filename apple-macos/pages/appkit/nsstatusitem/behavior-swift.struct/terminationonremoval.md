> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstatusitem/behavior-swift.struct/terminationonremoval](https://developer.apple.com/documentation/appkit/nsstatusitem/behavior-swift.struct/terminationonremoval)

# terminationOnRemoval (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.12+

A status item that quits the application upon removal.

## Declaration

```swift
static var terminationOnRemoval: NSStatusItem.Behavior { get }
```

<a id="Discussion"></a>

## Discussion

A status item with this behavior quits the application if the user removes it from the menu bar. This behavior implicitly provides the same functionality as [removalAllowed](removalallowed.md).

The [terminationOnRemoval](terminationonremoval.md) behavior is suitable for applications that display only a [NSStatusItem](../../nsstatusitem.md) and provide no other user interface.

## See Also

### Behaviors

- [removalAllowed](removalallowed.md): A status item that allows interactive removal.

# NSStatusItemBehaviorTerminationOnRemoval (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

A status item that quits the application upon removal.

## Declaration

```objectivec
NSStatusItemBehaviorTerminationOnRemoval
```

<a id="Discussion"></a>

## Discussion

A status item with this behavior quits the application if the user removes it from the menu bar. This behavior implicitly provides the same functionality as [NSStatusItemBehaviorRemovalAllowed](removalallowed.md).

The [NSStatusItemBehaviorTerminationOnRemoval](terminationonremoval.md) behavior is suitable for applications that display only a [NSStatusItem](../../nsstatusitem.md) and provide no other user interface.

## See Also

### Behaviors

- [NSStatusItemBehaviorRemovalAllowed](removalallowed.md): A status item that allows interactive removal.
