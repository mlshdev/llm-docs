> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferlockflags/readonly](https://developer.apple.com/documentation/corevideo/cvpixelbufferlockflags/readonly)

# readOnly (Swift)

**Framework:** Core Video  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A read-only buffer.

## Declaration

```swift
static var readOnly: CVPixelBufferLockFlags { get }
```

<a id="Discussion"></a>

## Discussion

Set this flag if you don’t plan to modify buffer data while holding the lock. Setting this flag improves performance by preventing Core Video from invalidating  existing caches of the buffer’s contents.

> **Important**

>  If you pass this flag to the [CVPixelBufferLockBaseAddress(\_:\_:)](../cvpixelbufferlockbaseaddress%28____%29.md) function, you must also pass it to the [CVPixelBufferUnlockBaseAddress(\_:\_:)](../cvpixelbufferunlockbaseaddress%28____%29.md) function.

# kCVPixelBufferLock_ReadOnly (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A read-only buffer.

## Declaration

```objectivec
kCVPixelBufferLock_ReadOnly
```

<a id="Discussion"></a>

## Discussion

Set this flag if you don’t plan to modify buffer data while holding the lock. Setting this flag improves performance by preventing Core Video from invalidating  existing caches of the buffer’s contents.

> **Important**

>  If you pass this flag to the [CVPixelBufferLockBaseAddress](../cvpixelbufferlockbaseaddress%28____%29.md) function, you must also pass it to the [CVPixelBufferUnlockBaseAddress](../cvpixelbufferunlockbaseaddress%28____%29.md) function.
