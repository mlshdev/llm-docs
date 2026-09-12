> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreencell/maskedcontentview](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell/maskedcontentview)

# maskedContentView (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The content view in focus.

## Declaration

```swift
var maskedContentView: UIView { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to modify the parallax effect applied on the cell and its content. Add any other UI elements to be included on the cell to this view.

This view fills the entire screen.

## See Also

### Accessing Cell Views

- [maskedBackgroundView](maskedbackgroundview.md): The background view that performs the parallax effect.

# maskedContentView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The content view in focus.

## Declaration

```objectivec
@property (nonatomic, readonly) UIView * maskedContentView;
```

<a id="Discussion"></a>

## Discussion

Use this property to modify the parallax effect applied on the cell and its content. Add any other UI elements to be included on the cell to this view.

This view fills the entire screen.

## See Also

### Accessing Cell Views

- [maskedBackgroundView](maskedbackgroundview.md): The background view that performs the parallax effect.
