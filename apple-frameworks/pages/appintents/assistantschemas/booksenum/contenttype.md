> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantschemas/booksenum/contenttype](https://developer.apple.com/documentation/appintents/assistantschemas/booksenum/contenttype)

# contentType

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The content type.

## Declaration

```swift
var contentType: some AssistantSchemas.Enum { get }
```

<a id="Overview"></a>

## Overview

Use Swift macros that generate additional properties and add protocol conformance for your app enum implementation. The following example shows an app enum that conforms to the `.books.contentType` schema:

```swift
@AppEnum(schema: .books.contentType)
enum BookContentType: AppEnum {
    case book
    case pdf

    static var caseDisplayRepresentations: [BookContentType: AppIntents.DisplayRepresentation] = [
        .book: "Book",
        .pdf: "PDF",
    ]
}
 For more information about the `.books` app intent domain,
 see <doc:app-schema-domain-books>.
 For general information about app intent domains, see <doc:making-actions-and-content-discoverable-by-apple-intelligence>.
```
