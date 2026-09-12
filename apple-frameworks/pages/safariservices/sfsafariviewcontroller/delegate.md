> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontroller/delegate](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller/delegate)

# delegate (Swift)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

An object that provides behavior for the Safari view controller’s Done and Action buttons.

## Declaration

```swift
weak var delegate: (any SFSafariViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a [SFSafariViewControllerDelegate](../sfsafariviewcontrollerdelegate.md) object to respond to the Done and Action buttons.

## See Also

### Responding to View Controller Interaction

- [SFSafariViewControllerDelegate](../sfsafariviewcontrollerdelegate.md): A protocol used to implement custom event handling for a Safari view controller.

# delegate (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

An object that provides behavior for the Safari view controller’s Done and Action buttons.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<SFSafariViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Provide a [SFSafariViewControllerDelegate](../sfsafariviewcontrollerdelegate.md) object to respond to the Done and Action buttons.

## See Also

### Responding to View Controller Interaction

- [SFSafariViewControllerDelegate](../sfsafariviewcontrollerdelegate.md): A protocol used to implement custom event handling for a Safari view controller.
