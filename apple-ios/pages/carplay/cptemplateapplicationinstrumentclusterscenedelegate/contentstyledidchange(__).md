> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate/contentstyledidchange(_:)

# contentStyleDidChange(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells your app that the suggested content style for this scene changed.

## Declaration

```swift
optional func contentStyleDidChange(_ contentStyle: UIUserInterfaceStyle)
```

## Parameters

- `contentStyle`: The new content style to apply to your instrument cluster interface.

<a id="discussion"></a>

## Discussion

Refresh your instrument cluster interface as needed to match the specified content style. For more information about managing interface style changes for your content, see [Supporting Dark Mode in your interface](https://developer.apple.com/documentation/uikit/supporting-dark-mode-in-your-interface).

# contentStyleDidChange: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells your app that the suggested content style for this scene changed.

## Declaration

```objectivec
- (void) contentStyleDidChange:(UIUserInterfaceStyle) contentStyle;
```

## Parameters

- `contentStyle`: The new content style to apply to your instrument cluster interface.

<a id="discussion"></a>

## Discussion

Refresh your instrument cluster interface as needed to match the specified content style. For more information about managing interface style changes for your content, see [Supporting Dark Mode in your interface](https://developer.apple.com/documentation/uikit/supporting-dark-mode-in-your-interface).
