> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/contentframe](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/contentframe)

# contentFrame (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The frame rectangle used to display your app’s content.

## Declaration

```swift
var contentFrame: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is specified in points. This rectangle may be different than the screen bounds.

## See Also

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): Leading and trailing insets that represent the minimum layout margins for text elements.

# contentFrame (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The frame rectangle used to display your app’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect contentFrame;
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property is specified in points. This rectangle may be different than the screen bounds.

## See Also

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): Leading and trailing insets that represent the minimum layout margins for text elements.
