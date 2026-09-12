> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmakesize(_:_:)](https://developer.apple.com/documentation/foundation/nsmakesize(_:_:))

# NSMakeSize(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a new `NSSize` from the specified values.

## Declaration

```swift
func NSMakeSize(_ w: Double, _ h: Double) -> NSSize
```

<a id="return-value"></a>

## Return Value

An `NSSize` having the specified `width` and `height`.

## See Also

### Managing Sizes

- [NSEqualSizes(\_:\_:)](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSSizeFromString(\_:)](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize(\_:)](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize(\_:)](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize(\_:)](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

# NSMakeSize (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a new `NSSize` from the specified values.

## Declaration

```objectivec
static NSSize NSMakeSize(CGFloat w, CGFloat h);
```

<a id="return-value"></a>

## Return Value

An `NSSize` having the specified `width` and `height`.

## See Also

### Managing Sizes

- [NSEqualSizes](nsequalsizes%28____%29.md): Returns a Boolean that indicates whether two size values are equal.
- [NSSizeFromString](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.
