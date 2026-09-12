> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentity/defaultquery-4khg7](https://developer.apple.com/documentation/appintents/appentity/defaultquery-4khg7)

# defaultQuery

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The default query to use to retrieve entity property instances.

## Declaration

```swift
static var defaultQuery: Self.DefaultQuery { get }
```

## Mentioned In

- [Defining app entities for your custom data types](../defining-app-entities-for-your-custom-data-types.md)

<a id="discussion"></a>

## Discussion

You can create a query that uses identifier, name and more. For additional information, see [Query](../../swiftdata/query.md).

## Default Implementations

### AppEntity Implementations

- [defaultQuery](defaultquery-3qobd.md): Conforms when `Self` conforms to `RawRepresentable` and `ID` is `Self.RawValue`.
- [defaultQuery](defaultquery-8vl7p.md)

## See Also

### Making the entity queryable

- [DefaultQuery](defaultquery-swift.associatedtype.md)
- [defaultResolverSpecification](defaultresolverspecification-2dpf2.md)
- [defaultResolverSpecification](defaultresolverspecification-589eq.md): Conforms when `Self` conforms to `AppEnum`.
