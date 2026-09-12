> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus/fragmentadded](https://developer.apple.com/documentation/mediaextension/meformatreaderparseadditionalfragmentsstatus/fragmentadded)

# fragmentAdded (Swift)

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 14.0+

Indicates that the format reader received one or more fragments.

## Declaration

```swift
static var fragmentAdded: MEFormatReaderParseAdditionalFragmentsStatus { get }
```

## See Also

### Evaluating a fragment parsing operation

- [sizeIncreased](sizeincreased.md): Indicates that the format reader file size increased.
- [fragmentsComplete](fragmentscomplete.md): Indicates that the format reader can’t receive any more fragments.

# MEFormatReaderParseAdditionalFragmentsStatusFragmentAdded (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

Indicates that the format reader received one or more fragments.

## Declaration

```objectivec
MEFormatReaderParseAdditionalFragmentsStatusFragmentAdded
```

## See Also

### Evaluating a fragment parsing operation

- [MEFormatReaderParseAdditionalFragmentsStatusSizeIncreased](sizeincreased.md): Indicates that the format reader file size increased.
- [MEFormatReaderParseAdditionalFragmentsStatusFragmentsComplete](fragmentscomplete.md): Indicates that the format reader can’t receive any more fragments.
