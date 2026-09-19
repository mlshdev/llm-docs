> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfrunloopsourcecontext1/copydescription

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
