> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/init(frommetadataquerystring:)](https://developer.apple.com/documentation/foundation/nspredicate/init(frommetadataquerystring:))

# init(fromMetadataQueryString:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.9+

Creates a predicate with a metadata query string.

## Declaration

```swift
init?(fromMetadataQueryString queryString: String)
```

## Parameters

- `queryString`: A metadata query string.

<a id="Discussion"></a>

## Discussion

For details of the format of the query string, see [File Metadata Query Expression Syntax](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/QueryFormat.html#//apple_ref/doc/uid/TP40001849).

## See Also

### Creating a Predicate

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](init%28__%29.md): Creates a predicate by converting an existing predicate.
- [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.

# predicateFromMetadataQueryString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.9+

Creates a predicate with a metadata query string.

## Declaration

```objectivec
+ (NSPredicate *) predicateFromMetadataQueryString:(NSString *) queryString;
```

## Parameters

- `queryString`: A metadata query string.

<a id="Discussion"></a>

## Discussion

For details of the format of the query string, see [File Metadata Query Expression Syntax](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/SpotlightQuery/Concepts/QueryFormat.html#//apple_ref/doc/uid/TP40001849).

## See Also

### Creating a Predicate

- [predicateWithFormat:](predicatewithformat_.md): Creates and returns a new predicate formed by creating a new string with a specified format and parsing the result.
- [predicateWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [predicateWithFormat:arguments:](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [predicateWithSubstitutionVariables:](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [predicateWithValue:](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [predicateWithBlock:](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
