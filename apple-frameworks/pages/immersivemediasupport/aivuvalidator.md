> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/aivuvalidator](https://developer.apple.com/documentation/immersivemediasupport/aivuvalidator)

# AIVUValidator

**Framework:** Immersive Media Support  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

A type to validate existing AIVU files to ensure that they meet the minimum requirements for AIV.

## Declaration

```swift
struct AIVUValidator
```

<a id="overview"></a>

## Overview

An AIVU is a standalone media file with the one or more video and audio tracks, and AIV required static and dynamic metadata.

## Topics

### Type Methods

- [validate(url:)](aivuvalidator/validate%28url_%29.md): Validates the AIVU file given its URL. It throws an error message with error details, if any.
