> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionlayoutlistconfiguration-c.class/backgroundcolor](https://developer.apple.com/documentation/uikit/uicollectionlayoutlistconfiguration-c.class/backgroundcolor)

# backgroundColor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The background color of the list.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The default vaue is `nil`, which means that the configuration uses the system background color for the specified appearance.

## See Also

### Configuring appearance

- [appearance](appearance.md): The overall appearance of the list layout.
- [UICollectionLayoutListAppearance](../uicollectionlayoutlistappearance.md): Constants that describe the appearance of the list.
