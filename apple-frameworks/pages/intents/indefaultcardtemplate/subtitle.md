> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indefaultcardtemplate/subtitle](https://developer.apple.com/documentation/intents/indefaultcardtemplate/subtitle)

# subtitle (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The subtitle displayed in the Siri watch face card.

## Declaration

```swift
var subtitle: String? { get set }
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

If you don’t provide a [subtitle](subtitle.md), the text from [title](title.md) will wrap to fill two lines.

## See Also

### Managing Template Information

- [title](title.md): The title displayed in the Siri watch face card.
- [image](image.md): The image displayed in the Siri watch face card.

# subtitle (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The subtitle displayed in the Siri watch face card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * subtitle;
```

```objectivec
@property (atomic, copy, nullable) NSString * subtitle;
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

If you don’t provide a [subtitle](subtitle.md), the text from [title](title.md) will wrap to fill two lines.

## See Also

### Managing Template Information

- [title](title.md): The title displayed in the Siri watch face card.
- [image](image.md): The image displayed in the Siri watch face card.
