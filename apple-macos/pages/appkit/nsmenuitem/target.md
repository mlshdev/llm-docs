> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/target](https://developer.apple.com/documentation/appkit/nsmenuitem/target)

# target (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s target.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

To ensure that a menu item’s target can receive commands while a modal dialog is open, the target object should return [true](https://developer.apple.com/documentation/swift/true) in [worksWhenModal](../nspanel/workswhenmodal.md).

## See Also

### Managing the target and action

- [action](action.md): The menu item’s action-method selector.

# target (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The menu item’s target.

## Declaration

```objectivec
@property (weak, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

To ensure that a menu item’s target can receive commands while a modal dialog is open, the target object should return [true](https://developer.apple.com/documentation/swift/true) in [worksWhenModal](../nspanel/workswhenmodal.md).

## See Also

### Managing the target and action

- [action](action.md): The menu item’s action-method selector.
