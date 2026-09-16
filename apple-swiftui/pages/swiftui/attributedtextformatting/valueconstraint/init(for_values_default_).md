> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/attributedtextformatting/valueconstraint/init(for:values:default:)

# init(for:values:default:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a definition that constrains an attribute’s value to a defined set of allowed values.

## Declaration

```swift
init(for attribute: AttributeKey.Type, values allowedValues: Set<AttributeKey.Value?>, default defaultValue: AttributeKey.Value?)
```

## Parameters

- `attribute`: An attribute to constrain to a set of allowed values.
- `allowedValues`: A set of values that are permitted.
- `defaultValue`: A single permitted value that is used to replace any values that are not in the set of `allowedValues`.
