> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csimportextension](https://developer.apple.com/documentation/corespotlight/csimportextension)

# CSImportExtension (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that provides searchable attributes for file types that the app supports.

## Declaration

```swift
class CSImportExtension
```

<a id="overview"></a>

## Overview

To create a Spotlight File Import extension, add a target to your app using the Spotlight File Import extension template in Xcode. The template project contains a subclass of `CSImportExtension`. To index content on a user’s device, Core Spotlight loads your extension and invokes the [update(\_:forFileAt:)](csimportextension/update%28__forfileat_%29.md) method. Core Spotlight passes a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) and URL of a file to the extension, and you set properties that are relevant for the file.

> **Important**

> Spotlight File Import extensions don’t provide functionality in macOS. To make custom files available to Spotlight in macOS, create a Spotlight importer plugin. For more information, refer to [Spotlight Importer Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/MDImporters/MDImporters.html#//apple_ref/doc/uid/TP40001267).

Typically, your extension loads details about the file and uses that information to set properties of the attribute set. For example, if your app contains files that are notes the user creates, it does the following:

```swift
class NoteImporter: CSImportExtension {
    override func update(_ attributes: CSSearchableItemAttributeSet, forFileAt contentURL: URL) throws {
        // NoteDetails is an app-defined object that encapsulates a note.
        guard let note = NoteDetails.noteDetails(for: contentURL) else {
            throw NoteError.noteNotFound
        }
        attributes.title = note.title
        attributes.contentCreationDate = note.creationDate
        attributes.userCreated = NSNumber(booleanLiteral: true)
    }
}
```

> **Important**

>  Core Spotlight indexes files in batches and may call [update(\_:forFileAt:)](csimportextension/update%28__forfileat_%29.md) simultaneously on multiple queues with different values of `contentURL`.

To specify the file types your app supports, set the value of [CSSupportedContentTypes](../bundleresources/information-property-list/nsextension/nsextensionattributes/cssupportedcontenttypes.md) in your extension’s `Info.plist` file to an array of file type identifiers. For more information about file type identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md). The app in the previous example configures the extension’s `Info.plist` as follows:

```swift
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.spotlight.import</string>
    <key>NSExtensionPrincipalClass</key>
    <string>FileImporter</string>
    <key>NSExtensionAttributes</key>
    <dict>
        <key>CSSupportedContentTypes</key>
        <array>
            <string>com.example.mynoteapp.note</string>
        </array>
    </dict>
</dict>

```

## Topics

### Providing searchable attributes

- [update(\_:forFileAt:)](csimportextension/update%28__forfileat_%29.md): Provides searchable attributes for a file at the specified URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spotlight app extensions

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md): Create an app extension to maintain your app’s indexes and regenerate them as needed.
- [CSIndexExtensionRequestHandler](csindexextensionrequesthandler.md): An interface that implements an index-maintenance app extension.

# CSImportExtension (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

An object that provides searchable attributes for file types that the app supports.

## Declaration

```objectivec
@interface CSImportExtension : NSObject
```

<a id="overview"></a>

## Overview

To create a Spotlight File Import extension, add a target to your app using the Spotlight File Import extension template in Xcode. The template project contains a subclass of `CSImportExtension`. To index content on a user’s device, Core Spotlight loads your extension and invokes the [updateAttributes:forFileAtURL:error:](csimportextension/update%28__forfileat_%29.md) method. Core Spotlight passes a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) and URL of a file to the extension, and you set properties that are relevant for the file.

> **Important**

> Spotlight File Import extensions don’t provide functionality in macOS. To make custom files available to Spotlight in macOS, create a Spotlight importer plugin. For more information, refer to [Spotlight Importer Programming Guide](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/MDImporters/MDImporters.html#//apple_ref/doc/uid/TP40001267).

Typically, your extension loads details about the file and uses that information to set properties of the attribute set. For example, if your app contains files that are notes the user creates, it does the following:

```swift
class NoteImporter: CSImportExtension {
    override func update(_ attributes: CSSearchableItemAttributeSet, forFileAt contentURL: URL) throws {
        // NoteDetails is an app-defined object that encapsulates a note.
        guard let note = NoteDetails.noteDetails(for: contentURL) else {
            throw NoteError.noteNotFound
        }
        attributes.title = note.title
        attributes.contentCreationDate = note.creationDate
        attributes.userCreated = NSNumber(booleanLiteral: true)
    }
}
```

> **Important**

>  Core Spotlight indexes files in batches and may call [updateAttributes:forFileAtURL:error:](csimportextension/update%28__forfileat_%29.md) simultaneously on multiple queues with different values of `contentURL`.

To specify the file types your app supports, set the value of [CSSupportedContentTypes](../bundleresources/information-property-list/nsextension/nsextensionattributes/cssupportedcontenttypes.md) in your extension’s `Info.plist` file to an array of file type identifiers. For more information about file type identifiers, see [Uniform Type Identifiers](../uniformtypeidentifiers.md). The app in the previous example configures the extension’s `Info.plist` as follows:

```swift
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.spotlight.import</string>
    <key>NSExtensionPrincipalClass</key>
    <string>FileImporter</string>
    <key>NSExtensionAttributes</key>
    <dict>
        <key>CSSupportedContentTypes</key>
        <array>
            <string>com.example.mynoteapp.note</string>
        </array>
    </dict>
</dict>

```

## Topics

### Providing searchable attributes

- [updateAttributes:forFileAtURL:error:](csimportextension/update%28__forfileat_%29.md): Provides searchable attributes for a file at the specified URL.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Spotlight app extensions

- [Regenerating your app’s indexes on demand](regenerating-your-app-s-indexes-on-demand.md): Create an app extension to maintain your app’s indexes and regenerate them as needed.
- [CSIndexExtensionRequestHandler](csindexextensionrequesthandler.md): An interface that implements an index-maintenance app extension.
