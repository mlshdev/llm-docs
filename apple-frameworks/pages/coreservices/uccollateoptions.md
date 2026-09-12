> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uccollateoptions](https://developer.apple.com/documentation/coreservices/uccollateoptions)

# UCCollateOptions (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies options for Unicode string comparison.

## Declaration

```swift
typealias UCCollateOptions = UInt32
```

<a id="discussion"></a>

## Discussion

For a description of the `UCCollateOptions` values, see [Standard Options Mask](carbon_core/unicode_utilities/1390444-standard_options_mask.md).

## Topics

### Constants

- [kUCCollateComposeInsensitiveMask](kuccollatecomposeinsensitivemask.md)
- [kUCCollateWidthInsensitiveMask](kuccollatewidthinsensitivemask.md)
- [kUCCollateCaseInsensitiveMask](kuccollatecaseinsensitivemask.md): If the corresponding bit is set, then uppercase and titlecase characters are treated as equivalent to the corresponding lowercase characters.
- [kUCCollateDiacritInsensitiveMask](kuccollatediacritinsensitivemask.md): If the corresponding bit is set, then characters with diacritics are treated as equivalent to the corresponding characters without diacritics.
- [kUCCollatePunctuationSignificantMask](kuccollatepunctuationsignificantmask.md)
- [kUCCollateDigitsOverrideMask](kuccollatedigitsoverridemask.md)
- [kUCCollateDigitsAsNumberMask](kuccollatedigitsasnumbermask.md)

# UCCollateOptions (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies options for Unicode string comparison.

## Declaration

```objectivec
typedef UInt32 UCCollateOptions;
```

<a id="discussion"></a>

## Discussion

For a description of the `UCCollateOptions` values, see [Standard Options Mask](1390444-standard_options_mask.md).

## Topics

### Constants

- [kUCCollateComposeInsensitiveMask](1390427-anonymous/kuccollatecomposeinsensitivemask.md)
- [kUCCollateWidthInsensitiveMask](1390427-anonymous/kuccollatewidthinsensitivemask.md)
- [kUCCollateCaseInsensitiveMask](1390427-anonymous/kuccollatecaseinsensitivemask.md): If the corresponding bit is set, then uppercase and titlecase characters are treated as equivalent to the corresponding lowercase characters.
- [kUCCollateDiacritInsensitiveMask](1390427-anonymous/kuccollatediacritinsensitivemask.md): If the corresponding bit is set, then characters with diacritics are treated as equivalent to the corresponding characters without diacritics.
- [kUCCollatePunctuationSignificantMask](1390427-anonymous/kuccollatepunctuationsignificantmask.md)
- [kUCCollateDigitsOverrideMask](1390427-anonymous/kuccollatedigitsoverridemask.md)
- [kUCCollateDigitsAsNumberMask](1390427-anonymous/kuccollatedigitsasnumbermask.md)
