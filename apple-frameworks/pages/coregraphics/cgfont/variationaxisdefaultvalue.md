> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/variationaxisdefaultvalue](https://developer.apple.com/documentation/coregraphics/cgfont/variationaxisdefaultvalue)

# variationAxisDefaultValue (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The key used to obtain the default variation axis value from a variation axis dictionary.

## Declaration

```swift
class let variationAxisDefaultValue: CFString
```

<a id="Discussion"></a>

## Discussion

The value obtained with this key is a [CFNumber](../../corefoundation/cfnumber.md) that specifies the default value of the variation axis.

## See Also

### Constants

- [variationAxisName](variationaxisname.md): The key used to obtain the variation axis name from a variation axis dictionary.
- [variationAxisMinValue](variationaxisminvalue.md): The key used to obtain the minimum variation axis value from a variation axis dictionary.
- [variationAxisMaxValue](variationaxismaxvalue.md): The key used to obtain the maximum variation axis value from a variation axis dictionary.

# kCGFontVariationAxisDefaultValue (Objective-C)

**Framework:** Core Graphics  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The key used to obtain the default variation axis value from a variation axis dictionary.

## Declaration

```objectivec
extern CFStringRef const kCGFontVariationAxisDefaultValue;
```

<a id="Discussion"></a>

## Discussion

The value obtained with this key is a [CFNumberRef](../../corefoundation/cfnumber.md) that specifies the default value of the variation axis.

## See Also

### Constants

- [kCGFontVariationAxisName](variationaxisname.md): The key used to obtain the variation axis name from a variation axis dictionary.
- [kCGFontVariationAxisMinValue](variationaxisminvalue.md): The key used to obtain the minimum variation axis value from a variation axis dictionary.
- [kCGFontVariationAxisMaxValue](variationaxismaxvalue.md): The key used to obtain the maximum variation axis value from a variation axis dictionary.
