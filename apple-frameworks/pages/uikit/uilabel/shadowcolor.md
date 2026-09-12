> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/shadowcolor](https://developer.apple.com/documentation/uikit/uilabel/shadowcolor)

# shadowColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow color of the text.

## Declaration

```swift
var shadowColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`, which indicates that the text has no shadow. In addition to this property, you may also want to change the default shadow offset by modifying the [shadowOffset](shadowoffset.md) property. A label draws its text shadows with the specified offset and color and no blurring.

## See Also

### Drawing a shadow

- [shadowOffset](shadowoffset.md): The shadow offset, in points, for the text.

# shadowColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow color of the text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * shadowColor;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is `nil`, which indicates that the text has no shadow. In addition to this property, you may also want to change the default shadow offset by modifying the [shadowOffset](shadowoffset.md) property. A label draws its text shadows with the specified offset and color and no blurring.

## See Also

### Drawing a shadow

- [shadowOffset](shadowoffset.md): The shadow offset, in points, for the text.
