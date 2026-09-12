> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupview/focussizeincrease](https://developer.apple.com/documentation/tvuikit/tvlockupview/focussizeincrease)

# focusSizeIncrease (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The inset or outset values specifying your content’s size increase when in focus.

## Declaration

```swift
var focusSizeIncrease: NSDirectionalEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

Use negative values for a size increase. The values contribute to the lockup view’s intrinsic content size and guide layout update when focus state changes.

## See Also

### Setting view size

- [contentSize](contentsize.md): The size of the content view.
- [contentViewInsets](contentviewinsets.md): The spacing between the content view and its peer and containing views.

# focusSizeIncrease (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The inset or outset values specifying your content’s size increase when in focus.

## Declaration

```objectivec
@property (nonatomic, assign) NSDirectionalEdgeInsets focusSizeIncrease;
```

<a id="Discussion"></a>

## Discussion

Use negative values for a size increase. The values contribute to the lockup view’s intrinsic content size and guide layout update when focus state changes.

## See Also

### Setting view size

- [contentSize](contentsize.md): The size of the content view.
- [contentViewInsets](contentviewinsets.md): The spacing between the content view and its peer and containing views.
