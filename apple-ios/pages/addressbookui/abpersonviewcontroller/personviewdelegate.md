> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/addressbookui/abpersonviewcontroller/personviewdelegate](https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/personviewdelegate)

# personViewDelegate (Swift)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The person-view controller delegate.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```swift
unowned(unsafe) var personViewDelegate: (any ABPersonViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [ABPersonViewControllerDelegate](../abpersonviewcontrollerdelegate.md) protocol.

## See Also

### Responding to View Controller Interactions

- [ABPersonViewControllerDelegate](../abpersonviewcontrollerdelegate.md): Deprecated. The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](../abpersonviewcontroller.md) delegates.

# personViewDelegate (Objective-C)

**Framework:** Address Book UI  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The person-view controller delegate.

> Use [CNContactViewController](https://developer.apple.com/documentation/contactsui/cncontactviewcontroller) instead.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<ABPersonViewControllerDelegate> personViewDelegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [ABPersonViewControllerDelegate](../abpersonviewcontrollerdelegate.md) protocol.

## See Also

### Responding to View Controller Interactions

- [ABPersonViewControllerDelegate](../abpersonviewcontrollerdelegate.md): Deprecated. The `ABPersonViewControllerDelegate` protocol declares the interface that must be implemented by [ABPersonViewController](../abpersonviewcontroller.md) delegates.
