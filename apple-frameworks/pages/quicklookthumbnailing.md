> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing](https://developer.apple.com/documentation/quicklookthumbnailing)

# Quick Look Thumbnailing (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Generate thumbnails for common file types and add a Thumbnail Extension to your app to enable others to create thumbnails of your custom files.

<a id="overview"></a>

## Overview

You may want to create a miniature representation, or *thumbnail*, of a file and its contents to display within your app. The QuickLookThumbnailing framework provides an API to generate thumbnails using the [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md) object. It can generate thumbnails for common file types, including:

- Images
- Live Photos
- Text files
- PDFs
- Audio and video files
- Augmented reality objects using the usdz file format (iOS and iPadOS only)

Many apps use custom file types to persist their data. Finder and Spotlight on macOS, other features of the operating system, as well as other apps, often display a generic file icon instead of a thumbnail for these files. However, if an installed app implements a Thumbnail Extension that supports the custom file types, the operating system and other apps can leverage the extension to display rich thumbnails of the custom file types through the [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md) object. Add a Thumbnail Extension to your app to provide rich thumbnails of your custom file types to your users throughout the operating system and third party apps.

## Topics

### Thumbnail Generation

- [Creating Quick Look Thumbnails to Preview Files in Your App](quicklookthumbnailing/creating-quick-look-thumbnails-to-preview-files-in-your-app.md): Generate thumbnails of images, text files, PDFs, audio files, videos, and more.
- [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md): An object that generates thumbnail images based on provided requirements.
- [QLThumbnailRepresentation](quicklookthumbnailing/qlthumbnailrepresentation.md): Information about the thumbnail that the thumbnail generator returns.

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](quicklookthumbnailing/providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLThumbnailProvider](quicklookthumbnailing/qlthumbnailprovider.md): An abstract base class for creating thumbnails of custom file types.
- [QLFileThumbnailRequest](quicklookthumbnailing/qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.
- [QLThumbnailReply](quicklookthumbnailing/qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.

### Error Information

- [QLThumbnailErrorDomain](quicklookthumbnailing/qlthumbnailerrordomain.md): The error domain of the QuickLookThumbnailing framework.
- [QLThumbnailError](quicklookthumbnailing/qlthumbnailerror-swift.struct.md): Error information that might return when you generate a thumbnail.
- [QLThumbnailError.Code](quicklookthumbnailing/qlthumbnailerror-swift.struct/code.md): Error codes that may be returned when generating a thumbnail.

# Quick Look Thumbnailing (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Framework  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Generate thumbnails for common file types and add a Thumbnail Extension to your app to enable others to create thumbnails of your custom files.

<a id="overview"></a>

## Overview

You may want to create a miniature representation, or *thumbnail*, of a file and its contents to display within your app. The QuickLookThumbnailing framework provides an API to generate thumbnails using the [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md) object. It can generate thumbnails for common file types, including:

- Images
- Live Photos
- Text files
- PDFs
- Audio and video files
- Augmented reality objects using the usdz file format (iOS and iPadOS only)

Many apps use custom file types to persist their data. Finder and Spotlight on macOS, other features of the operating system, as well as other apps, often display a generic file icon instead of a thumbnail for these files. However, if an installed app implements a Thumbnail Extension that supports the custom file types, the operating system and other apps can leverage the extension to display rich thumbnails of the custom file types through the [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md) object. Add a Thumbnail Extension to your app to provide rich thumbnails of your custom file types to your users throughout the operating system and third party apps.

## Topics

### Thumbnail Generation

- [Creating Quick Look Thumbnails to Preview Files in Your App](quicklookthumbnailing/creating-quick-look-thumbnails-to-preview-files-in-your-app.md): Generate thumbnails of images, text files, PDFs, audio files, videos, and more.
- [QLThumbnailGenerator](quicklookthumbnailing/qlthumbnailgenerator.md): An object that generates thumbnail images based on provided requirements.
- [QLThumbnailRepresentation](quicklookthumbnailing/qlthumbnailrepresentation.md): Information about the thumbnail that the thumbnail generator returns.

### Thumbnails for Custom File Types

- [Providing Thumbnails of Your Custom File Types](quicklookthumbnailing/providing-thumbnails-of-your-custom-file-types.md): Implement a Thumbnail Extension to allow the operating system and other apps to display thumbnails of your custom files.
- [QLThumbnailProvider](quicklookthumbnailing/qlthumbnailprovider.md): An abstract base class for creating thumbnails of custom file types.
- [QLFileThumbnailRequest](quicklookthumbnailing/qlfilethumbnailrequest.md): A request to generate a thumbnail for a custom file type.
- [QLThumbnailReply](quicklookthumbnailing/qlthumbnailreply.md): The object that provides a thumbnail for a custom file type.

### Error Information

- [QLThumbnailErrorDomain](quicklookthumbnailing/qlthumbnailerrordomain.md): The error domain of the QuickLookThumbnailing framework.
- [QLThumbnailError](quicklookthumbnailing/qlthumbnailerror-swift.struct/code.md): Error codes that may be returned when generating a thumbnail.

### Macros

- [QLT_DEPRECATED](quicklookthumbnailing/qlt_deprecated.md)
- [QLT_EXPORT](quicklookthumbnailing/qlt_export.md)
- [QLT_EXTERN_C_BEGIN](quicklookthumbnailing/qlt_extern_c_begin.md)
- [QLT_EXTERN_C_END](quicklookthumbnailing/qlt_extern_c_end.md)
- [QLT_FORMAT_ARG](quicklookthumbnailing/qlt_format_arg.md)
- [QLT_INLINE](quicklookthumbnailing/qlt_inline.md)
- [QLT_LIKELY](quicklookthumbnailing/qlt_likely.md)
- [QLT_NOINLINE](quicklookthumbnailing/qlt_noinline.md)
- [QLT_PRIVATE_EXPORT](quicklookthumbnailing/qlt_private_export.md)
- [QLT_UNLIKELY](quicklookthumbnailing/qlt_unlikely.md)
- [QLT_WEAK_EXPORT](quicklookthumbnailing/qlt_weak_export.md)
