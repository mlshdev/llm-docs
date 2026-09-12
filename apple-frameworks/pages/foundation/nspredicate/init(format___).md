> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/init(format:_:)](https://developer.apple.com/documentation/foundation/nspredicate/init(format:_:))

# init(format:\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by substituting the values in an argument list into a format string and parsing the result.

## Declaration

```swift
convenience init(format predicateFormat: String, _ args: any CVarArg...)
```

## Parameters

- `predicateFormat`: The format string for the new predicate.
- `args`: The arguments to substitute into `predicateFormat`.

## See Also

### Creating a Predicate

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](init%28__%29.md): Creates a predicate by converting an existing predicate.
- [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [init(fromMetadataQueryString:)](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.
