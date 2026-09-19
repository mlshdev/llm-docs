> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uilistcontentimageproperties/strokecolortransformer

# strokeColorTransformer

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Optional color transformer that is used to resolve the stroke color. A nil value means the `strokeColor` is used as-is.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIConfigurationColorTransformer strokeColorTransformer;
```
