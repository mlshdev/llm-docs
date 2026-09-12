> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/transferable/exportedcontenttypes(visibility:)](https://developer.apple.com/documentation/coretransferable/transferable/exportedcontenttypes(visibility:))

# exportedContentTypes(visibility:)

**Framework:** Core Transferable  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The types that the instance of a `Transferable` is able to provide a representation for.

## Declaration

```swift
static func exportedContentTypes(visibility: TransferRepresentationVisibility = .all) -> [UTType]
```
