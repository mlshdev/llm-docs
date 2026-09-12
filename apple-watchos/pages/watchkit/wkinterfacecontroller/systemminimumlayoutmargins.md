> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/systemminimumlayoutmargins](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/systemminimumlayoutmargins)

# systemMinimumLayoutMargins (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

Leading and trailing insets that represent the minimum layout margins for text elements.

## Declaration

```swift
var systemMinimumLayoutMargins: NSDirectionalEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

The 40 mm and 44 mm watches have rounded corners. As a result, the items in the status bar do not extend all the way to the edge of the screen.

The system provides the minimum layout margins to help you align your text content with the status bar. The system’s built-in containers and controls take the minimum layout margins into account automatically when laying out your interface; however, if you build a custom user interface with SpriteKit or SceneKit, check the [contentSafeAreaInsets](contentsafeareainsets.md) and [systemMinimumLayoutMargins](systemminimumlayoutmargins.md), and lay out your interface accordingly.

The system sets the [systemMinimumLayoutMargins](systemminimumlayoutmargins.md) property just before it calls the controller’s [didAppear()](didappear%28%29.md) method. Before calling [didAppear()](didappear%28%29.md), the property may contain an invalid value.

## See Also

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [contentFrame](contentframe.md): The frame rectangle used to display your app’s content.

# systemMinimumLayoutMargins (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

Leading and trailing insets that represent the minimum layout margins for text elements.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDirectionalEdgeInsets systemMinimumLayoutMargins;
```

<a id="Discussion"></a>

## Discussion

The 40 mm and 44 mm watches have rounded corners. As a result, the items in the status bar do not extend all the way to the edge of the screen.

The system provides the minimum layout margins to help you align your text content with the status bar. The system’s built-in containers and controls take the minimum layout margins into account automatically when laying out your interface; however, if you build a custom user interface with SpriteKit or SceneKit, check the [contentSafeAreaInsets](contentsafeareainsets.md) and [systemMinimumLayoutMargins](systemminimumlayoutmargins.md), and lay out your interface accordingly.

The system sets the [systemMinimumLayoutMargins](systemminimumlayoutmargins.md) property just before it calls the controller’s [didAppear](didappear%28%29.md) method. Before calling [didAppear](didappear%28%29.md), the property may contain an invalid value.

## See Also

### Respecting safe areas and layout margins

- [contentSafeAreaInsets](contentsafeareainsets.md): Insets that define the area where it’s safe to display content on the screen.
- [contentFrame](contentframe.md): The frame rectangle used to display your app’s content.
