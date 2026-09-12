> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/convertibletogeneratedcontent/generatedcontent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent/generatedcontent)

# generatedContent

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

This instance represented as generated content.

## Declaration

```swift
var generatedContent: GeneratedContent { get }
```

<a id="discussion"></a>

## Discussion

Conformance to this protocol is provided by the `@Generable` macro. You can provide a manual implementation to map values onto properties using different names. Use the generated content property as shown below, to manually return a new [GeneratedContent](../generatedcontent.md) with the properties you specify.

```swift
struct Person: ConvertibleToGeneratedContent {
   var name: String
   var age: Int

   var generatedContent: GeneratedContent {
       GeneratedContent(properties: [
           "firstName": name,
           "ageInYears": age
       ])
   }
}
```

> **Important**

> If your type also conforms to [ConvertibleFromGeneratedContent](../convertiblefromgeneratedcontent.md), it is critical that this implementation be symmetrical with [init(\_:)](../convertiblefromgeneratedcontent/init%28__%29.md).
