> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsizemakewithdictionaryrepresentation(_:_:)](https://developer.apple.com/documentation/coregraphics/cgsizemakewithdictionaryrepresentation(_:_:))

# CGSizeMakeWithDictionaryRepresentation(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a size using the contents of the specified dictionary.

## Declaration

```swift
func CGSizeMakeWithDictionaryRepresentation(_ dict: CFDictionary, _ size: UnsafeMutablePointer<CGSize>) -> Bool
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGSizeCreateDictionaryRepresentation(\_:)](cgsizecreatedictionaryrepresentation%28__%29.md).
- `size`: On return, the size created from the specified dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation(\_:\_:)](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation(\_:\_:)](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.

# CGSizeMakeWithDictionaryRepresentation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a size using the contents of the specified dictionary.

## Declaration

```objectivec
extern bool CGSizeMakeWithDictionaryRepresentation(CFDictionaryRef dict, CGSize *size);
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGSizeCreateDictionaryRepresentation](cgsizecreatedictionaryrepresentation%28__%29.md).
- `size`: On return, the size created from the specified dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.
