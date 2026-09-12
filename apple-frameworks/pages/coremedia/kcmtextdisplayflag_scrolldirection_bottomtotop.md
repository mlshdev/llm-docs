> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtextdisplayflag_scrolldirection_bottomtotop](https://developer.apple.com/documentation/coremedia/kcmtextdisplayflag_scrolldirection_bottomtotop)

# kCMTextDisplayFlag_scrollDirection_bottomToTop (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag that describes the text is vertically scrolled up (“credits style”), entering from the bottom and leaving towards the top.

## Declaration

```swift
var kCMTextDisplayFlag_scrollDirection_bottomToTop: CMTextDisplayFlags { get }
```

## See Also

### Constants

- [kCMTextDisplayFlag_scrollIn](kcmtextdisplayflag_scrollin.md): A flag that describes the text scrolls into the display region.
- [kCMTextDisplayFlag_scrollOut](kcmtextdisplayflag_scrollout.md): A flag that describes the text scrolls out of the display region.
- [kCMTextDisplayFlag_scrollDirectionMask](kcmtextdisplayflag_scrolldirectionmask.md): A flag that describes the scrolling direction is set by a two-bit field, obtained from displayFlags using kCMTextDisplayFlag_scrollDirectionMask.
- [kCMTextDisplayFlag_scrollDirection_rightToLeft](kcmtextdisplayflag_scrolldirection_righttoleft.md): A flag that describes the text is horizontally scrolled (“marquee style”), entering from the right and leaving towards the left.
- [kCMTextDisplayFlag_scrollDirection_topToBottom](kcmtextdisplayflag_scrolldirection_toptobottom.md): A flag that describes the text is vertically scrolled down, entering from the top and leaving towards the bottom.
- [kCMTextDisplayFlag_scrollDirection_leftToRight](kcmtextdisplayflag_scrolldirection_lefttoright.md): A flag that describes the text is horizontally scrolled, entering from the left and leaving towards the right.
- [kCMTextDisplayFlag_continuousKaraoke](kcmtextdisplayflag_continuouskaraoke.md): A flag that describes enabling the continuous karaoke mode where the range of karaoke highlighting extends to include additional ranges rather than the highlighting moves onto the next range.
- [kCMTextDisplayFlag_writeTextVertically](kcmtextdisplayflag_writetextvertically.md): A flag that describes the text renders vertically.
- [kCMTextDisplayFlag_fillTextRegion](kcmtextdisplayflag_filltextregion.md): A flag that describes the subtitle display bounds are to be filled with the color specified by `kCMTextFormatDescriptionExtension_BackgroundColor`.
- [kCMTextDisplayFlag_forcedSubtitlesPresent](kcmtextdisplayflag_forcedsubtitlespresent.md): A flag that describes forcing subtitles are present, for example, a subtitle which only displays during foreign language sections of the video. Check individual samples to determine what type of subtitle is contained.
- [kCMTextDisplayFlag_allSubtitlesForced](kcmtextdisplayflag_allsubtitlesforced.md): A flag that describes treating all subtitle samples as if they contain forced subtitles.

# kCMTextDisplayFlag_scrollDirection_bottomToTop (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A flag that describes the text is vertically scrolled up (“credits style”), entering from the bottom and leaving towards the top.

## Declaration

```objectivec
kCMTextDisplayFlag_scrollDirection_bottomToTop
```

## See Also

### Constants

- [kCMTextDisplayFlag_scrollIn](kcmtextdisplayflag_scrollin.md): A flag that describes the text scrolls into the display region.
- [kCMTextDisplayFlag_scrollOut](kcmtextdisplayflag_scrollout.md): A flag that describes the text scrolls out of the display region.
- [kCMTextDisplayFlag_scrollDirectionMask](kcmtextdisplayflag_scrolldirectionmask.md): A flag that describes the scrolling direction is set by a two-bit field, obtained from displayFlags using kCMTextDisplayFlag_scrollDirectionMask.
- [kCMTextDisplayFlag_scrollDirection_rightToLeft](kcmtextdisplayflag_scrolldirection_righttoleft.md): A flag that describes the text is horizontally scrolled (“marquee style”), entering from the right and leaving towards the left.
- [kCMTextDisplayFlag_scrollDirection_topToBottom](kcmtextdisplayflag_scrolldirection_toptobottom.md): A flag that describes the text is vertically scrolled down, entering from the top and leaving towards the bottom.
- [kCMTextDisplayFlag_scrollDirection_leftToRight](kcmtextdisplayflag_scrolldirection_lefttoright.md): A flag that describes the text is horizontally scrolled, entering from the left and leaving towards the right.
- [kCMTextDisplayFlag_continuousKaraoke](kcmtextdisplayflag_continuouskaraoke.md): A flag that describes enabling the continuous karaoke mode where the range of karaoke highlighting extends to include additional ranges rather than the highlighting moves onto the next range.
- [kCMTextDisplayFlag_writeTextVertically](kcmtextdisplayflag_writetextvertically.md): A flag that describes the text renders vertically.
- [kCMTextDisplayFlag_fillTextRegion](kcmtextdisplayflag_filltextregion.md): A flag that describes the subtitle display bounds are to be filled with the color specified by `kCMTextFormatDescriptionExtension_BackgroundColor`.
- [kCMTextDisplayFlag_forcedSubtitlesPresent](kcmtextdisplayflag_forcedsubtitlespresent.md): A flag that describes forcing subtitles are present, for example, a subtitle which only displays during foreign language sections of the video. Check individual samples to determine what type of subtitle is contained.
- [kCMTextDisplayFlag_allSubtitlesForced](kcmtextdisplayflag_allsubtitlesforced.md): A flag that describes treating all subtitle samples as if they contain forced subtitles.
