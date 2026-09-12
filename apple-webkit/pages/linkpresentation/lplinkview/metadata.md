> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkview/metadata](https://developer.apple.com/documentation/linkpresentation/lplinkview/metadata)

# metadata (Swift)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The metadata from which to generate a rich presentation.

## Declaration

```swift
@NSCopying var metadata: LPLinkMetadata { get set }
```

<a id="discussion"></a>

## Discussion

This can either be generated automatically from a URL by LPMetadataProvider, or manually constructed with the desired data.

# metadata (Objective-C)

**Framework:** Link Presentation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

The metadata from which to generate a rich presentation.

## Declaration

```objectivec
@property (nonatomic, copy) LPLinkMetadata * metadata;
```

<a id="discussion"></a>

## Discussion

This can either be generated automatically from a URL by LPMetadataProvider, or manually constructed with the desired data.
