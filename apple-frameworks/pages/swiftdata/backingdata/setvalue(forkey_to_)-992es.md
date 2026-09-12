> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/backingdata/setvalue(forkey:to:)-992es](https://developer.apple.com/documentation/swiftdata/backingdata/setvalue(forkey:to:)-992es)

# setValue(forKey:to:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
func setValue<Value, OtherModel>(forKey: KeyPath<Self.Model, Value>, to newValue: Value) where Value : RelationshipCollection, OtherModel == Value.PersistentElement
```
