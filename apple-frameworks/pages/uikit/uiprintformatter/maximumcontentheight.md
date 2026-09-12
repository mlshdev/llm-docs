> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintformatter/maximumcontentheight](https://developer.apple.com/documentation/uikit/uiprintformatter/maximumcontentheight)

# maximumContentHeight (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum height of the content area.

## Declaration

```swift
var maximumContentHeight: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` uses this value to determine where the content rectangle begins on the first page. It compares the value of this property with the printing rectangle’s height minus the header and footer heights and the top inset value (of [contentInsets](contentinsets.md)); it uses the lower of the two values. The default value of this property is the maximum float value.

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.

# maximumContentHeight (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum height of the content area.

## Declaration

```objectivec
@property (nonatomic) CGFloat maximumContentHeight;
```

<a id="Discussion"></a>

## Discussion

`UIPrintFormatter` uses this value to determine where the content rectangle begins on the first page. It compares the value of this property with the printing rectangle’s height minus the header and footer heights and the top inset value (of [contentInsets](contentinsets.md)); it uses the lower of the two values. The default value of this property is the maximum float value.

## See Also

### Laying out the content

- [perPageContentInsets](perpagecontentinsets.md): The margins for each printed page.
- [maximumContentWidth](maximumcontentwidth.md): The maximum width of the content area.
- [contentInsets](contentinsets.md): Deprecated. The distances the edges of content are inset from the printing rectangle.
