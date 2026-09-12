> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailabletextproperties/minimumscalefactor](https://developer.apple.com/documentation/uikit/uicontentunavailabletextproperties/minimumscalefactor)

# minimumScaleFactor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The minimum scale factor for the text.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumScaleFactor;
```

<a id="Discussion"></a>

## Discussion

If you set [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md) to `YES`, this property defines the smallest multiplier the view uses to fit the text.
