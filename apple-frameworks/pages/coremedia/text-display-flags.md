> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/text-display-flags](https://developer.apple.com/documentation/coremedia/text-display-flags)

# Text Display Flags

**Interface languages:** Swift, Objective-C

**Framework:** Core Media  
**Kind:** API Collection

Flags that identify text display methods.

## Topics

### Constants

- [kCMTextDisplayFlag_allSubtitlesForced](kcmtextdisplayflag_allsubtitlesforced.md): A flag that describes treating all subtitle samples as if they contain forced subtitles.
- [kCMTextDisplayFlag_continuousKaraoke](kcmtextdisplayflag_continuouskaraoke.md): A flag that describes enabling the continuous karaoke mode where the range of karaoke highlighting extends to include additional ranges rather than the highlighting moves onto the next range.
- [kCMTextDisplayFlag_fillTextRegion](kcmtextdisplayflag_filltextregion.md): A flag that describes the subtitle display bounds are to be filled with the color specified by `kCMTextFormatDescriptionExtension_BackgroundColor`.
- [kCMTextDisplayFlag_forcedSubtitlesPresent](kcmtextdisplayflag_forcedsubtitlespresent.md): A flag that describes forcing subtitles are present, for example, a subtitle which only displays during foreign language sections of the video. Check individual samples to determine what type of subtitle is contained.
- [kCMTextDisplayFlag_obeySubtitleFormatting](kcmtextdisplayflag_obeysubtitleformatting.md): A flag that describes using the subtitle display bounds to determine if the system places the subtitltes near the top or bottom of the video.
- [kCMTextDisplayFlag_scrollDirectionMask](kcmtextdisplayflag_scrolldirectionmask.md): A flag that describes the scrolling direction is set by a two-bit field, obtained from displayFlags using kCMTextDisplayFlag_scrollDirectionMask.
- [kCMTextDisplayFlag_scrollDirection_bottomToTop](kcmtextdisplayflag_scrolldirection_bottomtotop.md): A flag that describes the text is vertically scrolled up (“credits style”), entering from the bottom and leaving towards the top.
- [kCMTextDisplayFlag_scrollDirection_leftToRight](kcmtextdisplayflag_scrolldirection_lefttoright.md): A flag that describes the text is horizontally scrolled, entering from the left and leaving towards the right.
- [kCMTextDisplayFlag_scrollDirection_rightToLeft](kcmtextdisplayflag_scrolldirection_righttoleft.md): A flag that describes the text is horizontally scrolled (“marquee style”), entering from the right and leaving towards the left.
- [kCMTextDisplayFlag_scrollDirection_topToBottom](kcmtextdisplayflag_scrolldirection_toptobottom.md): A flag that describes the text is vertically scrolled down, entering from the top and leaving towards the bottom.
- [kCMTextDisplayFlag_scrollIn](kcmtextdisplayflag_scrollin.md): A flag that describes the text scrolls into the display region.
- [kCMTextDisplayFlag_scrollOut](kcmtextdisplayflag_scrollout.md): A flag that describes the text scrolls out of the display region.
- [kCMTextDisplayFlag_writeTextVertically](kcmtextdisplayflag_writetextvertically.md): A flag that describes the text renders vertically.

## See Also

### Constants

- [Audio Format Description Mask Codes](audio-format-desc-codes.md): Mask codes that identify audio formats.
- [Chroma Location Extension Constants](chroma-location-extension-constants.md): Constants that identify chroma location extensions.
- [Clean Aperture Extension Constants](clean-aperture-extension-constants.md): Constants that identify clean aperture extensions.
- [Closed Caption Format Type Constants](closed-caption-formats.md): Types that identify closed caption formats.
- [Color Primary Extension Constants](color-primary-extension-constants.md): Constants that identify color primary extensions.
- [Field Detail Extension Constants](field-detail-extension-constants.md): Constants that identify field detail extensions.
- [Format Description Bridge Error Codes](format-description-bridge-errors.md): Bridge errors the system returns from format description calls.
- [Format Description Constants](format-description-constants.md): Constants that identify format descriptions.
- [Format Description Error Codes](format-description-errors.md): Errors the system returns from format description calls.
- [HEVC Temporal Level Info Constants](hevc-temporal-level-info-constants.md): Constants that identify HEVC temporal level information.
- [Metadata Format Description Constants](metadata-format-description-constants.md): Constants that identify metadata format descriptions.
- [MPEG-2-conformant Formats](mpeg-2-conformant-formats.md): Constants that identify MPEG-2 formats.
- [Pixel Aspect Ratio Extension Constants](pixel-aspect-ratio-extension-constants.md): Constants that identify pixel aspect ratio extensions.
- [Text Format Constants](text-format-constants.md): Types that identify text formats.
- [Text Format Description Constants](text-format-description-constants.md): Constants that identify text format descriptions.
