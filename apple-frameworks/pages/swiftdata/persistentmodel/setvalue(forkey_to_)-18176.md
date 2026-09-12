> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-18176](https://developer.apple.com/documentation/swiftdata/persistentmodel/setvalue(forkey:to:)-18176)

# setValue(forKey:to:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

## Declaration

```swift
func setValue<Value, OtherModel>(forKey: KeyPath<Self, Value>, to newValue: Value) where Value : Encodable, Value : RelationshipCollection, OtherModel == Value.PersistentElement
```

## See Also

### Modifying a value by key path

- [setValue(forKey:to:)](setvalue%28forkey_to_%29-3mmp2.md)
- [setValue(forKey:to:)](setvalue%28forkey_to_%29-3uqwc.md)
- [setValue(forKey:to:)](setvalue%28forkey_to_%29-8wepb.md)
- [setValue(forKey:to:)](setvalue%28forkey_to_%29-xt24.md)
- [setTransformableValue(forKey:to:)](settransformablevalue%28forkey_to_%29.md)
