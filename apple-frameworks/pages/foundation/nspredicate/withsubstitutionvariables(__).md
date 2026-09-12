> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/withsubstitutionvariables(_:)](https://developer.apple.com/documentation/foundation/nspredicate/withsubstitutionvariables(_:))

# withSubstitutionVariables(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.

## Declaration

```swift
func withSubstitutionVariables(_ variables: [String : Any]) -> Self
```

## Parameters

- `variables`: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the receiver.

<a id="return-value"></a>

## Return Value

A copy of the receiver with the predicate’s variables substituted by values specified in `variables`.

<a id="Discussion"></a>

## Discussion

The predicate itself is not modified by this method, so you can reuse it for any number of substitutions.

## See Also

### Creating a Predicate

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](init%28__%29.md): Creates a predicate by converting an existing predicate.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [init(fromMetadataQueryString:)](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.

# predicateWithSubstitutionVariables: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.

## Declaration

```objectivec
- (instancetype) predicateWithSubstitutionVariables:(NSDictionary<NSString *,id> *) variables;
```

## Parameters

- `variables`: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the receiver.

<a id="return-value"></a>

## Return Value

A copy of the receiver with the predicate’s variables substituted by values specified in `variables`.

<a id="Discussion"></a>

## Discussion

The predicate itself is not modified by this method, so you can reuse it for any number of substitutions.

## See Also

### Creating a Predicate

- [predicateWithFormat:](predicatewithformat_.md): Creates and returns a new predicate formed by creating a new string with a specified format and parsing the result.
- [predicateWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [predicateWithFormat:arguments:](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [predicateWithValue:](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [predicateWithBlock:](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [predicateFromMetadataQueryString:](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.
