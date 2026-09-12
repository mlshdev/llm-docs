> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/backgroundcolors](https://developer.apple.com/documentation/appkit/nscollectionview/backgroundcolors)

# backgroundColors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing the collection view’s background colors.

## Declaration

```swift
var backgroundColors: [NSColor]! { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSColor](../nscolor.md) objects, representing the colors to use when drawing the background grid. Specifying an empty array or `nil` causes the collection view to use the default colors returned by the [controlAlternatingRowBackgroundColors](../nscolor/controlalternatingrowbackgroundcolors.md) method.

When a background view is specified for the collection view, the colors in this property are ignored.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

# backgroundColors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

An array containing the collection view’s background colors.

## Declaration

```objectivec
@property (copy, null_resettable) NSArray<NSColor *> * backgroundColors;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [NSColor](../nscolor.md) objects, representing the colors to use when drawing the background grid. Specifying an empty array or `nil` causes the collection view to use the default colors returned by the [controlAlternatingRowBackgroundColors](../nscolor/controlalternatingrowbackgroundcolors.md) method.

When a background view is specified for the collection view, the colors in this property are ignored.

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundView](backgroundview.md): The background view placed behind all items and supplementary views.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.
