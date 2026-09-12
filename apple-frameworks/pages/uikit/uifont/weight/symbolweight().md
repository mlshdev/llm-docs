> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifont/weight/symbolweight()](https://developer.apple.com/documentation/uikit/uifont/weight/symbolweight())

# symbolWeight() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides the corresponding symbol weight for this font weight.

## Declaration

```swift
func symbolWeight() -> UIImage.SymbolWeight
```

<a id="return-value"></a>

## Return Value

The [UIImage.SymbolWeight](../../uiimage/symbolweight.md) that most closely coordinates with the provided font weight.

<a id="Discussion"></a>

## Discussion

When placing symbols adjacent to text, use this method to find the appropriate symbol weight to match the weight of the text. Similarly, if you want to display a symbol with a particular weight, you can use [fontWeight()](../../uiimage/symbolweight/fontweight%28%29.md) to look up the matching font weight for adjacent text.

# UIImageSymbolWeightForFontWeight (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides the corresponding symbol weight for this font weight.

## Declaration

```objectivec
extern UIImageSymbolWeight UIImageSymbolWeightForFontWeight(UIFontWeight fontWeight);
```

## Parameters

- `fontWeight`: The font weight of the text.

<a id="return-value"></a>

## Return Value

The [UIImageSymbolWeight](../../uiimage/symbolweight.md) that most closely coordinates with the provided font weight.

<a id="Discussion"></a>

## Discussion

When placing symbols adjacent to text, use this method to find the appropriate symbol weight to match the weight of the text. Similarly, if you want to display a symbol with a particular weight, you can use [UIFontWeightForImageSymbolWeight](../../uiimage/symbolweight/fontweight%28%29.md) to look up the matching font weight for adjacent text.
