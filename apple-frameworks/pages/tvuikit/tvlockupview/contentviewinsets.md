> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupview/contentviewinsets](https://developer.apple.com/documentation/tvuikit/tvlockupview/contentviewinsets)

# contentViewInsets (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The spacing between the content view and its peer and containing views.

## Declaration

```swift
var contentViewInsets: NSDirectionalEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use negative values for positive spacing. The [top](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/top) and [bottom](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/bottom) values represent the spacing between the content view and the header and footer views, respectively. The [leading](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/leading) and [trailing](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/trailing) values represent the spacing between the content view and the lockup view. The default value is [NSDirectionalEdgeInsetsZero](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsetszero).

## See Also

### Setting view size

- [contentSize](contentsize.md): The size of the content view.
- [focusSizeIncrease](focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.

# contentViewInsets (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The spacing between the content view and its peer and containing views.

## Declaration

```objectivec
@property (nonatomic, assign) NSDirectionalEdgeInsets contentViewInsets;
```

<a id="Discussion"></a>

## Discussion

Use negative values for positive spacing. The [top](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/top) and [bottom](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/bottom) values represent the spacing between the content view and the header and footer views, respectively. The [leading](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/leading) and [trailing](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsets/trailing) values represent the spacing between the content view and the lockup view. The default value is [NSDirectionalEdgeInsetsZero](https://developer.apple.com/documentation/appkit/nsdirectionaledgeinsetszero).

## See Also

### Setting view size

- [contentSize](contentsize.md): The size of the content view.
- [focusSizeIncrease](focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.
