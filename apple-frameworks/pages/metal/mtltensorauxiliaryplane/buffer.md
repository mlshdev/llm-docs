> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltensorauxiliaryplane/buffer

# buffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The buffer that provides the underlying storage for this plane, or `nil` if no buffer was provided at initialization.

## Declaration

```swift
var buffer: (any MTLBuffer)? { get }
```

# buffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The buffer that provides the underlying storage for this plane, or `nil` if no buffer was provided at initialization.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLBuffer> buffer;
```
