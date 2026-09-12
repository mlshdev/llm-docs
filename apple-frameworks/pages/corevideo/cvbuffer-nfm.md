> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvbuffer-nfm](https://developer.apple.com/documentation/corevideo/cvbuffer-nfm)

# CVBuffer (Swift)

**Framework:** Core Video  
**Kind:** API Collection

An abstract base class that defines how to interact with data buffers.

<a id="overview"></a>

## Overview

A [CVBuffer](cvbuffer.md) serves as an abstract base class that defines how to interact with buffers of data. A buffer object can hold video, audio, or possibly other types of data. All the other buffer types within the Core Video framework, such as [CVImageBuffer](cvimagebuffer-q40.md) and [CVPixelBuffer](cvpixelbuffer-q2e.md), derive from [CVBuffer](cvbuffer.md). You can use the [CVBuffer](cvbuffer.md) programming interface on any Core Video buffer.

## Topics

### Working with attachments

- [CVBufferHasAttachment(\_:\_:)](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment(\_:\_:\_:)](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments(\_:\_:)](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment(\_:\_:\_:\_:)](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments(\_:\_:\_:)](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments(\_:\_:)](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment(\_:\_:)](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments(\_:)](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment(\_:\_:\_:)](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments(\_:\_:)](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

### Protocols

- [CVBufferRepresentable](cvbufferrepresentable.md): CVBufferRepresentable protocol is a sealed protocol intended to be implemented by the types in CoreVideo framework. This protocol facilitates Swift types that wrap a value of CVBuffer type.
- [CVAttachmentKeyDefinitions](cvattachmentkeydefinitions.md): Marks a type as a collection of attachment keys for an attachment bearer.
- [CVAttachmentModePreference](cvattachmentmodepreference.md): Defines preferred mode for an attachment key.
- [CVAttachmentValueRepresentable](cvattachmentvaluerepresentable.md): Allows Swift types to be used as buffer attachment value.

### Attachment system (Swift)

- [CVAttachmentAccess](cvattachmentaccess.md): Provides access to the attachments of a buffer.
- [CVAttachmentContainer](cvattachmentcontainer.md): Provides storage for buffer attachments independent of the buffer lifetime
- [CVAttachmentRawValue](cvattachmentrawvalue.md): A lightweight wrapper around raw attachment values.
- [CVAttachmentKeyDefinition](cvattachmentkeydefinition.md): Associates a raw attachment key with a value type and preferred propagation mode.
- [CVAttachmentKeyDefinitionWithDefault](cvattachmentkeydefinitionwithdefault.md): Associates a raw attachment key with a default value and preferred propagation mode.
- [CVAttachmentCompositeKeyDefinition](cvattachmentcompositekeydefinition.md): Associates a set of raw attachment keys with a value type and preferred propagation mode.
- [CVAttachmentModePreferenceShouldPropagate](cvattachmentmodepreferenceshouldpropagate.md): Sets preferred mode for attachment to should propagate
- [CVAttachmentModePreferenceShouldNotPropagate](cvattachmentmodepreferenceshouldnotpropagate.md): Sets preferred mode for attachment to should not propagate

### Data types

- [CVBuffer](cvbuffer.md)
- [CVAttachmentMode](cvattachmentmode.md): The propagation modes of a Core Video buffer attachment.

### Constants

- [CVBuffer Attribute Keys](cvbuffer-attribute-keys.md): The attributes associated with Core Video buffers.
- [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md): The attachment types for a Core Video buffer.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.

# CVBuffer (Objective-C)

**Framework:** Core Video  
**Kind:** API Collection

An abstract base class that defines how to interact with data buffers.

<a id="overview"></a>

## Overview

A [CVBufferRef](cvbuffer.md) serves as an abstract base class that defines how to interact with buffers of data. A buffer object can hold video, audio, or possibly other types of data. All the other buffer types within the Core Video framework, such as [CVImageBuffer](cvimagebuffer-q40.md) and [CVPixelBuffer](cvpixelbuffer-q2e.md), derive from [CVBufferRef](cvbuffer.md). You can use the [CVBufferRef](cvbuffer.md) programming interface on any Core Video buffer.

## Topics

### Working with attachments

- [CVBufferHasAttachment](cvbufferhasattachment%28____%29.md): Returns a Boolean value that indicates whether a Core Video buffer contains a specified attachment.
- [CVBufferCopyAttachment](cvbuffercopyattachment%28______%29.md): Returns a copy of an attachment from a Core Video buffer.
- [CVBufferCopyAttachments](cvbuffercopyattachments%28____%29.md): Returns a copy of all attachments from a Core Video buffer.
- [CVBufferSetAttachment](cvbuffersetattachment%28________%29.md): Sets or adds an attachment to a Core Video buffer.
- [CVBufferSetAttachments](cvbuffersetattachments%28______%29.md): Sets a dictionary of attachments on a Core Video buffer.
- [CVBufferPropagateAttachments](cvbufferpropagateattachments%28____%29.md): Copies all attachments that Core Video can propagate from one buffer to another.
- [CVBufferRemoveAttachment](cvbufferremoveattachment%28____%29.md): Removes the attachment you specify from a Core Video buffer.
- [CVBufferRemoveAllAttachments](cvbufferremoveallattachments%28__%29.md): Removes all attachments from a Core Video buffer.
- [CVBufferGetAttachment](cvbuffergetattachment%28______%29.md): Deprecated. Retrieves a specific attachment of a Core Video buffer.
- [CVBufferGetAttachments](cvbuffergetattachments%28____%29.md): Deprecated. Retrieves all attachments of a Core Video buffer.

### Retaining and releasing buffers

- [CVBufferRetain](cvbufferretain.md): Retains a Core Video buffer.
- [CVBufferRelease](cvbufferrelease.md): Releases a Core Video buffer.

### Data types

- [CVBufferRef](cvbuffer.md)
- [CVAttachmentMode](cvattachmentmode.md): The propagation modes of a Core Video buffer attachment.

### Constants

- [CVBuffer Attribute Keys](cvbuffer-attribute-keys.md): The attributes associated with Core Video buffers.
- [CVBuffer Attachment Keys](cvbuffer-attachment-keys.md): The attachment types for a Core Video buffer.

## See Also

### Related Documentation

- [Core Video Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreVideo/CVProg_Intro/CVProg_Intro.html#//apple_ref/doc/uid/TP40001536)

### Data Processing

- [CVImageBuffer](cvimagebuffer-q40.md): An interface for managing different types of image data.
- [CVPixelBuffer](cvpixelbuffer-q2e.md): An image buffer that holds pixels in main memory.
- [CVPixelBufferPool](cvpixelbufferpool-77o.md): A utility object for managing a recyclable set of pixel buffer objects.
- [CVPixelFormatDescription](cvpixelformatdescription-42p.md): An API that provides functions and types for defining custom pixel formats.
