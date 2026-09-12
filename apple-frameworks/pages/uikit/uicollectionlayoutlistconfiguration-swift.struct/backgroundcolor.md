> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/backgroundcolor](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-swift.struct/backgroundcolor)

# backgroundColor

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The background color of the list.

## Declaration

```swift
var backgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default vaue is `nil`, which means that the configuration uses the system background color for the specified appearance.

## See Also

### Configuring appearance

- [appearance](appearance-swift.property.md): The overall appearance of the list.
- [UICollectionLayoutListConfiguration.Appearance](appearance-swift.enum.md): Constants that describe the appearance of the list.
