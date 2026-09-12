> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbufferrelease](https://developer.apple.com/documentation/corevideo/cvbufferrelease)

# CVBufferRelease

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Releases a Core Video buffer.

## Declaration

```objectivec
extern void CVBufferRelease(CVBufferRef buffer);
```

## Parameters

- `buffer`: The Core Video buffer that you want to release.

<a id="Discussion"></a>

## Discussion

Like [CFRelease](../corefoundation/cfrelease.md), this function decrements the retain count of a Core Video buffer. However, unlike [CFRelease](../corefoundation/cfrelease.md), this function is `NULL` safe. If the retain count becomes zero, the system deallocates the object.

## See Also

### Retaining and releasing buffers

- [CVBufferRetain](cvbufferretain.md): Retains a Core Video buffer.
