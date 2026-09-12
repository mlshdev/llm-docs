> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/init(_:)](https://developer.apple.com/documentation/foundation/nspredicate/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a predicate by converting an existing predicate.

## Declaration

```swift
convenience init?<Input>(_ predicate: Predicate<Input>) where Input : NSObject
```

## Parameters

- `predicate`: The predicate to convert.

<a id="return-value"></a>

## Return Value

The converted predicate, or `nil` if conversion fails.

<a id="Discussion"></a>

## Discussion

Only a subset of predicates that can be expressed by [Predicate](../predicate.md) are convertible to [NSPredicate](../nspredicate.md). Predicates that include operations like the following can’t be converted:

- Accessing key paths for properties that aren’t exposed to the Objective-C runtime.
- Capturing values of types that aren’t supported by `NSPredicate`, like custom Swift structures.
- Using some functions or operators, like performing collection operations on a nonstring value.

## See Also

### Creating a Predicate

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [init(fromMetadataQueryString:)](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.
