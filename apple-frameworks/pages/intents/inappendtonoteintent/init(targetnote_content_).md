> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintent/init(targetnote:content:)](https://developer.apple.com/documentation/intents/inappendtonoteintent/init(targetnote:content:))

# init(targetNote:content:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified note and content.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(targetNote: INNote?, content: INNoteContent?)
```

## Parameters

- `targetNote`: The note to receive the additional content.
- `content`: The content to add to the note. You may specify text or image content.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to append content to a note. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithTargetNote:content: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Initializes the intent object with the specified note and content.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithTargetNote:(INNote *) targetNote content:(INNoteContent *) content;
```

## Parameters

- `targetNote`: The note to receive the additional content.
- `content`: The content to add to the note. You may specify text or image content.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to append content to a note. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
