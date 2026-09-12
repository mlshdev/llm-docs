> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscharacterset/init(contentsoffile:)](https://developer.apple.com/documentation/foundation/nscharacterset/init(contentsoffile:))

# init(contentsOfFile:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set read from the bitmap representation stored in the file a given path.

## Declaration

```swift
init?(contentsOfFile fName: String)
```

## Parameters

- `fName`: A path to a file containing a bitmap representation of a character set. The path name must end with the extension `.bitmap`.

<a id="return-value"></a>

## Return Value

A character set read from the bitmap representation stored in the file at `path`.

<a id="Discussion"></a>

## Discussion

This method doesn’t use filenames to check for the uniqueness of the character sets it creates. To prevent duplication of character sets in memory, cache them and make them available through an API that checks whether the requested set has already been loaded.

To read a bitmap representation from any file, use the `NSData` method[dataWithContentsOfFile:options:error:](../nsdata/datawithcontentsoffile_options_error_.md) and pass the result to [init(bitmapRepresentation:)](init%28bitmaprepresentation_%29.md).

## See Also

### Creating and Managing Character Sets as Bitmap Representations

- [init(bitmapRepresentation:)](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [bitmapRepresentation](bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.

# characterSetWithContentsOfFile: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a character set read from the bitmap representation stored in the file a given path.

## Declaration

```objectivec
+ (NSCharacterSet *) characterSetWithContentsOfFile:(NSString *) fName;
```

## Parameters

- `fName`: A path to a file containing a bitmap representation of a character set. The path name must end with the extension `.bitmap`.

<a id="return-value"></a>

## Return Value

A character set read from the bitmap representation stored in the file at `path`.

<a id="Discussion"></a>

## Discussion

This method doesn’t use filenames to check for the uniqueness of the character sets it creates. To prevent duplication of character sets in memory, cache them and make them available through an API that checks whether the requested set has already been loaded.

To read a bitmap representation from any file, use the `NSData` method[dataWithContentsOfFile:options:error:](../nsdata/datawithcontentsoffile_options_error_.md) and pass the result to [characterSetWithBitmapRepresentation:](init%28bitmaprepresentation_%29.md).

## See Also

### Creating and Managing Character Sets as Bitmap Representations

- [characterSetWithBitmapRepresentation:](init%28bitmaprepresentation_%29.md): Returns a character set containing characters determined by a given bitmap representation.
- [bitmapRepresentation](bitmaprepresentation.md): An `NSData` object encoding the receiver in binary format.
