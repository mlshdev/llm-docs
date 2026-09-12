> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbufferretain](https://developer.apple.com/documentation/corevideo/cvbufferretain)

# CVBufferRetain

**Interface language:** Objective-C

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retains a Core Video buffer.

## Declaration

```objectivec
extern CVBufferRefCVBufferRetain(CVBufferRef buffer);
```

## Parameters

- `buffer`: The Core Video buffer that you want to retain.

<a id="return-value"></a>

## Return Value

For convenience, the same Core Video buffer you wanted to retain.

<a id="Discussion"></a>

## Discussion

Like [CFRetain](../corefoundation/cfretain.md), this function increments the retain count of a Core Video buffer. However, unlike [CFRetain](../corefoundation/cfretain.md), this function is `NULL` safe.

## See Also

### Retaining and releasing buffers

- [CVBufferRelease](cvbufferrelease.md): Releases a Core Video buffer.
