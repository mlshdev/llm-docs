> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreamclientcontext/copydescription](https://developer.apple.com/documentation/corefoundation/cfstreamclientcontext/copydescription)

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A copy description callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var copyDescription: ((UnsafeMutableRawPointer?) -> Unmanaged<CFString>?)!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A copy description callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
const struct __CFString *(*)(void *) copyDescription;
```
