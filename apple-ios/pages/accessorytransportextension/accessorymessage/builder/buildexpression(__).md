> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/builder/buildexpression(_:)](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/builder/buildexpression(_:))

# buildExpression(\_:)

**Framework:** Accessory Transport Extension  
**Kind:** Type Method  
**Availability:** iOS 26.5+

Builds an accessory message from a payload expression.

## Declaration

```swift
static func buildExpression(_ expression: AccessoryMessage.Payload) -> AccessoryMessage
```

## Parameters

- `expression`: A payload to include in the message.

## See Also

### Type Methods - generated

- [buildEither(first:)](buildeither%28first_%29.md): Builds an accessory message from the first branch of a conditional.
- [buildEither(second:)](buildeither%28second_%29.md): Builds an accessory message from the second branch of a conditional.
- [buildOptional(\_:)](buildoptional%28__%29.md): Builds an accessory message from an optional component.
