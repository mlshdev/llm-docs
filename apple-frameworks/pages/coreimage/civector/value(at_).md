> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/value(at:)](https://developer.apple.com/documentation/coreimage/civector/value(at:))

# value(at:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a value from a specific position in the vector.

## Declaration

```swift
func value(at index: Int) -> CGFloat
```

## Parameters

- `index`: The position in the vector of the value that you want to retrieve.

<a id="return-value"></a>

## Return Value

 The value retrieved from the vector or `0` if the position is undefined.

<a id="discussion"></a>

## Discussion

The numbering of elements in a vector begins with zero.

## See Also

### Getting Values From a Vector

- [count](count.md): The number of items in the vector.
- [x](x.md): The value located in the first position in the vector.
- [y](y.md): The value located in the second position in the vector.
- [z](z.md): The value located in the third position in the vector.
- [w](w.md): The value located in the forth position in the vector.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [cgAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [cgPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [cgRectValue](cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.

# valueAtIndex: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a value from a specific position in the vector.

## Declaration

```objectivec
- (CGFloat) valueAtIndex:(size_t) index;
```

## Parameters

- `index`: The position in the vector of the value that you want to retrieve.

<a id="return-value"></a>

## Return Value

 The value retrieved from the vector or `0` if the position is undefined.

<a id="discussion"></a>

## Discussion

The numbering of elements in a vector begins with zero.

## See Also

### Getting Values From a Vector

- [count](count.md): The number of items in the vector.
- [X](x.md): The value located in the first position in the vector.
- [Y](y.md): The value located in the second position in the vector.
- [Z](z.md): The value located in the third position in the vector.
- [W](w.md): The value located in the forth position in the vector.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with all the values of a `CIVector`.
- [CGAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [CGPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [CGRectValue](cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.
