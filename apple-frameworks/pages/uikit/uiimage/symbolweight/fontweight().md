> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolweight/fontweight()](https://developer.apple.com/documentation/uikit/uiimage/symbolweight/fontweight())

# fontWeight() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font weight for the specified symbol weight.

## Declaration

```swift
func fontWeight() -> UIFont.Weight
```

<a id="return-value"></a>

## Return Value

The [UIFont.Weight](../../uifont/weight.md) value that matches the specified symbol weight.

# UIFontWeightForImageSymbolWeight (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The font weight for the specified symbol weight.

## Declaration

```objectivec
extern UIFontWeight UIFontWeightForImageSymbolWeight(UIImageSymbolWeight symbolWeight);
```

## Parameters

- `symbolWeight`: The symbol weight whose font weight you want.

<a id="return-value"></a>

## Return Value

The [UIFontWeight](../../uifont/weight.md) value that matches the specified symbol weight.
