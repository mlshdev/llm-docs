> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/init(range:)](https://developer.apple.com/documentation/foundation/nscharacterset/init(range:))

# init(range:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters with Unicode values in a given range.

## Declaration

```swift
init(range aRange: NSRange)
```

## Parameters

- `aRange`: A range of Unicode values. `aRange.location` is the value of the first character to return; `aRange.location + aRange.length – 1` is the value of the last.

<a id="return-value"></a>

## Return Value

A character set containing characters whose Unicode values are given by `aRange`. If `aRange.length` is `0`, returns an empty character set.

<a id="Discussion"></a>

## Discussion

This code excerpt creates a character set object containing the lowercase English alphabetic characters:

```objc
NSRange lcEnglishRange;
NSCharacterSet *lcEnglishLetters;
 
lcEnglishRange.location = (unsigned int)'a';
lcEnglishRange.length = 26;
lcEnglishLetters = [NSCharacterSet characterSetWithRange:lcEnglishRange];
```

## See Also

### Creating a Custom Character Set

- [init(coder:)](init%28coder_%29.md)
- [init(charactersIn:)](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [NSOpenStepUnicodeReservedBase](../1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.

# characterSetWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters with Unicode values in a given range.

## Declaration

```objectivec
+ (NSCharacterSet *) characterSetWithRange:(NSRange) aRange;
```

## Parameters

- `aRange`: A range of Unicode values. `aRange.location` is the value of the first character to return; `aRange.location + aRange.length – 1` is the value of the last.

<a id="return-value"></a>

## Return Value

A character set containing characters whose Unicode values are given by `aRange`. If `aRange.length` is `0`, returns an empty character set.

<a id="Discussion"></a>

## Discussion

This code excerpt creates a character set object containing the lowercase English alphabetic characters:

```objc
NSRange lcEnglishRange;
NSCharacterSet *lcEnglishLetters;
 
lcEnglishRange.location = (unsigned int)'a';
lcEnglishRange.length = 26;
lcEnglishLetters = [NSCharacterSet characterSetWithRange:lcEnglishRange];
```

## See Also

### Creating a Custom Character Set

- [initWithCoder:](init%28coder_%29.md)
- [characterSetWithCharactersInString:](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [NSOpenStepUnicodeReservedBase](../1560803-nsopenstepunicodereservedbase.md): Specifies lower bound for a Unicode character range reserved for Apple’s corporate use.
