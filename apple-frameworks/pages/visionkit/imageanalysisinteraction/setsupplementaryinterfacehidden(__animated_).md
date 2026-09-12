> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/setsupplementaryinterfacehidden(_:animated:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/setsupplementaryinterfacehidden(_:animated:))

# setSupplementaryInterfaceHidden(\_:animated:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Hides or shows supplementary interface objects, such as the Live Action button and Quick Actions, depending on the item type.

## Declaration

```swift
@MainActor final func setSupplementaryInterfaceHidden(_ hidden: Bool, animated: Bool)
```

## Parameters

- `hidden`: `true` to hide the supplementary interface; otherwise, `false`.
- `animated`: `true` to animate the interface transition; otherwise, `false`.

## See Also

### Customizing the interface

- [allowLongPressForDataDetectorsInTextMode](allowlongpressfordatadetectorsintextmode.md): A Boolean value that indicates whether people can press and hold text to activate data detectors.
- [supplementaryInterfaceContentInsets](supplementaryinterfacecontentinsets.md): The distances the edges of content are inset from the supplementary interface.
- [supplementaryInterfaceFont](supplementaryinterfacefont.md): The font to use for the supplementary interface.
