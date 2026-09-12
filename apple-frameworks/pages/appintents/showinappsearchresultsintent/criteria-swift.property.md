> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/showinappsearchresultsintent/criteria-swift.property](https://developer.apple.com/documentation/appintents/showinappsearchresultsintent/criteria-swift.property)

# criteria

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

The information to use when performing the search.

## Declaration

```swift
var criteria: Self.Criteria { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to get the search terms or other criteria to use when you perform a search. You specify the search criteria you support when you define your custom type. For example, set the type of this property to [StringSearchCriteria](../stringsearchcriteria.md) to match items against a string value.

## See Also

### Providing the search criteria

- [Criteria](criteria-swift.associatedtype.md)
- [SearchCriteria](../searchcriteria.md): An interface for defining the criteria to use when searching your app’s content.
