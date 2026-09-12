> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdropplaceholder/previewparametersprovider](https://developer.apple.com/documentation/uikit/uicollectionviewdropplaceholder/previewparametersprovider)

# previewParametersProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that provides the preview parameters for a drag item.

## Declaration

```swift
var previewParametersProvider: ((UICollectionViewCell) -> UIDragPreviewParameters?)? { get set }
```

# previewParametersProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object that provides the preview parameters for a drag item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIDragPreviewParameters * (^previewParametersProvider)(UICollectionViewCell *);
```
