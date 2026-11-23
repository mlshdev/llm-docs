> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplatedetailsheader/actionbuttons

# actionButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of action buttons to display in the header.

## Declaration

```swift
var actionButtons: [CPButton] { get set }
```

<a id="discussion"></a>

## Discussion

Use the buttons to give people a way to perform relevant interactions on your content. Limit the number of buttons to the maximum value, which is available in the [maximumActionButtonCount](maximumactionbuttoncount.md) property. The system displays the buttons horizontally in the header in the same order they appear in this array.

If you assign a [CPPlaybackConfiguration](../cpplaybackconfiguration.md) object to the header’s inherited [playbackConfiguration](../cpplayableitem/playbackconfiguration.md) property, that object replaces the appearance of the first button in the array. The new appearance contains play/pause controls and other media-related information to support media playback. When someone interacts with the play/pause controls, CarPlay calls your button’s handler, which you use to start or stop playback.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [wantsAdaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.

# actionButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An array of action buttons to display in the header.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPButton *> * actionButtons;
```

<a id="discussion"></a>

## Discussion

Use the buttons to give people a way to perform relevant interactions on your content. Limit the number of buttons to the maximum value, which is available in the [maximumActionButtonCount](maximumactionbuttoncount.md) property. The system displays the buttons horizontally in the header in the same order they appear in this array.

If you assign a [CPPlaybackConfiguration](../cpplaybackconfiguration.md) object to the header’s inherited [playbackConfiguration](../cpplayableitem/playbackconfiguration.md) property, that object replaces the appearance of the first button in the array. The new appearance contains play/pause controls and other media-related information to support media playback. When someone interacts with the play/pause controls, CarPlay calls your button’s handler, which you use to start or stop playback.

## See Also

### Managing the header’s content

- [thumbnail](thumbnail.md): The thumbnail image to display in the header.
- [title](title.md): The primary text to display in the header.
- [subtitle](subtitle.md): The text to display in the header below the title.
- [bodyVariants](bodyvariants.md): An optional array of localized strings to display beneath the subtitle.
- [adaptiveBackgroundStyle](wantsadaptivebackgroundstyle.md): A Boolean value that indicates whether to apply a custom background style to the header.
