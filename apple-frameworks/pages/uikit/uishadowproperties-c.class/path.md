> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uishadowproperties-c.class/path

# path

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The path that is used to create the shadow. When `nil`, the shadow will be rendered to match the bounds of the view that it is applied to. Defaults to `nil`.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBezierPath * path;
```
