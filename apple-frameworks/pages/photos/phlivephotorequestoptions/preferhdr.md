> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phlivephotorequestoptions/preferhdr

# preferHDR (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Request HDR image data if available (such as PQ/HLG formats).

## Declaration

```swift
var preferHDR: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Off by default. For best results, only enable this when you intend to display an HDR experience in `PHLivePhotoView` — for example, when the view’s `preferredImageDynamicRange` is greater than standard (SDR). Defaults to `NO`.

# preferHDR (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Request HDR image data if available (such as PQ/HLG formats).

## Declaration

```objectivec
@property (nonatomic) BOOL preferHDR;
```

<a id="discussion"></a>

## Discussion

Off by default. For best results, only enable this when you intend to display an HDR experience in `PHLivePhotoView` — for example, when the view’s `preferredImageDynamicRange` is greater than standard (SDR). Defaults to `NO`.
