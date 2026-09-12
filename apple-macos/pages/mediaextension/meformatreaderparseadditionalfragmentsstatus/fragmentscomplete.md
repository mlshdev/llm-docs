> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus/fragmentscomplete](https://developer.apple.com/documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus/fragmentscomplete)

# fragmentsComplete (Swift)

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 14.0+

Indicates that the format reader can’t receive any more fragments.

## Declaration

```swift
static var fragmentsComplete: MEFormatReaderParseAdditionalFragmentsStatus { get }
```

<a id="Discussion"></a>

## Discussion

Additional calls of [parseAdditionalFragments(completionHandler:)](../meformatreader/parseadditionalfragments%28completionhandler_%29.md) return an error.

## See Also

### Evaluating a fragment parsing operation

- [sizeIncreased](sizeincreased.md): Indicates that the format reader file size increased.
- [fragmentAdded](fragmentadded.md): Indicates that the format reader received one or more fragments.

# MEFormatReaderParseAdditionalFragmentsStatusFragmentsComplete (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

Indicates that the format reader can’t receive any more fragments.

## Declaration

```objectivec
MEFormatReaderParseAdditionalFragmentsStatusFragmentsComplete
```

<a id="Discussion"></a>

## Discussion

Additional calls of [parseAdditionalFragmentsWithCompletionHandler:](../meformatreader/parseadditionalfragments%28completionhandler_%29.md) return an error.

## See Also

### Evaluating a fragment parsing operation

- [MEFormatReaderParseAdditionalFragmentsStatusSizeIncreased](sizeincreased.md): Indicates that the format reader file size increased.
- [MEFormatReaderParseAdditionalFragmentsStatusFragmentAdded](fragmentadded.md): Indicates that the format reader received one or more fragments.
