> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/datainsertablebuilder/buildoptional(_:)

# buildOptional(\_:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Enables support for `if` statements that do not have an `else` clause.

## Declaration

```swift
static func buildOptional(_ component: (any DataInsertable)?) -> any DataInsertable
```

## See Also

### Result builder methods

- [buildArray(\_:)](buildarray%28__%29.md): Enables support for `for..in` loops.
- [buildBlock(\_:)](buildblock%28__%29.md): Combines statement blocks into a single product.
- [buildEither(first:)](buildeither%28first_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildEither(second:)](buildeither%28second_%29.md): Enables support for `if-else` and `switch` constructs.
