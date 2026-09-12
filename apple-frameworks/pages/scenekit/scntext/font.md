> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntext/font](https://developer.apple.com/documentation/scenekit/scntext/font)

# font (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The font that SceneKit uses to create geometry from the text.

## Declaration

```swift
var font: UIFont! { get set }
```

```swift
var font: NSFont! { get set }
```

<a id="Discussion"></a>

## Discussion

If the text geometry’s [string](string.md) property is an [NSString](../../foundation/nsstring.md) object, SceneKit uses this font to render the entire text. If the [string](string.md) property is an an [NSAttributedString](../../foundation/nsattributedstring.md) object, SceneKit uses this font for any portions of the string not containing style attributes.

The default font is Helvetica 36 point.

## See Also

### Managing the Geometry’s Text Content

- [string](string.md): The string object whose text the geometry represents.

# font (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font that SceneKit uses to create geometry from the text.

## Declaration

```objectivec
@property (nonatomic, retain, null_resettable) UIFont * font;
```

```objectivec
@property (nonatomic, retain, null_resettable) NSFont * font;
```

<a id="Discussion"></a>

## Discussion

If the text geometry’s [string](string.md) property is an [NSString](../../foundation/nsstring.md) object, SceneKit uses this font to render the entire text. If the [string](string.md) property is an an [NSAttributedString](../../foundation/nsattributedstring.md) object, SceneKit uses this font for any portions of the string not containing style attributes.

The default font is Helvetica 36 point.

## See Also

### Managing the Geometry’s Text Content

- [string](string.md): The string object whose text the geometry represents.
