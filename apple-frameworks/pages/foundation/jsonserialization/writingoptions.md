> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/writingoptions](https://developer.apple.com/documentation/foundation/jsonserialization/writingoptions)

# JSONSerialization.WritingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for writing JSON data.

## Declaration

```swift
struct WritingOptions
```

## Topics

### Creating a Writing Options Instance

- [init(rawValue:)](writingoptions/init%28rawvalue_%29.md): Creates a set of JSON formatting options from an integer that represents those options.

### Formatting JSON

- [fragmentsAllowed](writingoptions/fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [prettyPrinted](writingoptions/prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [sortedKeys](writingoptions/sortedkeys.md): Specifies that the output sorts keys in lexicographic order.
- [withoutEscapingSlashes](writingoptions/withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating JSON Data

- [data(withJSONObject:options:)](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject(\_:to:options:error:)](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [isValidJSONObject(\_:)](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.

# NSJSONWritingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for writing JSON data.

## Declaration

```objectivec
enum NSJSONWritingOptions : NSUInteger;
```

## Topics

### Formatting JSON

- [NSJSONWritingFragmentsAllowed](writingoptions/fragmentsallowed.md): Specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.
- [NSJSONWritingPrettyPrinted](writingoptions/prettyprinted.md): Specifies that the output uses white space and indentation to make the resulting data more readable.
- [NSJSONWritingSortedKeys](writingoptions/sortedkeys.md): Specifies that the output sorts keys in lexicographic order.
- [NSJSONWritingWithoutEscapingSlashes](writingoptions/withoutescapingslashes.md): Specifies that the output doesn’t prefix slash characters with escape characters.

## See Also

### Creating JSON Data

- [dataWithJSONObject:options:error:](data%28withjsonobject_options_%29.md): Returns JSON data from a Foundation object.
- [writeJSONObject:toStream:options:error:](writejsonobject%28__to_options_error_%29.md): Writes a given JSON object to a stream.
- [isValidJSONObject:](isvalidjsonobject%28__%29.md): Returns a Boolean value that indicates whether the serializer can convert a given object to JSON data.
