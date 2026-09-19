> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4commitfeedback/error

# error (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A description of an error when the GPU encounters an issue as it runs the committed command buffers.

## Declaration

```swift
var error: (any Error)? { get }
```

# error (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A description of an error when the GPU encounters an issue as it runs the committed command buffers.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSError * error;
```
