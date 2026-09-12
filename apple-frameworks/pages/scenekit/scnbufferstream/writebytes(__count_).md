> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbufferstream/writebytes(_:count:)](https://developer.apple.com/documentation/scenekit/scnbufferstream/writebytes(_:count:))

# writeBytes(\_:count:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Copies the specified data bytes into the underlying Metal buffer for use by a shader.

## Declaration

```swift
func writeBytes(_ bytes: UnsafeRawPointer, count length: Int)
```

## Parameters

- `bytes`: The memory address from which to copy data.
- `length`: The number of bytes to copy into the Metal buffer.

# writeBytes:length: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies the specified data bytes into the underlying Metal buffer for use by a shader.

## Declaration

```objectivec
- (void) writeBytes:(const void *) bytes length:(NSUInteger) length;
```

## Parameters

- `bytes`: The memory address from which to copy data.
- `length`: The number of bytes to copy into the Metal buffer.
