> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlbookmarkresolutionoptions](https://developer.apple.com/documentation/corefoundation/cfurlbookmarkresolutionoptions)

# CFURLBookmarkResolutionOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Type for bookmark data resolution options.

## Declaration

```swift
struct CFURLBookmarkResolutionOptions
```

<a id="overview"></a>

## Overview

See [Bookmark Data Resolution Options](bookmark-data-resolution-options.md) for possible values.

## Topics

### Initializers

- [init(rawValue:)](cfurlbookmarkresolutionoptions/init%28rawvalue_%29.md)

### Type Properties

- [cfBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutmountingmask.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [cfBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutuimask.md): Specifies that no UI feedback accompany resolution of the bookmark data.
- [cfurlBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [cfurlBookmarkResolutionWithoutImplicitStartAccessing](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutimplicitstartaccessing.md)
- [cfurlBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutmountingmask.md)
- [cfurlBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutuimask.md)

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

- [CFURLBookmarkCreationOptions](cfurlbookmarkcreationoptions.md): Type for bookmark data creation options.
- [CFURLBookmarkFileCreationOptions](cfurlbookmarkfilecreationoptions.md): Type for bookmark file creation options.

# CFURLBookmarkResolutionOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Type for bookmark data resolution options.

## Declaration

```objectivec
enum CFURLBookmarkResolutionOptions : CFOptionFlags;
```

<a id="overview"></a>

## Overview

See [Bookmark Data Resolution Options](bookmark-data-resolution-options.md) for possible values.

## Topics

### Enumeration Cases

- [kCFBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutmountingmask.md): Specifies that no volume should be mounted during resolution of the bookmark data.
- [kCFBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfbookmarkresolutionwithoutuimask.md): Specifies that no UI feedback accompany resolution of the bookmark data.
- [kCFURLBookmarkResolutionWithSecurityScope](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithsecurityscope.md): Specifies that the security scope, applied to the bookmark when it was created, should be used during resolution of the bookmark data.
- [kCFURLBookmarkResolutionWithoutImplicitStartAccessing](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutimplicitstartaccessing.md)
- [kCFURLBookmarkResolutionWithoutMountingMask](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutmountingmask.md)
- [kCFURLBookmarkResolutionWithoutUIMask](cfurlbookmarkresolutionoptions/cfurlbookmarkresolutionwithoutuimask.md)

## See Also

### Bookmark Data Types

- [CFURLBookmarkCreationOptions](cfurlbookmarkcreationoptions.md): Type for bookmark data creation options.
- [CFURLBookmarkFileCreationOptions](cfurlbookmarkfilecreationoptions.md): Type for bookmark file creation options.
