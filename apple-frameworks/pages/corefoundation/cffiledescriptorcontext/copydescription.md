> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cffiledescriptorcontext/copydescription

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of the CFFileDescriptor.

## Declaration

```swift
var copyDescription: ((UnsafeMutableRawPointer?) -> Unmanaged<CFString>?)!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to create a descriptive string representation of the CFFileDescriptor.

## Declaration

```objectivec
const struct __CFString *(*)(void *) copyDescription;
```
