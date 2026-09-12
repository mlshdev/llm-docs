> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrunloopobservercontext/retain](https://developer.apple.com/documentation/corefoundation/cfrunloopobservercontext/retain)

# retain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A retain callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var retain: ((UnsafeRawPointer?) -> UnsafeRawPointer?)!
```

# retain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A retain callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
const void *(*)(const void *) retain;
```
