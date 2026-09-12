> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfmachportcontext/copydescription](https://developer.apple.com/documentation/corefoundation/cfmachportcontext/copydescription)

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A copy description callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```swift
var copyDescription: ((UnsafeRawPointer?) -> Unmanaged<CFString>?)!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A copy description callback for your program-defined `info` pointer. Can be `NULL`.

## Declaration

```objectivec
const struct __CFString *(*)(const void *) copyDescription;
```
