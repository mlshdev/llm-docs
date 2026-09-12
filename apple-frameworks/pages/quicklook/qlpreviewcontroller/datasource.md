> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewcontroller/datasource](https://developer.apple.com/documentation/quicklook/qlpreviewcontroller/datasource)

# dataSource (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preview controller’s data source.

## Declaration

```swift
weak var dataSource: (any QLPreviewControllerDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

To use a Quick Look preview controller, you need to implement a data source. The data source is responsible for providing items for display by the controller, and for telling it how many items to include in the preview navigation list. To learn more about implementing a data source, see [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md).

## See Also

### Configuring a preview controller

- [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.

# dataSource (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The preview controller’s data source.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<QLPreviewControllerDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

To use a Quick Look preview controller, you need to implement a data source. The data source is responsible for providing items for display by the controller, and for telling it how many items to include in the preview navigation list. To learn more about implementing a data source, see [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md).

## See Also

### Configuring a preview controller

- [QLPreviewControllerDataSource](../qlpreviewcontrollerdatasource.md): The protocol that a data source for a preview controller needs to adopt to provide preview items to the controller.
- [delegate](delegate.md): The preview controller’s delegate object.
- [QLPreviewControllerDelegate](../qlpreviewcontrollerdelegate.md): The protocol that a delegate of a preview controller needs to adopt to handle Quick Look previews.
