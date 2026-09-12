> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intenturlrepresentation](https://developer.apple.com/documentation/appintents/intenturlrepresentation)

# IntentURLRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The type that provides the URL for an app intent.

## Declaration

```swift
struct IntentURLRepresentation<Intent> where Intent : AppIntent
```

<a id="overview"></a>

## Overview

If you adopt the [URLRepresentableIntent](urlrepresentableintent.md) protocol in an app intent, use this type to build the URL for your app intent. Construct the type as a Swift string that contains characters suitable for use in a URL. To incorporate content from your app intent’s parameters into the URL, include a key path to the parameter in your string. The following example provides the URL for a specific page of a website. Before returning the URL, this type replaces the `\(\.$page)` key path with the value in the `page` parameter.

```swift
struct OpenAppleDotCom: URLRepresentableIntent {
   static var urlRepresentation: URLRepresentation = "https://www.apple.com/\(\.$page)"

   @Parameter(title: "Page")
   var page: String

   static var title: LocalizedStringResource = "Open Apple website"
}
```

Make sure the parameters you include in your URL representation contain a URL-friendly type. The system automatically converts parameters of type [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), and [URL](../foundation/url.md) to values suitable for inclusion in a URL. To incorporate other types, implement the [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md) protocol in the type.

## Topics

### Initializers

- [init(\_:)](intenturlrepresentation/init%28__%29.md): Creates a URL representation for an app intent using the provided Swift string.

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### Universal link navigation

- [URLRepresentableIntent](urlrepresentableintent.md): An interface you add to an app intent type so the system can handle it like a universal link.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
