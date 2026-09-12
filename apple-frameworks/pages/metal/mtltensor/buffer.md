> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensor/buffer](https://developer.apple.com/documentation/metal/mtltensor/buffer)

# buffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A buffer instance this tensor shares its storage with or `nil` if this tensor does not wrap an underlying buffer.

## Declaration

```swift
var buffer: (any MTLBuffer)? { get }
```

# buffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A buffer instance this tensor shares its storage with or `nil` if this tensor does not wrap an underlying buffer.

## Declaration

```objectivec
@property (readonly, nullable) id<MTLBuffer> buffer;
```
