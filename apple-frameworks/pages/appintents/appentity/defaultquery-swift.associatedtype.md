> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentity/defaultquery-swift.associatedtype](https://developer.apple.com/documentation/appintents/appentity/defaultquery-swift.associatedtype)

# DefaultQuery

**Framework:** App Intents  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
associatedtype DefaultQuery : EntityQuery where Self.ValueType == Self.DefaultQuery.Entity
```

## See Also

### Making the entity queryable

- [defaultQuery](defaultquery-4khg7.md): The default query to use to retrieve entity property instances.
- [defaultResolverSpecification](defaultresolverspecification-2dpf2.md)
- [defaultResolverSpecification](defaultresolverspecification-589eq.md): Conforms when `Self` conforms to `AppEnum`.
