> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/init(charactersin:)](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/init(charactersin:))

# init(charactersIn:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in a given string.

## Declaration

```swift
init(charactersIn aString: String)
```

## See Also

### Creating Custom Character Sets

- [init(range:)](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [init(bitmapRepresentation:)](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.

# characterSetWithCharactersInString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing the characters in a given string.

## Declaration

```objectivec
+ (NSMutableCharacterSet *) characterSetWithCharactersInString:(NSString *) aString;
```

## See Also

### Creating Custom Character Sets

- [characterSetWithRange:](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [characterSetWithBitmapRepresentation:](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [characterSetWithContentsOfFile:](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
