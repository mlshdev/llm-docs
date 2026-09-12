> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/tuplestorecontent](https://developer.apple.com/documentation/storekit/tuplestorecontent)

# TupleStoreContent

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency struct TupleStoreContent<each Content> where repeat each Content : StoreContent
```

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StoreContent](storecontent.md)

## See Also

### Building store content

- [buildBlock(\_:)](storecontentbuilder/buildblock%28__%29.md)
- [buildEither(first:)](storecontentbuilder/buildeither%28first_%29.md)
- [buildEither(second:)](storecontentbuilder/buildeither%28second_%29.md)
- [buildExpression(\_:)](storecontentbuilder/buildexpression%28__%29.md)
- [buildIf(\_:)](storecontentbuilder/buildif%28__%29.md)
- [buildLimitedAvailability(\_:)](storecontentbuilder/buildlimitedavailability%28__%29.md)
