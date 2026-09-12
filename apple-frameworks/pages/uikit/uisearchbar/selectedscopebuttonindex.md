> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/selectedscopebuttonindex](https://developer.apple.com/documentation/uikit/uisearchbar/selectedscopebuttonindex)

# selectedScopeButtonIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index of the selected scope button.

## Declaration

```swift
var selectedScopeButtonIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The indexes of the scope buttons are determined by the indexes of the strings in [scopeButtonTitles](scopebuttontitles.md).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScope(\_:animated:)](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.

# selectedScopeButtonIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index of the selected scope button.

## Declaration

```objectivec
@property (nonatomic) NSInteger selectedScopeButtonIndex;
```

<a id="Discussion"></a>

## Discussion

The indexes of the scope buttons are determined by the indexes of the strings in [scopeButtonTitles](scopebuttontitles.md).

## See Also

### Configuring scope bar buttons

- [scopeButtonTitles](scopebuttontitles.md): An array of strings indicating the titles of the scope buttons.
- [showsScopeBar](showsscopebar.md): Specifies whether the scope bar is displayed.
- [setShowsScopeBar:animated:](setshowsscope%28__animated_%29.md): Specifies whether the scope bar is displayed, optionally using an animation.
