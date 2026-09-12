> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/init(format:argumentarray:)](https://developer.apple.com/documentation/foundation/nspredicate/init(format:argumentarray:))

# init(format:argumentArray:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by substituting the values in a specified array into a format string and parsing the result.

## Declaration

```swift
init(format predicateFormat: String, argumentArray arguments: [Any]?)
```

## Parameters

- `predicateFormat`: The format string for the new predicate.
- `arguments`: The arguments to substitute into `predicateFormat`. Values are substituted in the order they appear in the array.

<a id="return-value"></a>

## Return Value

A new predicate by substituting the values in `arguments` into `predicateFormat`, and parsing the result.

<a id="Discussion"></a>

## Discussion

For details of the format of the format string and of limitations on variable substitution, see [Predicate Format String Syntax](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pSyntax.html#//apple_ref/doc/uid/TP40001795).

## See Also

### Creating a Predicate

- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](init%28__%29.md): Creates a predicate by converting an existing predicate.
- [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(block:)](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [init(fromMetadataQueryString:)](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.

# predicateWithFormat:argumentArray: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate by substituting the values in a specified array into a format string and parsing the result.

## Declaration

```objectivec
+ (NSPredicate *) predicateWithFormat:(NSString *) predicateFormat argumentArray:(NSArray *) arguments;
```

## Parameters

- `predicateFormat`: The format string for the new predicate.
- `arguments`: The arguments to substitute into `predicateFormat`. Values are substituted in the order they appear in the array.

<a id="return-value"></a>

## Return Value

A new predicate by substituting the values in `arguments` into `predicateFormat`, and parsing the result.

<a id="Discussion"></a>

## Discussion

For details of the format of the format string and of limitations on variable substitution, see [Predicate Format String Syntax](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/Articles/pSyntax.html#//apple_ref/doc/uid/TP40001795).

## See Also

### Creating a Predicate

- [predicateWithFormat:](predicatewithformat_.md): Creates and returns a new predicate formed by creating a new string with a specified format and parsing the result.
- [predicateWithFormat:arguments:](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [predicateWithSubstitutionVariables:](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [predicateWithValue:](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [predicateWithBlock:](init%28block_%29.md): Creates a predicate that evaluates using a specified block object and bindings dictionary.
- [predicateFromMetadataQueryString:](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.
