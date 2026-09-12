> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffiledescriptorcontext/retain](https://developer.apple.com/documentation/corefoundation/cffiledescriptorcontext/retain)

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
