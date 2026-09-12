> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/init(bitmaprepresentation:)](https://developer.apple.com/documentation/foundation/nscharacterset/init(bitmaprepresentation:))

# init(bitmapRepresentation:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters determined by a given bitmap representation.

## Declaration

```swift
init(bitmapRepresentation data: Data)
```

## Parameters

- `data`: A bitmap representation of a character set.

<a id="return-value"></a>

## Return Value

A character set containing characters determined by `data`.

<a id="Discussion"></a>

## Discussion

This method is useful for creating a character set object with data from a file or other external data source.

A raw bitmap representation of a character set is a byte array with the first 2^16 bits (that is, 8192 bytes) representing the code point range of the the Basic Multilingual Plane (BMP), such that the value of the bit at position n represents the presence in the character set of the character with decimal Unicode value n. A bitmap representation may contain zero to sixteen additional 8192 byte segments to for each additional Unicode plane containing a character in a character set, with each 8192 byte segment prepended with a single plane index byte.

To add a character in the Basic Multilingual Plane (BMP) with decimal Unicode value n to a raw bitmap representation, you might do the following:

```objc
unsigned char bitmapRep[8192];
bitmapRep[n >> 3] |= (((unsigned int)1) << (n & 7));
```

To remove that character:

```objc
bitmapRep[n >> 3] &= ~(((unsigned int)1) << (n & 7));
```

## See Also

### Creating and Managing Character Sets as Bitmap Representations

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
- [bitmapRepresentation](bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.

# characterSetWithBitmapRepresentation: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set containing characters determined by a given bitmap representation.

## Declaration

```objectivec
+ (NSCharacterSet *) characterSetWithBitmapRepresentation:(NSData *) data;
```

## Parameters

- `data`: A bitmap representation of a character set.

<a id="return-value"></a>

## Return Value

A character set containing characters determined by `data`.

<a id="Discussion"></a>

## Discussion

This method is useful for creating a character set object with data from a file or other external data source.

A raw bitmap representation of a character set is a byte array with the first 2^16 bits (that is, 8192 bytes) representing the code point range of the the Basic Multilingual Plane (BMP), such that the value of the bit at position n represents the presence in the character set of the character with decimal Unicode value n. A bitmap representation may contain zero to sixteen additional 8192 byte segments to for each additional Unicode plane containing a character in a character set, with each 8192 byte segment prepended with a single plane index byte.

To add a character in the Basic Multilingual Plane (BMP) with decimal Unicode value n to a raw bitmap representation, you might do the following:

```objc
unsigned char bitmapRep[8192];
bitmapRep[n >> 3] |= (((unsigned int)1) << (n & 7));
```

To remove that character:

```objc
bitmapRep[n >> 3] &= ~(((unsigned int)1) << (n & 7));
```

## See Also

### Creating and Managing Character Sets as Bitmap Representations

- [characterSetWithContentsOfFile:](init%28contentsoffile_%29.md): Returns a character set read from the bitmap representation stored in the file a given path.
- [bitmapRepresentation](bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.
