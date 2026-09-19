> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptionformatconformer/conformedcaption(for:)

# conformedCaption(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption that conforms to a specific format.

## Declaration

```swift
func conformedCaption(for caption: AVCaption) throws -> AVCaption
```

## Parameters

- `caption`: The caption to conform.

<a id="return-value"></a>

## Return Value

A caption that conforms to the defined caption format.

## See Also

### Conforming captions

- [conformsCaptionsToTimeRange](conformscaptionstotimerange.md): A Boolean value that indicates whether to conform the time range of a canonical caption.

# conformedCaptionForCaption:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption that conforms to a specific format.

## Declaration

```objectivec
- (AVCaption *) conformedCaptionForCaption:(AVCaption *) caption error:(NSError **) outError;
```

## Parameters

- `caption`: The caption to conform.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="return-value"></a>

## Return Value

A caption that conforms to the defined caption format.

## See Also

### Conforming captions

- [conformsCaptionsToTimeRange](conformscaptionstotimerange.md): A Boolean value that indicates whether to conform the time range of a canonical caption.
