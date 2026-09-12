> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfiguration/contentstyle](https://developer.apple.com/documentation/carplay/cpsessionconfiguration/contentstyle)

# contentStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The content style that the vehicle selects.

## Declaration

```swift
var contentStyle: CPContentStyle { get }
```

<a id="Discussion"></a>

## Discussion

The vehicle selects the content style according to the ambient light level. Your navigation app can use this value to determine the most appropriate style of map content to draw in its base view. The content style is independent of the user interface style, which controls light and dark mode.

## See Also

### Getting the Content Style

- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.

# contentStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The content style that the vehicle selects.

## Declaration

```objectivec
@property (nonatomic, readonly) CPContentStyle contentStyle;
```

<a id="Discussion"></a>

## Discussion

The vehicle selects the content style according to the ambient light level. Your navigation app can use this value to determine the most appropriate style of map content to draw in its base view. The content style is independent of the user interface style, which controls light and dark mode.

## See Also

### Getting the Content Style

- [CPContentStyle](../cpcontentstyle.md): The types of content style that the vehicle allows.
