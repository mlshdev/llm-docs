> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/append(_:)-4ils8

# append(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Appends a caption group that the system writes to the output.

> Use AVAssetWriter.inputCaptionReceiver(for:) instead

## Declaration

```swift
func append(_ captionGroup: AVCaptionGroup) -> Bool
```

## Parameters

- `captionGroup`: The caption group that the system writes to the output.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Appending captions

- [append(\_:)](append%28__%29-910lp.md): Deprecated. Appends a caption to the writer input.

# appendCaptionGroup: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Appends a caption group that the system writes to the output.

## Declaration

```objectivec
- (BOOL) appendCaptionGroup:(AVCaptionGroup *) captionGroup;
```

## Parameters

- `captionGroup`: The caption group that the system writes to the output.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Appending captions

- [appendCaption:](append%28__%29-910lp.md): Deprecated. Appends a caption to the writer input.
