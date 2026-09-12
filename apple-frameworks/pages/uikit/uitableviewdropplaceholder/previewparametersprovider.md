> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropplaceholder/previewparametersprovider](https://developer.apple.com/documentation/uikit/uitableviewdropplaceholder/previewparametersprovider)

# previewParametersProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler block that provides the preview parameters for the specified cell.

## Declaration

```swift
var previewParametersProvider: ((UITableViewCell) -> UIDragPreviewParameters?)? { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a custom block when you want to provide a custom preview for your placeholder cell. If you don’t specify a block, the table view uses a default preview for the cell.

# previewParametersProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The handler block that provides the preview parameters for the specified cell.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIDragPreviewParameters * (^previewParametersProvider)(UITableViewCell *);
```

<a id="Discussion"></a>

## Discussion

Specify a custom block when you want to provide a custom preview for your placeholder cell. If you don’t specify a block, the table view uses a default preview for the cell.
