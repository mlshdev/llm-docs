> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibuttonconfiguration/automaticallyupdateforselection

# automaticallyUpdateForSelection

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that determines whether the style automatically updates when the button is in a selected state.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL automaticallyUpdateForSelection;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true) for the [plainButtonConfiguration](plainbuttonconfiguration.md), [grayButtonConfiguration](graybuttonconfiguration.md), and [tintedButtonConfiguration](tintedbuttonconfiguration.md) configurations. Set this value to [false](https://developer.apple.com/documentation/swift/false) to customize the selection behavior.
