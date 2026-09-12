> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/init(charactersin:)](https://developer.apple.com/documentation/foundation/nscharacterset/init(charactersin:))

# init(charactersIn:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in a given string.

## Declaration

```swift
init(charactersIn aString: String)
```

## Parameters

- `aString`: A string containing characters for the new character set.

<a id="return-value"></a>

## Return Value

A character set containing the characters in `aString`. Returns an empty character set if `aString` is empty.

## See Also

### Creating a Custom Character Set

- [init(coder:)](init%28coder_%29.md)
- [init(range:)](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [NSOpenStepUnicodeReservedBase](../1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.

# characterSetWithCharactersInString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in a given string.

## Declaration

```objectivec
+ (NSCharacterSet *) characterSetWithCharactersInString:(NSString *) aString;
```

## Parameters

- `aString`: A string containing characters for the new character set.

<a id="return-value"></a>

## Return Value

A character set containing the characters in `aString`. Returns an empty character set if `aString` is empty.

## See Also

### Creating a Custom Character Set

- [initWithCoder:](init%28coder_%29.md)
- [characterSetWithRange:](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [NSOpenStepUnicodeReservedBase](../1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.
