> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/storecontentbuilder/buildeither(first:)](https://developer.apple.com/documentation/storekit/storecontentbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalContent<TrueContent, FalseContent> where TrueContent : StoreContent, FalseContent : StoreContent
```

## See Also

### Building store content

- [buildBlock(\_:)](buildblock%28__%29.md)
- [buildEither(second:)](buildeither%28second_%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md)
- [buildIf(\_:)](buildif%28__%29.md)
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
- [TupleStoreContent](../tuplestorecontent.md)
