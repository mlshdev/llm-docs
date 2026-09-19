> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/backingdata/getvalue(forkey:)-8xj5n

# getValue(forKey:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
func getValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>) -> Value where Value : Decodable, Value : RelationshipCollection, OtherModel == Value.PersistentElement
```
