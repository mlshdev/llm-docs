> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedetailsheader/wantsadaptivebackgroundstyle](https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/wantsadaptivebackgroundstyle)

# wantsAdaptiveBackgroundStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that determines whether to use a custom background style.

## Declaration

```swift
var wantsAdaptiveBackgroundStyle: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to YES, the header will use a custom background style derived from the thumbnail image. This creates an adaptive background that automatically generates light and dark mode variants.

When set to NO (default), the header uses the standard CarPlay background.

The custom background style uses perceptually-aware color transformation to create visually harmonious backgrounds that adapt to the user’s interface style preference.

# adaptiveBackgroundStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

A Boolean value that determines whether to use a custom background style.

## Declaration

```objectivec
@property (nonatomic, assign, getter=wantsAdaptiveBackgroundStyle) BOOL adaptiveBackgroundStyle;
```

<a id="discussion"></a>

## Discussion

When set to YES, the header will use a custom background style derived from the thumbnail image. This creates an adaptive background that automatically generates light and dark mode variants.

When set to NO (default), the header uses the standard CarPlay background.

The custom background style uses perceptually-aware color transformation to create visually harmonious backgrounds that adapt to the user’s interface style preference.
