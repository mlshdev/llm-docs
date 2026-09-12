> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctfontvariationaxishiddenkey](https://developer.apple.com/documentation/coretext/kctfontvariationaxishiddenkey)

# kCTFontVariationAxisHiddenKey (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key to find out if the axis is hidden.

## Declaration

```swift
let kCTFontVariationAxisHiddenKey: CFString
```

<a id="Discussion"></a>

## Discussion

This key contains a [CFBoolean](../corefoundation/cfboolean.md) value that is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) when the font designer recommends the axis not be exposed directly to end users in application interfaces.

Reasons for setting this flag might include that the axis is intended only for programmatic interaction, or is intended for font-internal use by the font developer.

## See Also

### Constants

- [kCTFontVariationAxisIdentifierKey](kctfontvariationaxisidentifierkey.md): Key to get the variation axis identifier.
- [kCTFontVariationAxisMinimumValueKey](kctfontvariationaxisminimumvaluekey.md): Key to get the variation axis minimum value.
- [kCTFontVariationAxisMaximumValueKey](kctfontvariationaxismaximumvaluekey.md): Key to get the variation axis maximum value.
- [kCTFontVariationAxisDefaultValueKey](kctfontvariationaxisdefaultvaluekey.md): Key to get the variation axis default value.
- [kCTFontVariationAxisNameKey](kctfontvariationaxisnamekey.md): Key to get the localized variation axis name string.

# kCTFontVariationAxisHiddenKey (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key to find out if the axis is hidden.

## Declaration

```objectivec
extern CFStringRef const kCTFontVariationAxisHiddenKey;
```

<a id="Discussion"></a>

## Discussion

This key contains a [CFBooleanRef](../corefoundation/cfboolean.md) value that is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) when the font designer recommends the axis not be exposed directly to end users in application interfaces.

Reasons for setting this flag might include that the axis is intended only for programmatic interaction, or is intended for font-internal use by the font developer.

## See Also

### Constants

- [kCTFontVariationAxisIdentifierKey](kctfontvariationaxisidentifierkey.md): Key to get the variation axis identifier.
- [kCTFontVariationAxisMinimumValueKey](kctfontvariationaxisminimumvaluekey.md): Key to get the variation axis minimum value.
- [kCTFontVariationAxisMaximumValueKey](kctfontvariationaxismaximumvaluekey.md): Key to get the variation axis maximum value.
- [kCTFontVariationAxisDefaultValueKey](kctfontvariationaxisdefaultvaluekey.md): Key to get the variation axis default value.
- [kCTFontVariationAxisNameKey](kctfontvariationaxisnamekey.md): Key to get the localized variation axis name string.
