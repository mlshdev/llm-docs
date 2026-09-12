> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpointmakewithdictionaryrepresentation(_:_:)](https://developer.apple.com/documentation/coregraphics/cgpointmakewithdictionaryrepresentation(_:_:))

# CGPointMakeWithDictionaryRepresentation(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a point using the contents of the specified dictionary.

## Declaration

```swift
func CGPointMakeWithDictionaryRepresentation(_ dict: CFDictionary, _ point: UnsafeMutablePointer<CGPoint>) -> Bool
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGPointCreateDictionaryRepresentation(\_:)](cgpointcreatedictionaryrepresentation%28__%29.md).
- `point`: On return, the point created from the provided dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGSizeMakeWithDictionaryRepresentation(\_:\_:)](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation(\_:\_:)](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.

# CGPointMakeWithDictionaryRepresentation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Fills in a point using the contents of the specified dictionary.

## Declaration

```objectivec
extern bool CGPointMakeWithDictionaryRepresentation(CFDictionaryRef dict, CGPoint *point);
```

## Parameters

- `dict`: A dictionary that was previously returned from the function [CGPointCreateDictionaryRepresentation](cgpointcreatedictionaryrepresentation%28__%29.md).
- `point`: On return, the point created from the provided dictionary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating a Geometric Primitive from a Dictionary Representation

- [CGSizeMakeWithDictionaryRepresentation](cgsizemakewithdictionaryrepresentation%28____%29.md): Fills in a size using the contents of the specified dictionary.
- [CGRectMakeWithDictionaryRepresentation](cgrectmakewithdictionaryrepresentation%28____%29.md): Fills in a rectangle using the contents of the specified dictionary.
