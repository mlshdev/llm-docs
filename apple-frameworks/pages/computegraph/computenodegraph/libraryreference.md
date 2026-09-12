> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/libraryreference](https://developer.apple.com/documentation/computegraph/computenodegraph/libraryreference)

# ComputeNodeGraph.LibraryReference

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

A Metal library and an optional bundle identifier that locates shader functions.

## Declaration

```swift
struct LibraryReference
```

<a id="overview"></a>

## Overview

Use `addLibrary(_:bundle:)` rather than constructing this type directly.

## Topics

### Initializers

- [init(library:bundle:)](libraryreference/init%28library_bundle_%29.md)

### Instance Properties

- [bundle](libraryreference/bundle.md): The bundle identifier used to scope shader function lookup, or `nil` if the library does not require one.
- [library](libraryreference/library.md): The Metal library containing compiled shader functions.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
