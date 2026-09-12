> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstringfromsize(_:)](https://developer.apple.com/documentation/foundation/nsstringfromsize(_:))

# NSStringFromSize(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string representation of a size.

## Declaration

```swift
func NSStringFromSize(_ aSize: NSSize) -> String
```

<a id="return-value"></a>

## Return Value

A string of the form “{a, b}”, where a and b are the width and height, respectively, of `aSize`.

## See Also

### Managing Sizes

- [NSEqualSizes(\_:\_:)](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize(\_:\_:)](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString(\_:)](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSSizeFromCGSize(\_:)](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize(\_:)](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

# NSStringFromSize (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a string representation of a size.

## Declaration

```objectivec
extern NSString *NSStringFromSize(NSSize aSize);
```

<a id="return-value"></a>

## Return Value

A string of the form “{a, b}”, where a and b are the width and height, respectively, of `aSize`.

## See Also

### Managing Sizes

- [NSEqualSizes](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSMakeSize](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSSizeFromCGSize](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.
