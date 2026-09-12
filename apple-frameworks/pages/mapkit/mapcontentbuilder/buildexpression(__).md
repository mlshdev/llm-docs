> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcontentbuilder/buildexpression(_:)](https://developer.apple.com/documentation/mapkit/mapcontentbuilder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Builds an expression within the map content builder.

## Declaration

```swift
static func buildExpression<Content>(_ content: Content) -> Content where Content : MapContent
```

## Parameters

- `content`: The map builder content the expression builder operates on.

<a id="return-value"></a>

## Return Value

Returns the conditional map content that meets the conditions the content builder expresses.

## See Also

### Conditionally building map content

- [buildEither(first:)](buildeither%28first_%29.md): Compares content in a multistatement closure, resulting in use of the conditional content if the first argument you provide evaluates to true.
- [buildEither(second:)](buildeither%28second_%29.md): Compares content in a multistatement closure, resulting in use of the conditional content if the second argument you provide evaluates to true.
- [buildIf(\_:)](buildif%28__%29.md): Compares content in a multistatement closure, that produces an optional view that’s visible if the argument you provide evaluates to true.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md): Provides support for “if” statements with “available” macro clauses in multi-statement closures, producing conditional content for the “then” branch, such the conditionally-available branch.
