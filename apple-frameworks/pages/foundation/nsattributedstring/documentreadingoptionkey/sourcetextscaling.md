> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/documentreadingoptionkey/sourcetextscaling](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/sourcetextscaling)

# sourceTextScaling

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The text-scaling mode to associate with the document’s content.

## Declaration

```swift
static let sourceTextScaling: NSAttributedString.DocumentReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the options of the [NSTextScalingType](../../../uikit/nstextscalingtype.md) type. Some platforms scale fonts to improve their appearance. Include this option to specify the text-scaling mode to associate with the document’s contents on disk.

## See Also

### Getting the font-scaling options

- [targetTextScaling](targettextscaling.md): The text scaling mode to use after reading the text from disk.
