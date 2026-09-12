> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/accessibilityspeechqueueannouncement](https://developer.apple.com/documentation/foundation/nsattributedstring/key/accessibilityspeechqueueannouncement)

# accessibilitySpeechQueueAnnouncement

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+

A key that indicates whether to queue an announcement behind existing speech or to interrupt it.

## Declaration

```swift
nonisolated static let accessibilitySpeechQueueAnnouncement: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../nsnumber.md) object that the system interprets as a Boolean value. When the value is [true](https://developer.apple.com/documentation/swift/true), the system queues the announcement behind existing speech. When the value is [false](https://developer.apple.com/documentation/swift/false), the announcement interrupts the existing speech. The default behavior is to interrupt existing speech.

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
