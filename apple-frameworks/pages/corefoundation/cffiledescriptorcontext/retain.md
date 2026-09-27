> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cffiledescriptorcontext/retain

# retain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The retain callback used by the CFFileDescriptor.

## Declaration

```swift
var retain: ((UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?)!
```

# retain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The retain callback used by the CFFileDescriptor.

## Declaration

```objectivec
void *(*)(void *) retain;
```
