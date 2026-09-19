> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/navigationbarminimization-15u99

# navigationBarMinimization

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

The minimization configuration for the navigation bar.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) UIBarMinimization * navigationBarMinimization;
```

<a id="discussion"></a>

## Discussion

Set the properties of this configuration to control how the navigation bar minimizes in response to scrolling. When the navigation bar minimizes, an integrated top tab bar will also minimize.
