> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/userengaged(_:visibleitems:interaction:)](https://developer.apple.com/documentation/corespotlight/csuserquery/userengaged(_:visibleitems:interaction:))

# userEngaged(\_:visibleItems:interaction:)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Notifies the system that someone engaged with a specific search result in your app’s interface.

## Declaration

```swift
func userEngaged(_ item: CSUserQuery.Item, visibleItems: [CSUserQuery.Item], interaction: CSUserQuery.UserInteractionKind)
```

## Parameters

- `item`: The search result that someone chose.
- `visibleItems`: The set of search results your app was displaying.
- `interaction`: The type of interaction with the item. Use this parameter to indicate whether the person selected the item or interacted with it in another way.

<a id="Discussion"></a>

## Discussion

When someone selects or interacts with a specific search result in your app’s UI, call this method to tell Spotlight about the interaction. Reporting this type of engagement helps Spotlight deliver better results more quickly in future queries. It also improves the ranked results Spotlight delivers to your app. The system keeps all information about these interactions on the current device

## See Also

### Improving the quality of ranked results

- [userEngaged(\_:visibleSuggestions:interaction:)](userengaged%28__visiblesuggestions_interaction_%29.md): Notifies the system that someone engaged with a specific text completion in your app’s interface.
- [CSUserQuery.UserInteractionKind](userinteractionkind.md): Constants that indicate how someone engaged with search-related content.
