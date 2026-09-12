> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonserialization/readingoptions](https://developer.apple.com/documentation/foundation/jsonserialization/readingoptions)

# JSONSerialization.ReadingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when creating Foundation objects from JSON data.

## Declaration

```swift
struct ReadingOptions
```

<a id="overview"></a>

## Overview

Use these options when parsing JSON with [jsonObject(with:options:)](jsonobject%28with_options_%29-8demi.md) and [jsonObject(with:options:)](jsonobject%28with_options_%29-3afap.md).

## Topics

### Creating a Reading Options Instance

- [init(rawValue:)](readingoptions/init%28rawvalue_%29.md): Creates a set of JSON formatting options from an integer that represents those options.

### Reading Options

- [mutableContainers](readingoptions/mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [mutableLeaves](readingoptions/mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [fragmentsAllowed](readingoptions/fragmentsallowed.md): Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.
- [json5Allowed](readingoptions/json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [topLevelDictionaryAssumed](readingoptions/topleveldictionaryassumed.md): Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.
- [allowFragments](readingoptions/allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.

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

### Creating a JSON Object

- [jsonObject(with:options:)](jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [jsonObject(with:options:)](jsonobject%28with_options_%29-3afap.md): Returns a Foundation object from JSON data in a given stream.

# NSJSONReadingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options used when creating Foundation objects from JSON data.

## Declaration

```objectivec
enum NSJSONReadingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these options when parsing JSON with [JSONObjectWithData:options:error:](jsonobject%28with_options_%29-8demi.md) and [JSONObjectWithStream:options:error:](jsonobject%28with_options_%29-3afap.md).

## Topics

### Reading Options

- [NSJSONReadingMutableContainers](readingoptions/mutablecontainers.md): Specifies that arrays and dictionaries in the returned object are mutable.
- [NSJSONReadingMutableLeaves](readingoptions/mutableleaves.md): Specifies that leaf strings in the JSON object graph are mutable.
- [NSJSONReadingFragmentsAllowed](readingoptions/fragmentsallowed.md): Specifies that the parser allows top-level objects that aren’t arrays or dictionaries.
- [NSJSONReadingJSON5Allowed](readingoptions/json5allowed.md): Specifies that reading serialized JSON data supports the JSON5 syntax.
- [NSJSONReadingTopLevelDictionaryAssumed](readingoptions/topleveldictionaryassumed.md): Specifies that the parser assumes the top level of the JSON data is a dictionary, even if it doesn’t begin and end with curly braces.
- [NSJSONReadingAllowFragments](readingoptions/allowfragments.md): Deprecated. A deprecated option that specifies that the parser should allow top-level objects that aren’t arrays or dictionaries.

## See Also

### Creating a JSON Object

- [JSONObjectWithData:options:error:](jsonobject%28with_options_%29-8demi.md): Returns a Foundation object from given JSON data.
- [JSONObjectWithStream:options:error:](jsonobject%28with_options_%29-3afap.md): Returns a Foundation object from JSON data in a given stream.
