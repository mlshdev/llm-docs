> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/configurationwithoutpointsizeandweight()](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/configurationwithoutpointsizeandweight())

# configurationWithoutPointSizeAndWeight() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a copy of the current symbol configuration object without point-size and weight information.

## Declaration

```swift
func configurationWithoutPointSizeAndWeight() -> Self
```

<a id="return-value"></a>

## Return Value

A new symbol configuration object without the specified information.

<a id="Discussion"></a>

## Discussion

This method sets the weight value in the new object to [UIImage.SymbolWeight.unspecified](../symbolweight/unspecified.md) and removes the point-size information.

## See Also

### Removing configuration attributes

- [configurationWithoutScale()](configurationwithoutscale%28%29.md): Returns a copy of the current symbol configuration object without scale information.
- [configurationWithoutTextStyle()](configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight()](configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.

# configurationWithoutPointSizeAndWeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a copy of the current symbol configuration object without point-size and weight information.

## Declaration

```objectivec
- (instancetype) configurationWithoutPointSizeAndWeight;
```

<a id="return-value"></a>

## Return Value

A new symbol configuration object without the specified information.

<a id="Discussion"></a>

## Discussion

This method sets the weight value in the new object to [UIImageSymbolWeightUnspecified](../symbolweight/unspecified.md) and removes the point-size information.

## See Also

### Removing configuration attributes

- [configurationWithoutScale](configurationwithoutscale%28%29.md): Returns a copy of the current symbol configuration object without scale information.
- [configurationWithoutTextStyle](configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight](configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.
