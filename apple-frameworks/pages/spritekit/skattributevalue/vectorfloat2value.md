> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skattributevalue/vectorfloat2value](https://developer.apple.com/documentation/spritekit/skattributevalue/vectorfloat2value)

# vectorFloat2Value (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of two floating-point numbers.

## Declaration

```swift
var vectorFloat2Value: vector_float2 { get set }
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number, the second item of the vector is set to 0. If the receiver’s original value is a vector of more than two items, the additional items are truncated.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat3Value](vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.
- [vectorFloat4Value](vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.

# vectorFloat2Value (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s value as a vector of two floating-point numbers.

## Declaration

```objectivec
@property (nonatomic) vector_float2 vectorFloat2Value;
```

<a id="Discussion"></a>

## Discussion

If the receiver’s original value is a floating-point number, the second item of the vector is set to 0. If the receiver’s original value is a vector of more than two items, the additional items are truncated.

## See Also

### Instance Properties

- [floatValue](floatvalue.md): The receiver’s floating point value.
- [vectorFloat3Value](vectorfloat3value.md): The receiver’s value as a vector of three floating point numbers.
- [vectorFloat4Value](vectorfloat4value.md): The receiver’s value as a vector of four floating point numbers.
