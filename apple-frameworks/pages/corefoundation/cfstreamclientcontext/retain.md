> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamclientcontext/retain](https://developer.apple.com/documentation/corefoundation/cfstreamclientcontext/retain)

# retain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A retain callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var retain: ((UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?)!
```

# retain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A retain callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
void *(*)(void *) retain;
```
