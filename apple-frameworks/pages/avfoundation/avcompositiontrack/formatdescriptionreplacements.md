> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcompositiontrack/formatdescriptionreplacements](https://developer.apple.com/documentation/avfoundation/avcompositiontrack/formatdescriptionreplacements)

# formatDescriptionReplacements (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The replacement format descriptions.

## Declaration

```swift
var formatDescriptionReplacements: [AVCompositionTrackFormatDescriptionReplacement] { get }
```

<a id="Discussion"></a>

## Discussion

The property’s values specify an original and a replacement format description, as set in a previous call to [replaceFormatDescription(\_:with:)](../avmutablecompositiontrack/replaceformatdescription%28__with_%29.md).

## See Also

### Managing format descriptions

- [formatDescriptions](formatdescriptions.md): The format descriptions of the media samples that a track references.
- [AVCompositionTrackFormatDescriptionReplacement](../avcompositiontrackformatdescriptionreplacement.md): An object that represents a format description and its replacement.

# formatDescriptionReplacements (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The replacement format descriptions.

## Declaration

```objectivec
@property (readonly) NSArray<AVCompositionTrackFormatDescriptionReplacement *> * formatDescriptionReplacements;
```

<a id="Discussion"></a>

## Discussion

The property’s values specify an original and a replacement format description, as set in a previous call to [replaceFormatDescription:withFormatDescription:](../avmutablecompositiontrack/replaceformatdescription%28__with_%29.md).

## See Also

### Managing format descriptions

- [AVCompositionTrackFormatDescriptionReplacement](../avcompositiontrackformatdescriptionreplacement.md): An object that represents a format description and its replacement.
