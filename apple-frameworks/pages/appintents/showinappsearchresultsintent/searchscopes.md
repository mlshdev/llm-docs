> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/showinappsearchresultsintent/searchscopes](https://developer.apple.com/documentation/appintents/showinappsearchresultsintent/searchscopes)

# searchScopes

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

The scope of the search in your app’s content.

## Declaration

```swift
static var searchScopes: Self.Criteria.SearchScopes { get }
```

<a id="discussion"></a>

## Discussion

Use this property to indicate the portions of your content the type searches. The type of this property depends on the search criteria you use. For example, if your app intent supports [StringSearchCriteria](../stringsearchcriteria.md), the value of this type is an array of [StringSearchScope](../stringsearchscope.md) values.

## Default Implementations

### ShowInAppSearchResultsIntent Implementations

- [searchScopes](searchscopes-5p2sw.md): Conforms when `Criteria` is `StringSearchCriteria`. A default value that helps the system understand the scope of an app intent that shows the results of a string-based search.
- [searchScopes](searchscopes-7ve8b.md): Conforms when `Criteria.SearchScopes` is `()`.
