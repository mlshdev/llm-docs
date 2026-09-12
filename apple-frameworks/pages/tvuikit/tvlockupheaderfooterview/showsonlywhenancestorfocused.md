> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupheaderfooterview/showsonlywhenancestorfocused](https://developer.apple.com/documentation/tvuikit/tvlockupheaderfooterview/showsonlywhenancestorfocused)

# showsOnlyWhenAncestorFocused (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value indicating whether titles and subtitles are displayed when a lockup view isn’t in focus.

## Declaration

```swift
var showsOnlyWhenAncestorFocused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to `FALSE` to display header and footer information while the lockup view is not in focus. Header and footer information is always shown when a lockup view is in focus, regardless of this property’s value.

# showsOnlyWhenAncestorFocused (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value indicating whether titles and subtitles are displayed when a lockup view isn’t in focus.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsOnlyWhenAncestorFocused;
```

<a id="Discussion"></a>

## Discussion

Set this value to `FALSE` to display header and footer information while the lockup view is not in focus. Header and footer information is always shown when a lockup view is in focus, regardless of this property’s value.
