> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcontext/release](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcontext/release)

# release (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The release callback used by the CFFileDescriptor.

## Declaration

```swift
var release: ((UnsafeMutableRawPointer?) -> Void)!
```

# release (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The release callback used by the CFFileDescriptor.

## Declaration

```objectivec
void (*)(void *) release;
```
