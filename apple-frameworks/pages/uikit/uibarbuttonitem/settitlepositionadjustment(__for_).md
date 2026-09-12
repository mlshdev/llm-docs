> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/settitlepositionadjustment(_:for:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/settitlepositionadjustment(_:for:))

# setTitlePositionAdjustment(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title offset for specified bar metrics.

## Declaration

```swift
func setTitlePositionAdjustment(_ adjustment: UIOffset, for barMetrics: UIBarMetrics)
```

## Parameters

- `adjustment`: The title offset for `barMetrics`.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the position of a title (if any) within a bordered bar button.

## See Also

### Customizing the title placement

- [titlePositionAdjustment(for:)](titlepositionadjustment%28for_%29.md): Returns the title offset for specified bar metrics.

# setTitlePositionAdjustment:forBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title offset for specified bar metrics.

## Declaration

```objectivec
- (void) setTitlePositionAdjustment:(UIOffset) adjustment forBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `adjustment`: The title offset for `barMetrics`.
- `barMetrics`: Bar metrics.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the position of a title (if any) within a bordered bar button.

## See Also

### Customizing the title placement

- [titlePositionAdjustmentForBarMetrics:](titlepositionadjustment%28for_%29.md): Returns the title offset for specified bar metrics.
