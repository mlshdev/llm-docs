> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsequalsizes(_:_:)](https://developer.apple.com/documentation/foundation/nsequalsizes(_:_:))

# NSEqualSizes(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean that indicates whether two size values are equal.

## Declaration

```swift
func NSEqualSizes(_ aSize: NSSize, _ bSize: NSSize) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aSize` and `bSize` are identical, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Sizes

- [NSMakeSize(\_:\_:)](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString(\_:)](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize(\_:)](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize(\_:)](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize(\_:)](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.

# NSEqualSizes (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean that indicates whether two size values are equal.

## Declaration

```objectivec
extern BOOL NSEqualSizes(NSSize aSize, NSSize bSize);
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aSize` and `bSize` are identical, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Sizes

- [NSMakeSize](nsmakesize%28____%29.md): Returns a new `NSSize` from the specified values.
- [NSSizeFromString](nssizefromstring%28__%29.md): Returns an `NSSize` from a text-based representation.
- [NSStringFromSize](nsstringfromsize%28__%29.md): Returns a string representation of a size.
- [NSSizeFromCGSize](nssizefromcgsize%28__%29.md): Returns an `NSSize` typecast from a `CGSize`.
- [NSSizeToCGSize](nssizetocgsize%28__%29.md): Returns a `CGSize` typecast from an `NSSize`.
