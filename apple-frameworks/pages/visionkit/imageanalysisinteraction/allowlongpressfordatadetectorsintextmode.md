> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/allowlongpressfordatadetectorsintextmode](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/allowlongpressfordatadetectorsintextmode)

# allowLongPressForDataDetectorsInTextMode

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether people can press and hold text to activate data detectors.

## Declaration

```swift
@MainActor final var allowLongPressForDataDetectorsInTextMode: Bool { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

If you set this property to `true` when the interaction type is just text, people can press and hold data in text, even when data detectors aren’t active. Otherwise, people can perform only text actions, such as copy and translate. The default value for this property is `true`.

## See Also

### Customizing the interface

- [setSupplementaryInterfaceHidden(\_:animated:)](setsupplementaryinterfacehidden%28__animated_%29.md): Hides or shows supplementary interface objects, such as the Live Action button and Quick Actions, depending on the item type.
- [supplementaryInterfaceContentInsets](supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](supplementaryinterfacefont.md): The font to use for the supplementary interface.
