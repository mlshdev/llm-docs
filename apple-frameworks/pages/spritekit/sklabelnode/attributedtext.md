> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklabelnode/attributedtext](https://developer.apple.com/documentation/spritekit/sklabelnode/attributedtext)

# attributedText (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The attributed string displayed by the label.

## Declaration

```swift
@NSCopying var attributedText: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

The following properties are ignored if attributedText is defined:

| text | The label favors the attributed string. |
| --- | --- |
| fontColor | Font color is defined by tags in the attributed string. |
| fontSize | Font size is defined by tags in the attributed string. |

## See Also

### Setting a Label’s Text

- [text](text.md): The string that the label node displays.

# attributedText (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The attributed string displayed by the label.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedText;
```

<a id="Discussion"></a>

## Discussion

The following properties are ignored if attributedText is defined:

| text | The label favors the attributed string. |
| --- | --- |
| fontColor | Font color is defined by tags in the attributed string. |
| fontSize | Font size is defined by tags in the attributed string. |

## See Also

### Setting a Label’s Text

- [text](text.md): The string that the label node displays.
