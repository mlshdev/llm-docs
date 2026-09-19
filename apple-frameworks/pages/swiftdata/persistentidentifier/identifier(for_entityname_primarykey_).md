> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/persistentidentifier/identifier(for:entityname:primarykey:)

# identifier(for:entityName:primaryKey:)

**Framework:** SwiftData  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
static func identifier<T>(for storeIdentifier: String, entityName: String, primaryKey: T) throws -> PersistentIdentifier where T : Comparable, T : CustomStringConvertible, T : Decodable, T : Encodable, T : Hashable
```
