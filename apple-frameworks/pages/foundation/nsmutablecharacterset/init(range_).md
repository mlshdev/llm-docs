> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablecharacterset/init(range:)](https://developer.apple.com/documentation/foundation/nsmutablecharacterset/init(range:))

# init(range:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters with Unicode values in a given range.

## Declaration

```swift
init(range aRange: NSRange)
```

## See Also

### Creating Custom Character Sets

- [init(charactersIn:)](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [init(bitmapRepresentation:)](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.

# characterSetWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters with Unicode values in a given range.

## Declaration

```objectivec
+ (NSMutableCharacterSet *) characterSetWithRange:(NSRange) aRange;
```

## See Also

### Creating Custom Character Sets

- [characterSetWithCharactersInString:](init%28charactersin_%29.md): Returns a character set containing the characters in a given string.
- [characterSetWithBitmapRepresentation:](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [characterSetWithContentsOfFile:](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
