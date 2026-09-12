> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputcaptionadaptor/append(_:)-910lp](https://developer.apple.com/documentation/avfoundation/avassetwriterinputcaptionadaptor/append(_:)-910lp)

# append(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ (deprecated in 27.0) · iPadOS 18.0+ (deprecated in 27.0) · Mac Catalyst 15.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0)

Appends a caption to the writer input.

> Use AVAssetWriter.inputCaptionReceiver(for:) instead

## Declaration

```swift
func append(_ caption: AVCaption) -> Bool
```

## Parameters

- `caption`: The caption that the system appends to the writer input.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Appending captions

- [append(\_:)](append%28__%29-4ils8.md): Deprecated. Appends a caption group that the system writes to the output.

# appendCaption: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Appends a caption to the writer input.

## Declaration

```objectivec
- (BOOL) appendCaption:(AVCaption *) caption;
```

## Parameters

- `caption`: The caption that the system appends to the writer input.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the operation succeeded.

## See Also

### Appending captions

- [appendCaptionGroup:](append%28__%29-4ils8.md): Deprecated. Appends a caption group that the system writes to the output.
