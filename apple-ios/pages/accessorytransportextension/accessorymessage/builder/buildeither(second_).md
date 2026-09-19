> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/builder/buildeither(second:)

# buildEither(second:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 26.5+

Builds an accessory message from the second branch of a conditional.

## Declaration

```swift
static func buildEither(second component: AccessoryMessage) -> AccessoryMessage
```

## Parameters

- `component`: An accessory message from the second branch.

## See Also

### Type Methods - generated

- [buildEither(first:)](buildeither%28first_%29.md): Builds an accessory message from the first branch of a conditional.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an accessory message from a payload expression.
- [buildOptional(\_:)](buildoptional%28__%29.md): Builds an accessory message from an optional component.
