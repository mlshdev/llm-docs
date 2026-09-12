> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/context](https://developer.apple.com/documentation/packagedescription/context)

# Context

**Framework:** PackageDescription  
**Kind:** Structure  
**Availability:** SwiftPM 5.6+

The context information for a Swift package.

## Declaration

```swift
struct Context
```

<a id="overview"></a>

## Overview

The context encapsulates states that are known when Swift Package Manager interprets the package manifest, for example the location in the file system where the current package resides.

## Topics

### Type Properties

- [environment](context/environment.md): Snapshot of the system environment variables.
- [gitInformation](context/gitinformation.md): Information about the git status of a given package, if available.
- [packageDirectory](context/packagedirectory.md): The directory that contains `Package.swift`.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Creating a Package

- [Package](package.md): The configuration of a Swift package.
