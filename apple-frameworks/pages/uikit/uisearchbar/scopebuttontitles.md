> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchbar/scopebuttontitles

# scopeButtonTitles (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of strings indicating the titles of the scope buttons.

## Declaration

```swift
var scopeButtonTitles: [String]? { get set }
```

<a id="Discussion"></a>

## Discussion

The order of the strings in the array indicates the order that the corresponding buttons will be displayed, from left to right. The index in the array corresponds to the index used in [selectedScopeButtonIndex](selectedscopebuttonindex.md).

## See Also

### Configuring scope bar buttons

- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScope(\_:animated:)](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.

# scopeButtonTitles (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of strings indicating the titles of the scope buttons.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * scopeButtonTitles;
```

<a id="Discussion"></a>

## Discussion

The order of the strings in the array indicates the order that the corresponding buttons will be displayed, from left to right. The index in the array corresponds to the index used in [selectedScopeButtonIndex](selectedscopebuttonindex.md).

## See Also

### Configuring scope bar buttons

- [selectedScopeButtonIndex](selectedscopebuttonindex.md): The index of the selected scope button.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScopeBar:animated:](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.
