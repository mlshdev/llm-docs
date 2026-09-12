> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebydictionaryliteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)

# ExpressibleByDictionaryLiteral

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be initialized using a dictionary literal.

## Declaration

```swift
protocol ExpressibleByDictionaryLiteral
```

<a id="overview"></a>

## Overview

A dictionary literal is a simple way of writing a list of key-value pairs. You write each key-value pair with a colon (`:`) separating the key and the value. The dictionary literal is made up of one or more key-value pairs, separated by commas and surrounded with square brackets.

To declare a dictionary, assign a dictionary literal to a variable or constant:

```swift
let countryCodes = ["BR": "Brazil", "GH": "Ghana",
                    "JP": "Japan", "US": "United States"]
// 'countryCodes' has type '[String: String]'

print(countryCodes["BR"]!)
// Prints "Brazil"
```

When the context provides enough type information, you can use a special form of the dictionary literal, square brackets surrounding a single colon, to initialize an empty dictionary.

```swift
var frequencies: [String: Int] = [:]
print(frequencies.count)
// Prints "0"
```

> **Note**

>  A dictionary literal is *not* the same as an instance of `Dictionary`. You can’t initialize a type that conforms to `ExpressibleByDictionaryLiteral` simply by assigning an instance of `Dictionary`, `KeyValuePairs`, or similar.

<a id="Conforming-to-the-ExpressibleByDictionaryLiteral-Protocol"></a>

## Conforming to the ExpressibleByDictionaryLiteral Protocol

To add the capability to be initialized with a dictionary literal to your own custom types, declare an `init(dictionaryLiteral:)` initializer. The following example shows the dictionary literal initializer for a hypothetical `CountedSet` type, which uses setlike semantics while keeping track of the count for duplicate elements:

```swift
struct CountedSet<Element: Hashable>: Collection, SetAlgebra {
    // implementation details

    /// Updates the count stored in the set for the given element,
    /// adding the element if necessary.
    ///
    /// - Parameter n: The new count for `element`. `n` must be greater
    ///   than or equal to zero.
    /// - Parameter element: The element to set the new count on.
    mutating func updateCount(_ n: Int, for element: Element)
}

extension CountedSet: ExpressibleByDictionaryLiteral {
    init(dictionaryLiteral elements: (Element, Int)...) {
        self.init()
        for (element, count) in elements {
            self.updateCount(count, for: element)
        }
    }
}
```

## Topics

### Associated Types

- [Key](expressiblebydictionaryliteral/key.md): The key type of a dictionary literal.
- [Value](expressiblebydictionaryliteral/value.md): The value type of a dictionary literal.

### Initializers

- [init(dictionaryLiteral:)](expressiblebydictionaryliteral/init%28dictionaryliteral_%29.md): Creates an instance initialized with the given key-value pairs.

## Relationships

### Conforming Types

- [Dictionary](dictionary.md)
- [KeyValuePairs](keyvaluepairs.md)

## See Also

### Collection Literals

- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md): A type that can be initialized using an array literal.
