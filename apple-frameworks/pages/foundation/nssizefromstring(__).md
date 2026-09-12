> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssizefromstring(_:)](https://developer.apple.com/documentation/foundation/nssizefromstring(_:))

# NSSizeFromString(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSSize` from a text-based representation.

## Declaration

```swift
func NSSizeFromString(_ aString: String) -> NSSize
```

<a id="Discussion"></a>

## Discussion

Scans `aString` for two numbers which are used as the width and height, in that order, to create an `NSSize` struct. If `aString` only contains a single number, it is used as the width. The `aString` argument should be formatted like the output of [NSStringFromSize(\_:)](nsstringfromsize%28__%29.md), for example, `@"{10,20}"`. If `aString` does not contain any numbers, this function returns an `NSSize` struct whose width and height are both `0`.

## See Also

### Managing Sizes

- [NSEqualSizes(\_:\_:)](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize(\_:\_:)](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSStringFromSize(\_:)](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize(\_:)](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize(\_:)](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

# NSSizeFromString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSSize` from a text-based representation.

## Declaration

```objectivec
extern NSSize NSSizeFromString(NSString *aString);
```

<a id="Discussion"></a>

## Discussion

Scans `aString` for two numbers which are used as the width and height, in that order, to create an `NSSize` struct. If `aString` only contains a single number, it is used as the width. The `aString` argument should be formatted like the output of [NSStringFromSize](nsstringfromsize%28__%29.md), for example, `@"{10,20}"`. If `aString` does not contain any numbers, this function returns an `NSSize` struct whose width and height are both `0`.

## See Also

### Managing Sizes

- [NSEqualSizes](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSStringFromSize](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.
