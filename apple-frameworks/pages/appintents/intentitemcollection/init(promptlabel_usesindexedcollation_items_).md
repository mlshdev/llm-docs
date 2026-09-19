> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentitemcollection/init(promptlabel:usesindexedcollation:items:)

# init(promptLabel:usesIndexedCollation:items:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Create a `ItemCollection` containing `Items`, or one or more `Sections`.

## Declaration

```swift
init(promptLabel: LocalizedStringResource? = nil, usesIndexedCollation: Bool = false, items: [Result]) where Result : DisplayRepresentable
```
