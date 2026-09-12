> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode/numberoflines](https://developer.apple.com/documentation/spritekit/sklabelnode/numberoflines)

# numberOfLines (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Determines the number of lines to draw.

## Declaration

```swift
var numberOfLines: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is 1 (a single line). A value of 0 in interpreted as an unlimited number of lines. If the height of the text reaches the number of lines, the text will be truncated using the line break mode.

## See Also

### Defining a Label’s Line-Breaking Behavior

- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): The width, in screen points, after which line-break mode should be applied.
- [lineBreakMode](linebreakmode.md): Determines the line-break mode for multiple lines.

# numberOfLines (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Determines the number of lines to draw.

## Declaration

```objectivec
@property (nonatomic) NSInteger numberOfLines;
```

<a id="Discussion"></a>

## Discussion

The default value is 1 (a single line). A value of 0 in interpreted as an unlimited number of lines. If the height of the text reaches the number of lines, the text will be truncated using the line break mode.

## See Also

### Defining a Label’s Line-Breaking Behavior

- [preferredMaxLayoutWidth](preferredmaxlayoutwidth.md): The width, in screen points, after which line-break mode should be applied.
- [lineBreakMode](linebreakmode.md): Determines the line-break mode for multiple lines.
