> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplane/bufferoffset](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplane/bufferoffset)

# bufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The byte offset into [buffer](buffer.md) where this plane’s data begins, or `0` if no buffer was provided at initialization.

## Declaration

```swift
var bufferOffset: Int { get }
```

# bufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The byte offset into [buffer](buffer.md) where this plane’s data begins, or `0` if no buffer was provided at initialization.

## Declaration

```objectivec
@property (readonly) NSUInteger bufferOffset;
```
