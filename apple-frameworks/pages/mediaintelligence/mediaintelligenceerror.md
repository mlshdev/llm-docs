> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/mediaintelligenceerror](https://developer.apple.com/documentation/mediaintelligence/mediaintelligenceerror)

# MediaIntelligenceError

**Framework:** Media Intelligence  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An error that indicates a media analysis operation failed.

## Declaration

```swift
enum MediaIntelligenceError
```

<a id="overview"></a>

## Overview

Framework methods throw this error when they encounter a problem processing a request.

## Topics

### Errors

- [MediaIntelligenceError.faceGroupProcessing](mediaintelligenceerror/facegroupprocessing.md): The framework can’t complete a face grouping operation.
- [MediaIntelligenceError.mediaProcessing](mediaintelligenceerror/mediaprocessing.md): The framework can’t process a media asset.
- [MediaIntelligenceError.resultFetching](mediaintelligenceerror/resultfetching.md): The framework can’t retrieve analysis results.
- [MediaIntelligenceError.workingDirectory](mediaintelligenceerror/workingdirectory.md): The framework can’t access the working directory.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
