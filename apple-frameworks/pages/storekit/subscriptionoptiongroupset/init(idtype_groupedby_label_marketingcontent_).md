> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptiongroupset/init(idtype:groupedby:label:marketingcontent:)](https://developer.apple.com/documentation/storekit/subscriptionoptiongroupset/init(idtype:groupedby:label:marketingcontent:))

# init(idType:groupedBy:label:marketingContent:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(idType: GroupID.Type = GroupID.self, groupedBy transform: @escaping (Product) -> GroupID, @ViewBuilder label: @escaping (GroupID) -> Label, @ViewBuilder marketingContent: @escaping (GroupID) -> MarketingContent)
```

## See Also

### Creating subscription option group sets

- [init(idType:groupedBy:label:)](init%28idtype_groupedby_label_%29.md)
