> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffer-attribute-keys](https://developer.apple.com/documentation/corevideo/cvbuffer-attribute-keys)

# CVBuffer Attribute Keys (Swift)

**Framework:** Core Video  
**Kind:** API Collection

The attributes associated with Core Video buffers.

<a id="overview"></a>

## Overview

These attributes let you set multiple attachments at the time of buffer creation, rather than having to call [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md) for each attachment.

## Topics

### Constants

- [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md): Attachments that should be copied when using the [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md) function (type `CFDictionary`, containing a list of attachments as key-value pairs).
- [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md): Attachments that should not be copied when using the [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md) function (type `CFDictionary`, containing a list of attachments as key-value pairs).

## See Also

### Constants

- [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md): The attachment types for a Core Video buffer.

# CVBuffer Attribute Keys (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

The attributes associated with Core Video buffers.

<a id="overview"></a>

## Overview

These attributes let you set multiple attachments at the time of buffer creation, rather than having to call [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md) for each attachment.

## Topics

### Constants

- [kCVBufferPropagatedAttachmentsKey](kcvbufferpropagatedattachmentskey.md): Attachments that should be copied when using the [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md) function (type `CFDictionary`, containing a list of attachments as key-value pairs).
- [kCVBufferNonPropagatedAttachmentsKey](kcvbuffernonpropagatedattachmentskey.md): Attachments that should not be copied when using the [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md) function (type `CFDictionary`, containing a list of attachments as key-value pairs).

## See Also

### Constants

- [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md): The attachment types for a Core Video buffer.
