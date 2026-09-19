> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avsamplebuffergeneratorbatch/cancel()

# cancel() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Cancels any I/O for this batch.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

The system invokes the associated sample buffers data ready handlers with an error.

# cancel (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Cancels any I/O for this batch.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

The system invokes the associated sample buffers data ready handlers with an error.
