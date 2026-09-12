> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontentbuilder/buildeither(first:)](https://developer.apple.com/documentation/mapkit/mapcontentbuilder/buildeither(first:))

# buildEither(first:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Compares content in a multistatement closure, resulting in use of the conditional content if the first argument you provide evaluates to  true.

## Declaration

```swift
static func buildEither<TrueContent, FalseContent>(first: TrueContent) -> _ConditionalMapContent<TrueContent, FalseContent> where TrueContent : MapContent, FalseContent : MapContent
```

## Parameters

- `first`: The content that represents the `true` content element to compare against.

<a id="return-value"></a>

## Return Value

Returns the conditional map content that meets the conditions the content builder expresses.

## See Also

### Conditionally building map content

- [buildEither(second:)](buildeither%28second_%29.md): Compares content in a multistatement closure, resulting in use of the conditional content if the second argument you provide evaluates to true.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an expression within the map content builder.
- [buildIf(\_:)](buildif%28__%29.md): Compares content in a multistatement closure, that produces an optional view that’s visible if the argument you provide evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Provides support for “if” statements with “available” macro clauses in multi-statement closures, producing conditional content for the “then” branch, such the conditionally-available branch.
