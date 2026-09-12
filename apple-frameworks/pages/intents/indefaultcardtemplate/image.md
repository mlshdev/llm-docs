> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indefaultcardtemplate/image](https://developer.apple.com/documentation/intents/indefaultcardtemplate/image)

# image (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The image displayed in the Siri watch face card.

## Declaration

```swift
@NSCopying var image: INImage? { get set }
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

The image should be a square image. [INDefaultCardTemplate](../indefaultcardtemplate.md) automatically scales the image to fit and rounds the image corners, and the card template supports image transparency.

## See Also

### Managing Template Information

- [title](title.md): The title displayed in the Siri watch face card.
- [subtitle](subtitle.md): The subtitle displayed in the Siri watch face card.

# image (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The image displayed in the Siri watch face card.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INImage * image;
```

```objectivec
@property (atomic, copy, nullable) INImage * image;
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

The image should be a square image. [INDefaultCardTemplate](../indefaultcardtemplate.md) automatically scales the image to fit and rounds the image corners, and the card template supports image transparency.

## See Also

### Managing Template Information

- [title](title.md): The title displayed in the Siri watch face card.
- [subtitle](subtitle.md): The subtitle displayed in the Siri watch face card.
