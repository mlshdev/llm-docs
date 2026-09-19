> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibarbuttonitem/axisbehavior-swift.enum

# UIBarButtonItem.AxisBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

## Declaration

```swift
enum AxisBehavior
```

## Topics

### Choosing an orientation behavior

- [UIBarButtonItem.AxisBehavior.automatic](axisbehavior-swift.enum/automatic.md): Beta. The automatic behavior. The system infers the supported axes based on the contents of the item.
- [UIBarButtonItem.AxisBehavior.horizontalOnly](axisbehavior-swift.enum/horizontalonly.md): Beta. The item only supports horizontal bars. If an item only supports horizontal bars and no horizontal bars are present, the item is not shown.
- [UIBarButtonItem.AxisBehavior.verticalPreferred](axisbehavior-swift.enum/verticalpreferred.md): Beta. The item supports both horizontal and vertical bars, and prefers a vertical placement when both horizontal and vertical bars are present

### Initializers

- [init(rawValue:)](axisbehavior-swift.enum/init%28rawvalue_%29.md): Beta.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing placement in a toolbar

- [hidesSharedBackground](hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.
- [sharesBackground](sharesbackground.md): A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.
- [axisBehavior](axisbehavior-swift.property.md): Beta. The bar axis behavior of the item.

# UIBarButtonItemAxisBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

## Declaration

```objectivec
enum UIBarButtonItemAxisBehavior : NSInteger;
```

## Topics

### Choosing an orientation behavior

- [UIBarButtonItemAxisBehaviorAutomatic](axisbehavior-swift.enum/automatic.md): Beta. The automatic behavior. The system infers the supported axes based on the contents of the item.
- [UIBarButtonItemAxisBehaviorHorizontalOnly](axisbehavior-swift.enum/horizontalonly.md): Beta. The item only supports horizontal bars. If an item only supports horizontal bars and no horizontal bars are present, the item is not shown.
- [UIBarButtonItemAxisBehaviorVerticalPreferred](axisbehavior-swift.enum/verticalpreferred.md): Beta. The item supports both horizontal and vertical bars, and prefers a vertical placement when both horizontal and vertical bars are present

## See Also

### Customizing placement in a toolbar

- [hidesSharedBackground](hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.
- [sharesBackground](sharesbackground.md): A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.
- [axisBehavior](axisbehavior-swift.property.md): Beta. The bar axis behavior of the item.
