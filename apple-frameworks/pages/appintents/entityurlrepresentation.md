> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityurlrepresentation](https://developer.apple.com/documentation/appintents/entityurlrepresentation)

# EntityURLRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type that provides the URL for an app entity.

## Declaration

```swift
struct EntityURLRepresentation<Entity> where Entity : AppEntity
```

<a id="overview"></a>

## Overview

If you adopt the [URLRepresentableEntity](urlrepresentableentity.md) protocol in an app entity, use this type to build the URL for your entity. Construct the type as a Swift string that contains characters suitable for use in a URL. To incorporate content from your app entity’s properties into the URL, include a key path to the property in your string. The following example shows an app entity that represents a specific inventory item. Before returning the URL, this type replaces the `\(\.$contentID)` key path with the value in the `contentID` property.

```swift
struct MyAppData: AppEntity, URLRepresentableEntity {
    static let defaultQuery = MyAppDataQuery()

    @Property(title: "Content ID")
    var contentID: String

    static var urlRepresentation = URLRepresentation("https://example.com/note=\(.$contentID)")
}
```

Make sure the properties you include in your URL representation contain a URL-friendly type. The system automatically converts properties of type [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), and [URL](../foundation/url.md) to values suitable for inclusion in a URL. To incorporate other types, implement the [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md) protocol in the type.

## Topics

### Initializers

- [init(\_:)](entityurlrepresentation/init%28__%29.md): Creates a URL representation for an app entity using the provided Swift string.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### Universal link navigation

- [URLRepresentableEntity](urlrepresentableentity.md): An interface you apply to an app entity type so the system can handle it like a universal link.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
