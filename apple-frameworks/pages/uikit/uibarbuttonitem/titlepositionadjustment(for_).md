> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/titlepositionadjustment(for:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/titlepositionadjustment(for:))

# titlePositionAdjustment(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title offset for specified bar metrics.

## Declaration

```swift
func titlePositionAdjustment(for barMetrics: UIBarMetrics) -> UIOffset
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The title offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the position of a title (if any) within a bordered bar button.

## See Also

### Customizing the title placement

- [setTitlePositionAdjustment(\_:for:)](settitlepositionadjustment%28__for_%29.md): Sets the title offset for specified bar metrics.

# titlePositionAdjustmentForBarMetrics: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title offset for specified bar metrics.

## Declaration

```objectivec
- (UIOffset) titlePositionAdjustmentForBarMetrics:(UIBarMetrics) barMetrics;
```

## Parameters

- `barMetrics`: Bar metrics.

<a id="return-value"></a>

## Return Value

The title offset for `barMetrics`.

<a id="Discussion"></a>

## Discussion

This offset is used to adjust the position of a title (if any) within a bordered bar button.

## See Also

### Customizing the title placement

- [setTitlePositionAdjustment:forBarMetrics:](settitlepositionadjustment%28__for_%29.md): Sets the title offset for specified bar metrics.
