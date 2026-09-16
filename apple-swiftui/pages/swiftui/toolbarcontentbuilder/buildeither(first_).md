> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbarcontentbuilder/buildeither(first:)

# buildEither(first:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalContent<TrueContent, FalseContent> where TrueContent : CustomizableToolbarContent, FalseContent : CustomizableToolbarContent
```

## See Also

### Building conditional toolbar content

- [buildIf(\_:)](buildif%28__%29.md)
- [buildEither(second:)](buildeither%28second_%29.md)
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the builder.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
