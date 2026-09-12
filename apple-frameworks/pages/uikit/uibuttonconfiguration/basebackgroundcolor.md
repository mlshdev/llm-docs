> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibuttonconfiguration/basebackgroundcolor](https://developer.apple.com/documentation/uikit/uibuttonconfiguration/basebackgroundcolor)

# baseBackgroundColor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The untransformed color for background views.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) UIColor * baseBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

The button configuration may transform the base color before applying it to background elements.

## See Also

### Configuring button colors

- [baseForegroundColor](baseforegroundcolor.md): The untransformed color for foreground views.
