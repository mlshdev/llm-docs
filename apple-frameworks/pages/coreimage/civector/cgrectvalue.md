> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/cgrectvalue](https://developer.apple.com/documentation/coreimage/civector/cgrectvalue)

# cgRectValue (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+

Returns the values in the vector as a `CGRect` structure.

## Declaration

```swift
var cgRectValue: CGRect { get }
```

<a id="return-value"></a>

## Return Value

 Reading this property creates a `CGRect` structure whose origin is the `X`, `Y`, `Z` and `W` values from the vector.

## See Also

### Getting Values From a Vector

- [value(at:)](value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](count.md): The number of items in the vector.
- [x](x.md): The value located in the first position in the vector.
- [y](y.md): The value located in the second position in the vector.
- [z](z.md): The value located in the third position in the vector.
- [w](w.md): The value located in the forth position in the vector.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [cgAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [cgPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.

# CGRectValue (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+

Returns the values in the vector as a `CGRect` structure.

## Declaration

```objectivec
@property (readonly) CGRect CGRectValue;
```

<a id="return-value"></a>

## Return Value

 Reading this property creates a `CGRect` structure whose origin is the `X`, `Y`, `Z` and `W` values from the vector.

## See Also

### Getting Values From a Vector

- [valueAtIndex:](value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](count.md): The number of items in the vector.
- [X](x.md): The value located in the first position in the vector.
- [Y](y.md): The value located in the second position in the vector.
- [Z](z.md): The value located in the third position in the vector.
- [W](w.md): The value located in the forth position in the vector.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [CGAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [CGPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
