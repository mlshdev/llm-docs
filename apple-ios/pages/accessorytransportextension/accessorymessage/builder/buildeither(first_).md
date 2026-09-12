> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/builder/buildeither(first:)](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/builder/buildeither(first:))

# buildEither(first:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 26.5+

Builds an accessory message from the first branch of a conditional.

## Declaration

```swift
static func buildEither(first component: AccessoryMessage) -> AccessoryMessage
```

## Parameters

- `component`: An accessory message from the first branch.

## See Also

### Type Methods - generated

- [buildEither(second:)](buildeither%28second_%29.md): Builds an accessory message from the second branch of a conditional.
- [buildExpression(\_:)](buildexpression%28__%29.md): Builds an accessory message from a payload expression.
- [buildOptional(\_:)](buildoptional%28__%29.md): Builds an accessory message from an optional component.
