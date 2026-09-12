> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/configurationwithoutscale()](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/configurationwithoutscale())

# configurationWithoutScale() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a copy of the current symbol configuration object without scale information.

## Declaration

```swift
func configurationWithoutScale() -> Self
```

<a id="return-value"></a>

## Return Value

A new symbol configuration object without the specified information.

<a id="Discussion"></a>

## Discussion

This method sets the scale value in the new object to [UIImage.SymbolScale.unspecified](../symbolscale/unspecified.md).

## See Also

### Removing configuration attributes

- [configurationWithoutPointSizeAndWeight()](configurationwithoutpointsizeandweight%28%29.md): Returns a copy of the current symbol configuration object without point-size and weight information.
- [configurationWithoutTextStyle()](configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight()](configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.

# configurationWithoutScale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a copy of the current symbol configuration object without scale information.

## Declaration

```objectivec
- (instancetype) configurationWithoutScale;
```

<a id="return-value"></a>

## Return Value

A new symbol configuration object without the specified information.

<a id="Discussion"></a>

## Discussion

This method sets the scale value in the new object to [UIImageSymbolScaleUnspecified](../symbolscale/unspecified.md).

## See Also

### Removing configuration attributes

- [configurationWithoutPointSizeAndWeight](configurationwithoutpointsizeandweight%28%29.md): Returns a copy of the current symbol configuration object without point-size and weight information.
- [configurationWithoutTextStyle](configurationwithouttextstyle%28%29.md): Returns a copy of the current symbol configuration object without font text style information.
- [configurationWithoutWeight](configurationwithoutweight%28%29.md): Returns a copy of the current symbol configuration object without weight information.
