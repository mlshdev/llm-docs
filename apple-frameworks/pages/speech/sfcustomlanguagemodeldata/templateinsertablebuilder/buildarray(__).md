> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/templateinsertablebuilder/buildarray(_:)](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/templateinsertablebuilder/buildarray(_:))

# buildArray(\_:)

**Framework:** Speech  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

Enables support for `for..in` loops.

## Declaration

```swift
static func buildArray(_ components: [any TemplateInsertable]) -> any TemplateInsertable
```

## See Also

### Result builder methods

- [buildBlock(\_:)](buildblock%28__%29.md): Combines statement blocks into a single product.
- [buildEither(first:)](buildeither%28first_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildEither(second:)](buildeither%28second_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildOptional(\_:)](buildoptional%28__%29.md): Enables support for `if` statements that do not have an `else` clause.
