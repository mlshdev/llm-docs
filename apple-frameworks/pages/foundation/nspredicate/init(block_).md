> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspredicate/init(block:)](https://developer.apple.com/documentation/foundation/nspredicate/init(block:))

# init(block:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate that evaluates using a specified block object and bindings dictionary.

## Declaration

```swift
init(block: @escaping (Any?, [String : Any]?) -> Bool)
```

## Parameters

- `block`: The block is applied to the object to be evaluated.

  The block takes two arguments:

  - **evaluatedObject**: The object to be evaluated.
  - **bindings**: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the receiver.

  The block returns [true](https://developer.apple.com/documentation/swift/true) if the `evaluatedObject` evaluates to true, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A new predicate by that evaluates objects using `block`.

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, Core Data supports block-based predicates in the in-memory and atomic stores, but not in the SQLite-based store.

## See Also

### Creating a Predicate

- [init(format:argumentArray:)](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [init(format:arguments:)](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(format:\_:)](init%28format___%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [init(\_:)](init%28__%29.md): Creates a predicate by converting an existing predicate.
- [withSubstitutionVariables(\_:)](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [init(value:)](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [init(fromMetadataQueryString:)](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.

# predicateWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a predicate that evaluates using a specified block object and bindings dictionary.

## Declaration

```objectivec
+ (NSPredicate *) predicateWithBlock:(BOOL (^)(id evaluatedObject, NSDictionary<NSString *,id> *bindings)) block;
```

## Parameters

- `block`: The block is applied to the object to be evaluated.

  The block takes two arguments:

  - **evaluatedObject**: The object to be evaluated.
  - **bindings**: The substitution variables dictionary. The dictionary must contain key-value pairs for all variables in the receiver.

  The block returns [true](https://developer.apple.com/documentation/swift/true) if the `evaluatedObject` evaluates to true, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A new predicate by that evaluates objects using `block`.

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, Core Data supports block-based predicates in the in-memory and atomic stores, but not in the SQLite-based store.

## See Also

### Creating a Predicate

- [predicateWithFormat:](predicatewithformat_.md): Creates and returns a new predicate formed by creating a new string with a specified format and parsing the result.
- [predicateWithFormat:argumentArray:](init%28format_argumentarray_%29.md): Creates a predicate by substituting the values in a specified array into a format string and parsing the result.
- [predicateWithFormat:arguments:](init%28format_arguments_%29.md): Creates a predicate by substituting the values in an argument list into a format string and parsing the result.
- [predicateWithSubstitutionVariables:](withsubstitutionvariables%28__%29.md): Returns a copy of the predicate and substitutes the predicates variables with specified values from a specified substitution variables dictionary.
- [predicateWithValue:](init%28value_%29.md): Creates and returns a predicate that always evaluates to a specified Boolean value.
- [predicateFromMetadataQueryString:](init%28frommetadataquerystring_%29.md): Creates a predicate with a metadata query string.
