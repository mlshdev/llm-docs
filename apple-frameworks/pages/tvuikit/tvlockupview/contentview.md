> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupview/contentview](https://developer.apple.com/documentation/tvuikit/tvlockupview/contentview)

# contentView (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The main view for the lockup.

## Declaration

```swift
var contentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Add subviews to the `contentView`. Don’t add views direcly to the lockup view.

## See Also

### Adding subviews

- [headerView](headerview.md): A view containing header information.
- [footerView](footerview.md): A view containing footer information.

# contentView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The main view for the lockup.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIView * contentView;
```

<a id="Discussion"></a>

## Discussion

Add subviews to the `contentView`. Don’t add views direcly to the lockup view.

## See Also

### Adding subviews

- [headerView](headerview.md): A view containing header information.
- [footerView](footerview.md): A view containing footer information.
