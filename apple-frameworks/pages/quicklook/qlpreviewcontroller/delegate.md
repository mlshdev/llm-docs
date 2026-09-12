> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller/delegate](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/delegate)

# delegate (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preview controller’s delegate object.

## Declaration

```swift
weak var delegate: (any QLPreviewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate determines whether to open URLs that the user taps in a preview. See [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md) to learn more.

## See Also

### Configuring a preview controller

- [dataSource](datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

# delegate (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preview controller’s delegate object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<QLPreviewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate determines whether to open URLs that the user taps in a preview. See [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md) to learn more.

## See Also

### Configuring a preview controller

- [dataSource](datasource.md): The preview controller’s data source.
- [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.
