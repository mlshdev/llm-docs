> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgrectmakewithdictionaryrepresentation(_:_:)](https://developer.apple.com/documentation/coregraphics/cgrectmakewithdictionaryrepresentation(_:_:))

# CGRectMakeWithDictionaryRepresentation(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a rectangle using the contents of the specified dictionary.

## Declaration

```swift
func CGRectMakeWithDictionaryRepresentation(_ dict: CFDictionary, _ rect: UnsafeMutablePointer<CGRect>) -> Bool
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGRectCreateDictionaryRepresentation(\_:)](cgrectcreatedictionaryrepresentation%28__%29.md).
- `rect`: On return, the rectangle created from the specified dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation(\_:\_:)](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGSizeMakeWithDictionaryRepresentation(\_:\_:)](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.

# CGRectMakeWithDictionaryRepresentation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a rectangle using the contents of the specified dictionary.

## Declaration

```objectivec
extern bool CGRectMakeWithDictionaryRepresentation(CFDictionaryRef dict, CGRect *rect);
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGRectCreateDictionaryRepresentation](cgrectcreatedictionaryrepresentation%28__%29.md).
- `rect`: On return, the rectangle created from the specified dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGPointMakeWithDictionaryRepresentation](cgpointmakewithdictionaryrepresentation%28____%29.md): Fills in a point using the contents of the specified dictionary.
- [CGSizeMakeWithDictionaryRepresentation](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.
