> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringinlinebuffer](https://developer.apple.com/documentation/corefoundation/cfstringinlinebuffer)

# CFStringInlineBuffer (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

## Declaration

```swift
struct CFStringInlineBuffer
```

<a id="overview"></a>

## Overview

This structure is used for in-line buffer access of characters contained by a CFString object. Use the [CFStringInitInlineBuffer(\_:\_:\_:)](cfstringinitinlinebuffer%28______%29.md) function for initializing the fields of this structure; do not do it manually. Once the buffer is initialized, use the [CFStringGetCharacterFromInlineBuffer(\_:\_:)](cfstringgetcharacterfrominlinebuffer%28____%29.md) function to access characters from the buffer. Do not access the fields directly as they might change between releases.

The only reason this structure is not opaque is to allow the in-line functions to access its fields.

## Topics

### Initializers

- [init()](cfstringinlinebuffer/init%28%29.md)
- [init(buffer:theString:directUniCharBuffer:directCStringBuffer:rangeToBuffer:bufferedRangeStart:bufferedRangeEnd:)](cfstringinlinebuffer/init%28buffer_thestring_directunicharbuffer_directcstringbuffer_rangetobuffer_bufferedrangestart_bufferedrangeend_%29.md)

### Instance Properties

- [buffer](cfstringinlinebuffer/buffer.md)
- [bufferedRangeEnd](cfstringinlinebuffer/bufferedrangeend.md)
- [bufferedRangeStart](cfstringinlinebuffer/bufferedrangestart.md)
- [directCStringBuffer](cfstringinlinebuffer/directcstringbuffer.md)
- [directUniCharBuffer](cfstringinlinebuffer/directunicharbuffer.md)
- [rangeToBuffer](cfstringinlinebuffer/rangetobuffer.md)
- [theString](cfstringinlinebuffer/thestring.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .

# CFStringInlineBuffer (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the buffer and related fields used for in-line buffer access of characters in CFString objects.

## Declaration

```objectivec
typedef struct { ... } CFStringInlineBuffer;
```

<a id="overview"></a>

## Overview

This structure is used for in-line buffer access of characters contained by a CFString object. Use the [CFStringInitInlineBuffer](cfstringinitinlinebuffer%28______%29.md) function for initializing the fields of this structure; do not do it manually. Once the buffer is initialized, use the [CFStringGetCharacterFromInlineBuffer](cfstringgetcharacterfrominlinebuffer%28____%29.md) function to access characters from the buffer. Do not access the fields directly as they might change between releases.

The only reason this structure is not opaque is to allow the in-line functions to access its fields.

## Topics

### Instance Properties

- [buffer](cfstringinlinebuffer/buffer.md)
- [bufferedRangeEnd](cfstringinlinebuffer/bufferedrangeend.md)
- [bufferedRangeStart](cfstringinlinebuffer/bufferedrangestart.md)
- [directCStringBuffer](cfstringinlinebuffer/directcstringbuffer.md)
- [directUniCharBuffer](cfstringinlinebuffer/directunicharbuffer.md)
- [rangeToBuffer](cfstringinlinebuffer/rangetobuffer.md)
- [theString](cfstringinlinebuffer/thestring.md)

## See Also

### Data Types

- [CFStringEncoding](cfstringencoding.md): An integer type for constants used to specify supported string encodings in various CFString functions.
- [CFStringEncodings](cfstringencodings.md): Index type for constants used to specify external string encodings.
- [CFStringCompareFlags](cfstringcompareflags.md): A [CFOptionFlags](cfoptionflags.md) type for specifying options for string comparison .
