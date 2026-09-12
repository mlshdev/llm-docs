> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/persistentmodel/getvalue(forkey:)-299oe](https://developer.apple.com/documentation/swiftdata/persistentmodel/getvalue(forkey:)-299oe)

# getValue(forKey:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
func getValue<Value, OtherModel>(forKey: KeyPath<Self, Value>) -> Value where Value : Decodable, Value : RelationshipCollection, OtherModel == Value.PersistentElement
```

## See Also

### Accessing a value by key path

- [getValue(forKey:)](getvalue%28forkey_%29-3o59k.md)
- [getValue(forKey:)](getvalue%28forkey_%29-4cs0c.md)
- [getValue(forKey:)](getvalue%28forkey_%29-5m792.md)
- [getValue(forKey:)](getvalue%28forkey_%29-998oq.md)
- [getTransformableValue(forKey:)](gettransformablevalue%28forkey_%29.md)
