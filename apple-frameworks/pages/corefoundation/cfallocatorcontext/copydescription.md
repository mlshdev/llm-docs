> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfallocatorcontext/copydescription

# copyDescription (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that provides a description of the data pointed to by the `info` field. In implementing this function, return a reference to a CFString object that describes your allocator, particularly some characteristics of your program-defined data. You may set this function pointer to `NULL`, in which case Core Foundation will provide a rudimentary description.

## Declaration

```swift
var copyDescription: CFAllocatorCopyDescriptionCallBack!
```

# copyDescription (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A prototype for a function callback that provides a description of the data pointed to by the `info` field. In implementing this function, return a reference to a CFString object that describes your allocator, particularly some characteristics of your program-defined data. You may set this function pointer to `NULL`, in which case Core Foundation will provide a rudimentary description.

## Declaration

```objectivec
CFAllocatorCopyDescriptionCallBack copyDescription;
```
