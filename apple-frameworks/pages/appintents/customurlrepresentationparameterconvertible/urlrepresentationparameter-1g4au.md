> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/customurlrepresentationparameterconvertible/urlrepresentationparameter-1g4au](https://developer.apple.com/documentation/appintents/customurlrepresentationparameterconvertible/urlrepresentationparameter-1g4au)

# urlRepresentationParameter

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The string representation of the type’s content.

## Declaration

```swift
var urlRepresentationParameter: String? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to provide a string that describes your custom type. When specifying the string, use Swift interpolated values to incorporate data from any properties of your type, and specify only characters that URLs support. The following example shows a custom type that uses data from multiple properties to generate a string for URLs.

```swift
struct MyCustomType: CustomURLRepresentationParameterConvertible {
   var name: String
   var id: UUID

   var urlRepresentationParameter: String? { "\(name)/\(id)" }
}
```
