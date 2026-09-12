> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abunknownpersonviewcontroller/unknownpersonviewdelegate](https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/unknownpersonviewdelegate)

# unknownPersonViewDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The unknown-person view controller delegate.

> Use +\[CNContactViewController viewControllerForUnknownContact:\] from ContactsUI.framework instead

## Declaration

```swift
unowned(unsafe) var unknownPersonViewDelegate: (any ABUnknownPersonViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [ABUnknownPersonViewControllerDelegate](../abunknownpersonviewcontrollerdelegate.md) protocol.

## See Also

### Responding to View Controller Interactions

- [ABUnknownPersonViewControllerDelegate](../abunknownpersonviewcontrollerdelegate.md): Deprecated. The methods you use to respond to events in an unknown person view controller.

# unknownPersonViewDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The unknown-person view controller delegate.

> Use +\[CNContactViewController viewControllerForUnknownContact:\] from ContactsUI.framework instead

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<ABUnknownPersonViewControllerDelegate> unknownPersonViewDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [ABUnknownPersonViewControllerDelegate](../abunknownpersonviewcontrollerdelegate.md) protocol.

## See Also

### Responding to View Controller Interactions

- [ABUnknownPersonViewControllerDelegate](../abunknownpersonviewcontrollerdelegate.md): Deprecated. The methods you use to respond to events in an unknown person view controller.
