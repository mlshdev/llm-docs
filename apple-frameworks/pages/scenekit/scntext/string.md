> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/string](https://developer.apple.com/documentation/scenekit/scntext/string)

# string (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The string object whose text the geometry represents.

## Declaration

```swift
var string: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

You can supply text as an [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) object. When you use an [NSString](../../foundation/nsstring.md) object, the text geometry’s properties determine the style of the entire body of text. You can use an [NSAttributedString](../../foundation/nsattributedstring.md) object to provide a body of text containing multiple styles, in which case the text geometry’s properties define the default style for portions of the string without style attributes.

The default value of this property is `nil`, which creates an empty text geometry.

## See Also

### Managing the Geometry’s Text Content

- [font](font.md): The font that SceneKit uses to create geometry from the text.

# string (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The string object whose text the geometry represents.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id string;
```

<a id="Discussion"></a>

## Discussion

You can supply text as an [NSString](../../foundation/nsstring.md) or [NSAttributedString](../../foundation/nsattributedstring.md) object. When you use an [NSString](../../foundation/nsstring.md) object, the text geometry’s properties determine the style of the entire body of text. You can use an [NSAttributedString](../../foundation/nsattributedstring.md) object to provide a body of text containing multiple styles, in which case the text geometry’s properties define the default style for portions of the string without style attributes.

The default value of this property is `nil`, which creates an empty text geometry.

## See Also

### Managing the Geometry’s Text Content

- [font](font.md): The font that SceneKit uses to create geometry from the text.
