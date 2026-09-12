> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessor/metadataforsidecarfile](https://developer.apple.com/documentation/mediaextension/merawprocessor/metadataforsidecarfile)

# metadataForSidecarFile (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

## Declaration

```swift
optional var metadataForSidecarFile: Data { get }
```

<a id="discussion"></a>

## Discussion

The metadata returned is a pre-formatted NSData that represents a fully-formed sidecar file, and should be compatible with the MediaExtension FormatReader.

The metadata will contain the initial processing parameters from the sidecar file, along with any adjustments made on the RAW processor.

# metadataForSidecarFile (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

## Declaration

```objectivec
@property (readonly) NSData * metadataForSidecarFile;
```

<a id="discussion"></a>

## Discussion

The metadata returned is a pre-formatted NSData that represents a fully-formed sidecar file, and should be compatible with the MediaExtension FormatReader.

The metadata will contain the initial processing parameters from the sidecar file, along with any adjustments made on the RAW processor.
