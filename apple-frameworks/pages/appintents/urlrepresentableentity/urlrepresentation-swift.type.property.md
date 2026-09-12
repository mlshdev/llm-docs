> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/urlrepresentableentity/urlrepresentation-swift.type.property](https://developer.apple.com/documentation/appintents/urlrepresentableentity/urlrepresentation-swift.type.property)

# urlRepresentation

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The URL representation of the app entity.

## Declaration

```swift
static var urlRepresentation: Self.URLRepresentation { get }
```

<a id="discussion"></a>

## Discussion

Use this property to store the URL for your app entity. When setting the value of this property, you can use a combination of static text and placeholder values to generate the final URL. The following code creates a representation for the entity that includes its unique ID:

```swift
struct MyAppData: AppEntity, URLRepresentableEntity {
    static let defaultQuery = MyAppDataQuery()

    @Property(title: "Content ID")
    var contentID: String

    static var urlRepresentation = URLRepresentation("https://example.com/note=\(.$contentID)")
}
```

## Default Implementations

### URLRepresentableEntity Implementations

- [urlRepresentation](urlrepresentation-swift.property.md)
