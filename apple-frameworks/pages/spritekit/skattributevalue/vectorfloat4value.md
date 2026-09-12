> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattributevalue/vectorfloat4value](https://developer.apple.com/documentation/spritekit/skattributevalue/vectorfloat4value)

# vectorFloat4Value (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of four floating point numbers.

## Declaration

```swift
var vectorFloat4Value: vector_float4 { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number of a vector with a count less than four, the empty items in the vector are set to 0.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat3Value](vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.

# vectorFloat4Value (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of four floating point numbers.

## Declaration

```objectivec
@property (nonatomic) vector_float4 vectorFloat4Value;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number of a vector with a count less than four, the empty items in the vector are set to 0.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat2Value](vectorfloat2value.md): The receiver’s value as a vector of two floating-point numbers.
- [vectorFloat3Value](vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.
