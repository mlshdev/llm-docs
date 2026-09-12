> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/shadowoffset](https://developer.apple.com/documentation/uikit/uilabel/shadowoffset)

# shadowOffset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow offset, in points, for the text.

## Declaration

```swift
var shadowOffset: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The shadow color must be not be `nil` for this property to have any effect. The default offset size is `(0, -1)`, which indicates a shadow one point above the text. A label draws its text shadows with the specified offset and color and no blurring.

## See Also

### Drawing a shadow

- [shadowColor](shadowcolor.md): The shadow color of the text.

# shadowOffset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The shadow offset, in points, for the text.

## Declaration

```objectivec
@property (nonatomic) CGSize shadowOffset;
```

<a id="Discussion"></a>

## Discussion

The shadow color must be not be `nil` for this property to have any effect. The default offset size is `(0, -1)`, which indicates a shadow one point above the text. A label draws its text shadows with the specified offset and color and no blurring.

## See Also

### Drawing a shadow

- [shadowColor](shadowcolor.md): The shadow color of the text.
