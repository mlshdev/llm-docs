> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/init(contentsoffile:)](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set read from the bitmap representation stored in the file a given path.

## Declaration

```swift
init?(contentsOfFile fName: String)
```

## See Also

### Creating Custom Character Sets

- [init(charactersIn:)](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [init(range:)](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [init(bitmapRepresentation:)](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.

# characterSetWithContentsOfFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set read from the bitmap representation stored in the file a given path.

## Declaration

```objectivec
+ (NSMutableCharacterSet *) characterSetWithContentsOfFile:(NSString *) fName;
```

## See Also

### Creating Custom Character Sets

- [characterSetWithCharactersInString:](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [characterSetWithRange:](init%28range_%29.md): Returns a character set containing characters with Unicode values in a given range.
- [characterSetWithBitmapRepresentation:](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
