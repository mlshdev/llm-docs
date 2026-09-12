> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/enumurlrepresentation](https://developer.apple.com/documentation/appintents/enumurlrepresentation)

# EnumURLRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type that provides the URL for an app enum.

## Declaration

```swift
struct EnumURLRepresentation<Enum> where Enum : AppEnum
```

<a id="overview"></a>

## Overview

If you adopt the [URLRepresentableEnum](urlrepresentableenum.md) protocol in an app enum, use this type to build the URL for your type. Construct the type as a Swift string that contains characters suitable for use in a URL. To adjust the URL dynamically for your content, include a reference to your app enum value as part of the content. The following example shows an app enum type that includes the enum’s current value in the final URL:

```swift
enum Destination: String, AppEnum, URLRepresentableEnum {
   case root
   case locationServices

   static var urlRepresentation = URLRepresentation("https://example.com/root=\(.rawValue)")
}
```

If you need to differentiate URLs by more than the enum’s current value, provide an array of values for your representation instead. The following example shows the same enum from the previous example, but with distinct strings for each case.

```swift
enum Destination: String, AppEnum, URLRepresentableEnum {
   case root
   case locationServices

   static var urlRepresentation = URLRepresentation([
      .root: "https://example.com/link1=\(.root)",
      .locationServices: "https://example.com/link2=\(.locationServices)"
   ])
}
```

Make sure you define your app enum type using a URL-friendly value. The system automatically converts values of type [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), and [URL](../foundation/url.md) to values suitable for inclusion in a URL.

## Topics

### Structures

- [EnumURLRepresentation.EnumSingleURLRepresentation](enumurlrepresentation/enumsingleurlrepresentation.md): Conforms when `Enum` conforms to `AppEnum`.

### Initializers

- [init(\_:)](enumurlrepresentation/init%28__%29-1odm.md): Creates a URL representation for an app enum using the provided dictionary.
- [init(\_:)](enumurlrepresentation/init%28__%29-6p999.md): Creates a URL representation for an app enum using the provided Swift string.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### Universal link navigation

- [URLRepresentableEnum](urlrepresentableenum.md): An interface you apply to an app enum type so the system can handle it like a universal link.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
