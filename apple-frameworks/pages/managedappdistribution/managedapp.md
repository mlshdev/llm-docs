> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapp](https://developer.apple.com/documentation/managedappdistribution/managedapp)

# ManagedApp

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

A representation of a managed app.

## Declaration

```swift
struct ManagedApp
```

## Mentioned In

- [Fetching and displaying managed apps](fetching-and-displaying-managed-apps.md)

<a id="overview"></a>

## Overview

[ManagedApp](managedapp.md) represents a managed app that the framework can install. Use an instance of this object to obtain information about the app.

## Topics

### Obtaining general information

- [name](managedapp/name.md): The app’s localized name.
- [subtitle](managedapp/subtitle.md): The app’s localized subtitle.
- [description](managedapp/description.md): The app’s localized description.
- [fileSize](managedapp/filesize.md): The size of the app in bytes.
- [iconURL(fitting:)](managedapp/iconurl%28fitting_%29.md): A URL for the icon of the app.
- [screenshotURLs(fitting:)](managedapp/screenshoturls%28fitting_%29.md): An array of the app’s screenshot URLs.

### Obtaining platform and requirement information

- [platform](managedapp/platform-swift.property.md): The platform of the app.
- [requirements](managedapp/requirements.md): The app’s localized operating system compatibility requirements.
- [ManagedApp.Platform](managedapp/platform-swift.struct.md): The supported platform for the app.

### Obtaining supported languages

- [languages](managedapp/languages.md): The app’s supported languages.
- [metadataLanguage](managedapp/metadatalanguage.md): The language of the localized properties of this managed app.

### Obtaining seller information

- [seller](managedapp/seller.md): The app’s localized seller.
- [developerWebsite](managedapp/developerwebsite.md): The app’s developer website URL.

### Obtaining rating information

- [genres](managedapp/genres.md): The app’s localized genres.
- [contentRating](managedapp/contentrating.md): The app’s content age rating.

### Obtaining privacy and copyright information

- [privacyPolicy](managedapp/privacypolicy.md): The app’s privacy policy URL.
- [copyright](managedapp/copyright.md): The app’s copyright information.
- [licenseAgreement](managedapp/licenseagreement.md): Deprecated. The app’s license agreement URL.

### Obtaining version information

- [version](managedapp/version.md): The app’s version information.
- [releaseNotes](managedapp/releasenotes.md): The app’s localized developer release notes.
- [releaseDate](managedapp/releasedate.md): The app’s release date.

### Instance Properties

- [licenseAgreementText](managedapp/licenseagreementtext.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [Fetching and displaying managed apps](fetching-and-displaying-managed-apps.md): Provide a consistent app presentation when displaying managed apps.
- [ManagedAppLibrary](managedapplibrary.md): A representation of a library of managed apps.
