> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appmigrationkit/resourcesimporting](https://developer.apple.com/documentation/appmigrationkit/resourcesimporting)

# ResourcesImporting

**Framework:** AppMigrationKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A protocol for exporting transportable resources in a streaming archive format.

## Declaration

```swift
protocol ResourcesImporting : AppMigrationExtension
```

<a id="overview"></a>

## Overview

Conform to this protocol in your app extension to import transportable resources: files on disk that can you can copy as-is from the source device without converting to an intermediate transport format.

> **Important**

> In the event of an error, the migration system clears the data container of the containing app to prevent apps receiving only partially imported state. However, the system doesn’t clear app group containers. To handle this situation, have your app handle errors by clearing any app group containers prior to importing your content.

## Topics

### Importing resources

- [importResources(at:request:)](resourcesimporting/importresources%28at_request_%29.md): Imports resources to the app, in response to a request from the migration system.
- [ResourcesImportRequest](resourcesimportrequest.md): A type that exposes properties of the resources import request.

### Expressing progress

- [resourcesImportProgress](resourcesimporting/resourcesimportprogress.md): A value to indicate the extension’s progress as it imports resources.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)
- [AppMigrationExtension](appmigrationextension.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
