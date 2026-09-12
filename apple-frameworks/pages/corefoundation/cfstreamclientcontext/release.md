> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamclientcontext/release](https://developer.apple.com/documentation/corefoundation/cfstreamclientcontext/release)

# release (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A release callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var release: ((UnsafeMutableRawPointer?) -> Void)!
```

# release (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A release callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
void (*)(void *) release;
```
