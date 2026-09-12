> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/civector/stringrepresentation](https://developer.apple.com/documentation/coreimage/civector/stringrepresentation)

# stringRepresentation (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a formatted string with all the values of a `CIVector`.

## Declaration

```swift
var stringRepresentation: String { get }
```

<a id="discussion"></a>

## Discussion

Some example string representations of vectors:

| `CIVector` | `stringRepresentation` |
| --- | --- |
| `[CIVector vectorWithX:1.0 Y:0.5 Z:0.3]` | `"[1.0 0.5 0.3]"` |
| `[CIVector vectorWithX:10.0 Y:23.0]` | `"[10.0 23.0]"` |

To create a [CIVector](../civector.md) object from a string representation, use the [vectorWithString:](vectorwithstring_.md) method.

## See Also

### Getting Values From a Vector

- [value(at:)](value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](count.md): The number of items in the vector.
- [x](x.md): The value located in the first position in the vector.
- [y](y.md): The value located in the second position in the vector.
- [z](z.md): The value located in the third position in the vector.
- [w](w.md): The value located in the forth position in the vector.
- [cgAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [cgPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [cgRectValue](cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.

# stringRepresentation (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns a formatted string with all the values of a `CIVector`.

## Declaration

```objectivec
@property (readonly) NSString * stringRepresentation;
```

<a id="discussion"></a>

## Discussion

Some example string representations of vectors:

| `CIVector` | `stringRepresentation` |
| --- | --- |
| `[CIVector vectorWithX:1.0 Y:0.5 Z:0.3]` | `"[1.0 0.5 0.3]"` |
| `[CIVector vectorWithX:10.0 Y:23.0]` | `"[10.0 23.0]"` |

To create a [CIVector](../civector.md) object from a string representation, use the [vectorWithString:](vectorwithstring_.md) method.

## See Also

### Getting Values From a Vector

- [valueAtIndex:](value%28at_%29.md): Returns a value from a specific position in the vector.
- [count](count.md): The number of items in the vector.
- [X](x.md): The value located in the first position in the vector.
- [Y](y.md): The value located in the second position in the vector.
- [Z](z.md): The value located in the third position in the vector.
- [W](w.md): The value located in the forth position in the vector.
- [CGAffineTransformValue](cgaffinetransformvalue.md): Returns the values in the vector as a `CGAffineTransformValue` structure.
- [CGPointValue](cgpointvalue.md): Returns the values in the vector as a `CGPoint` structure.
- [CGRectValue](cgrectvalue.md): Returns the values in the vector as a `CGRect` structure.
