> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/lookaroundpreviewoptions](https://developer.apple.com/documentation/mapkitjs/lookaroundpreviewoptions)

# LookAroundPreviewOptions

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Interface  
**Availability:** MapKit JS 5.79+

Options for initializing a LookAroundPreview object.

## Declaration

```
interface LookAroundPreviewOptions extends CommonLookAroundOptions
```

## Topics

### Possible badge positions

- [BottomTrailing](lookaroundbadgeposition/bottomtrailing.md): Places the badge on the bottom trailing corner of the Look Around preview.
- [TopLeading](lookaroundbadgeposition/topleading.md): Places the badge on the top leading corner of the Look Around preview.
- [TopTrailing](lookaroundbadgeposition/toptrailing.md): Places the badge on the top trailing corner of the Look Around preview.

### Controlling the badge position

- [badgePosition](lookaroundpreviewoptions/badgeposition.md): A value you set to specific the position of a badge on the Look Around preview.
- [LookAroundBadgePosition](lookaroundbadgeposition.md): Values that control the positions of a badge on a Look Around preview.

## Relationships

### Inherits From

- [CommonLookAroundOptions](commonlookaroundoptions.md)

## See Also

### Exploring at street level

- [LookAround](lookaround.md): A view that allows someone to see a street level view of a place.
- [LookAroundOptions](lookaroundoptions.md): Options for initializing a LookAround view.
- [LookAroundPreview](lookaroundpreview.md): A class that renders a preview of a Look Around view.
- [LookAroundScene](lookaroundscene.md): Object that represents the current location of the view.
- [CommonLookAroundOptions](commonlookaroundoptions.md): Options that control the behavior of Look Around views.
- [AbstractLookAround](abstractlookaround.md): An abstract class that provides a common interface for Look Around views.
- [lookAroundViews](mapkit/lookaroundviews.md): A list of all the Look Around objects that are currently active on a page.
