> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcomputepipelinedescriptor/linkedfunctions

# linkedFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The functions with available function pointers for the next kernel call.

## Declaration

```swift
@NSCopying var linkedFunctions: MTLLinkedFunctions? { get set }
```

# linkedFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The functions with available function pointers for the next kernel call.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTLLinkedFunctions * linkedFunctions;
```
