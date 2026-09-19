> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetcreationrequest/originalresourcechoice

# originalResourceChoice (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource to use as the unadjusted base for rendering derivatives of the new asset.

## Declaration

```swift
var originalResourceChoice: PHAsset.OriginalResourceChoice { get set }
```

<a id="discussion"></a>

## Discussion

This property applies to RAW+JPEG assets only, where it selects whether the RAW or the compressed resource serves as the original. Setting it on assets that have only a single original resource is an error.

# originalResourceChoice (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original resource to use as the unadjusted base for rendering derivatives of the new asset.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) PHOriginalResourceChoice originalResourceChoice;
```

<a id="discussion"></a>

## Discussion

This property applies to RAW+JPEG assets only, where it selects whether the RAW or the compressed resource serves as the original. Setting it on assets that have only a single original resource is an error.
