> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/accessibilityspeechpitch](https://developer.apple.com/documentation/foundation/nsattributedstring/key/accessibilityspeechpitch)

# accessibilitySpeechPitch

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key that indicates the pitch to apply to spoken content.

## Declaration

```swift
nonisolated static let accessibilitySpeechPitch: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../nsnumber.md) object that contains a floating-point value in the range of `0.0` to `2.0`. The value indicates whether to speak the text with a higher or lower pitch than the default. The default value for this attribute is `1.0`, which indicates a normal pitch. Values between `0.0` and `1.0` result in a lower pitch, and values between `1.0` and `2.0` result in a higher pitch.

## See Also

### Getting accessibility attribute keys

- [accessibilityAlignment](accessibilityalignment.md)
- [accessibilityAnnotationTextAttribute](accessibilityannotationtextattribute.md)
- [accessibilityAttachment](accessibilityattachment.md): Deprecated. Text attachment (`id`).
- [accessibilityAutocorrected](accessibilityautocorrected.md): Autocorrected text (`NSNumber` as a Boolean value).
- [accessibilityBackgroundColor](accessibilitybackgroundcolor.md): Text background color (`CGColorRef`).
- [accessibilityCustomText](accessibilitycustomtext.md)
- [accessibilityFont](accessibilityfont.md): Font keys (`NSDictionary`).
- [accessibilityFontBoldAttribute](accessibilityfontboldattribute.md)
- [accessibilityFontItalicAttribute](accessibilityfontitalicattribute.md)
- [accessibilityForegroundColor](accessibilityforegroundcolor.md): Text foreground color (`CGColorRef`).
- [accessibilityLanguage](accessibilitylanguage.md)
- [accessibilityLink](accessibilitylink.md): Text link (`id`).
- [accessibilityListItemIndex](accessibilitylistitemindex.md)
- [accessibilityListItemLevel](accessibilitylistitemlevel.md)
- [accessibilityListItemPrefix](accessibilitylistitemprefix.md)
