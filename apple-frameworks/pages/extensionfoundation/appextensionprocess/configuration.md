> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionprocess/configuration](https://developer.apple.com/documentation/extensionfoundation/appextensionprocess/configuration)

# AppExtensionProcess.Configuration

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

A structure that holds the identity of an app extension and process-related details.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

This type manages the configuration details you use to create an [AppExtensionProcess](../appextensionprocess.md) structure. Create an instance of this type and initialize it with the identity of the app extension you want and a closure to run if the app extension terminates unexpectedly.

## Topics

### Creating the configuration structure

- [init(appExtensionIdentity:onInterruption:)](configuration/init%28appextensionidentity_oninterruption_%29.md)

### Responding to process interruptions

- [onInterruption](configuration/oninterruption.md): The closure to run if the app extension’s process exits unexpectedly.

### Getting the app-extension details

- [appExtensionIdentity](configuration/appextensionidentity.md): The identifying information for the app extension you want to launch.

## See Also

### Creating the app-extension process

- [init(configuration:)](init%28configuration_%29-2g0cy.md): Finds an existing process for the specified app extension or creates a new one synchronously.
- [init(configuration:)](init%28configuration_%29-38zf.md): Finds an existing process for the specified app extension or creates a new one asynchronously.
