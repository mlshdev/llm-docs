> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/maximumcontentwidth](https://developer.apple.com/documentation/uikit/uiprintformatter/maximumcontentwidth)

# maximumContentWidth (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum width of the content area.

## Declaration

```swift
var maximumContentWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` uses this value to determine the maximum width of the content rectangle. It compares the value of this property with the printing rectangle’s width minus the left and right inset values and uses the lower of the two. The default value of this property is the maximum float value.

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.

# maximumContentWidth (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum width of the content area.

## Declaration

```objectivec
@property (nonatomic) CGFloat maximumContentWidth;
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` uses this value to determine the maximum width of the content rectangle. It compares the value of this property with the printing rectangle’s width minus the left and right inset values and uses the lower of the two. The default value of this property is the maximum float value.

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentHeight](maximumcontentheight.md): The maximum height of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.
