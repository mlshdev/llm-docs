> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvlockupview/contentsize

# contentSize (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The size of the content view.

## Declaration

```swift
var contentSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to explicitly set the size of the content view. If [frame](../../uikit/uiview/frame.md) is explicitly set, it takes precedence over `contentSize`.

## See Also

### Setting view size

- [contentViewInsets](contentviewinsets.md): The spacing between the content view and its peer and containing views.
- [focusSizeIncrease](focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.

# contentSize (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

The size of the content view.

## Declaration

```objectivec
@property (nonatomic, assign) CGSize contentSize;
```

<a id="Discussion"></a>

## Discussion

Use this property to explicitly set the size of the content view. If [frame](../../uikit/uiview/frame.md) is explicitly set, it takes precedence over `contentSize`.

## See Also

### Setting view size

- [contentViewInsets](contentviewinsets.md): The spacing between the content view and its peer and containing views.
- [focusSizeIncrease](focussizeincrease.md): The inset or outset values specifying your content’s size increase when in focus.
