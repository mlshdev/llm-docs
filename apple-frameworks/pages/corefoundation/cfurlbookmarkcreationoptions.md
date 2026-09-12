> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlbookmarkcreationoptions](https://developer.apple.com/documentation/corefoundation/cfurlbookmarkcreationoptions)

# CFURLBookmarkCreationOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Type for bookmark data creation options.

## Declaration

```swift
struct CFURLBookmarkCreationOptions
```

<a id="overview"></a>

## Overview

See [Bookmark Data Creation Options](bookmark-data-creation-options.md) for possible values.

## Topics

### Initializers

- [init(rawValue:)](cfurlbookmarkcreationoptions/init%28rawvalue_%29.md)

### Type Properties

- [minimalBookmarkMask](cfurlbookmarkcreationoptions/minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [preferFileIDResolutionMask](cfurlbookmarkcreationoptions/preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [securityScopeAllowOnlyReadAccess](cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess.md): When combined with the [withSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.
- [suitableForBookmarkFile](cfurlbookmarkcreationoptions/suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [withSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [withoutImplicitSecurityScope](cfurlbookmarkcreationoptions/withoutimplicitsecurityscope.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Bookmark Data Types

- [CFURLBookmarkFileCreationOptions](cfurlbookmarkfilecreationoptions.md): Type for bookmark file creation options.
- [CFURLBookmarkResolutionOptions](cfurlbookmarkresolutionoptions.md): Type for bookmark data resolution options.

# CFURLBookmarkCreationOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Type for bookmark data creation options.

## Declaration

```objectivec
enum CFURLBookmarkCreationOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

See [Bookmark Data Creation Options](bookmark-data-creation-options.md) for possible values.

## Topics

### Enumeration Cases

- [kCFURLBookmarkCreationMinimalBookmarkMask](cfurlbookmarkcreationoptions/minimalbookmarkmask.md): Specifies that an alias created with the bookmark data be created with minimal information, which may make it smaller but still able to resolve in certain ways.
- [kCFURLBookmarkCreationPreferFileIDResolutionMask](cfurlbookmarkcreationoptions/preferfileidresolutionmask.md): Deprecated. Specifies that an alias created with the bookmark data prefers resolving with its embedded file ID.
- [kCFURLBookmarkCreationSecurityScopeAllowOnlyReadAccess](cfurlbookmarkcreationoptions/securityscopeallowonlyreadaccess.md): When combined with the [kCFURLBookmarkCreationWithSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md) option, specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read-only access to a file-system resource; for use in an app that adopts App Sandbox.
- [kCFURLBookmarkCreationSuitableForBookmarkFile](cfurlbookmarkcreationoptions/suitableforbookmarkfile.md): Specifies that the bookmark data include properties required to create Finder alias files.
- [kCFURLBookmarkCreationWithSecurityScope](cfurlbookmarkcreationoptions/withsecurityscope.md): Specifies that you want to create a security-scoped bookmark that, when resolved, provides a security-scoped URL allowing read/write access to a file-system resource; for use in an app that adopts App Sandbox.
- [kCFURLBookmarkCreationWithoutImplicitSecurityScope](cfurlbookmarkcreationoptions/withoutimplicitsecurityscope.md)

## See Also

### Bookmark Data Types

- [CFURLBookmarkFileCreationOptions](cfurlbookmarkfilecreationoptions.md): Type for bookmark file creation options.
- [CFURLBookmarkResolutionOptions](cfurlbookmarkresolutionoptions.md): Type for bookmark data resolution options.
