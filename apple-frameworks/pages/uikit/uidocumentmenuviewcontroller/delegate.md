> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenuviewcontroller/delegate](https://developer.apple.com/documentation/uikit/uidocumentmenuviewcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The document menu’s delegate.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
weak var delegate: (any UIDocumentMenuDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIDocumentMenuDelegate](../uidocumentmenudelegate.md) protocol.

## See Also

### Getting the user-selected document picker

- [UIDocumentMenuDelegate](../uidocumentmenudelegate.md): Deprecated. A set of methods that you must implement to track user interactions with a document menu view controller.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The document menu’s delegate.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIDocumentMenuDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate must adopt the [UIDocumentMenuDelegate](../uidocumentmenudelegate.md) protocol.

## See Also

### Getting the user-selected document picker

- [UIDocumentMenuDelegate](../uidocumentmenudelegate.md): Deprecated. A set of methods that you must implement to track user interactions with a document menu view controller.
