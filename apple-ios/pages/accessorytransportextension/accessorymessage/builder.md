> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorymessage/builder](https://developer.apple.com/documentation/accessorytransportextension/accessorymessage/builder)

# AccessoryMessage.Builder

**Framework:** Accessory Transport Extension  
**Kind:** Structure  
**Availability:** iOS 26.5+

A builder that constructs accessory messages declaratively.

## Declaration

```swift
@resultBuilder struct Builder
```

## Topics

### Building messages

- [buildBlock(\_:)](builder/buildblock%28__%29.md): Builds an accessory message from one or more payload components.

### Type Methods - generated

- [buildEither(first:)](builder/buildeither%28first_%29.md): Builds an accessory message from the first branch of a conditional.
- [buildEither(second:)](builder/buildeither%28second_%29.md): Builds an accessory message from the second branch of a conditional.
- [buildExpression(\_:)](builder/buildexpression%28__%29.md): Builds an accessory message from a payload expression.
- [buildOptional(\_:)](builder/buildoptional%28__%29.md): Builds an accessory message from an optional component.

## See Also

### Creating messages

- [init(\_:)](init%28__%29.md): Initializes an accessory message using a result builder closure.
