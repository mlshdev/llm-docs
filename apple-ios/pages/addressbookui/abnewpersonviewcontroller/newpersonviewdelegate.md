> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abnewpersonviewcontroller/newpersonviewdelegate](https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/newpersonviewdelegate)

# newPersonViewDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The delegate of a new-person view controller.

> Use [delegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/delegate) instead.

## Declaration

```swift
unowned(unsafe) var newPersonViewDelegate: (any ABNewPersonViewControllerDelegate)? { get set }
```

## See Also

### Responding to View Controller Interactions

- [ABNewPersonViewControllerDelegate](../abnewpersonviewcontrollerdelegate.md): Deprecated. The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](../abnewpersonviewcontroller.md) delegates must implement.

# newPersonViewDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The delegate of a new-person view controller.

> Use [delegate](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller/delegate) instead.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<ABNewPersonViewControllerDelegate> newPersonViewDelegate;
```

## See Also

### Responding to View Controller Interactions

- [ABNewPersonViewControllerDelegate](../abnewpersonviewcontrollerdelegate.md): Deprecated. The `ABNewPersonViewControllerDelegate` protocol declares the interface that [ABNewPersonViewController](../abnewpersonviewcontroller.md) delegates must implement.
