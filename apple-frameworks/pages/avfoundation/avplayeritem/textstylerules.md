> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/textstylerules](https://developer.apple.com/documentation/avfoundation/avplayeritem/textstylerules)

# textStyleRules (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An array of text style rules that specify the formatting and presentation of Web Video Text Tracks (WebVTT) subtitles.

## Declaration

```swift
nonisolated var textStyleRules: [AVTextStyleRule]? { get set }
```

<a id="Discussion"></a>

## Discussion

Text style rules apply only to WebVTT subtitles. They don’t apply to other subtitle formats and legible text.

## See Also

### Accessing text style rules

- [AVTextStyleRule](../avtextstylerule.md): An object that represents the text styling rules to apply to a media item’s textual content.

# textStyleRules (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An array of text style rules that specify the formatting and presentation of Web Video Text Tracks (WebVTT) subtitles.

## Declaration

```objectivec
@property (copy, nullable) NSArray<AVTextStyleRule *> * textStyleRules;
```

<a id="Discussion"></a>

## Discussion

Text style rules apply only to WebVTT subtitles. They don’t apply to other subtitle formats and legible text.

## See Also

### Accessing text style rules

- [AVTextStyleRule](../avtextstylerule.md): An object that represents the text styling rules to apply to a media item’s textual content.
