> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrange/init(value:variance:)](https://developer.apple.com/documentation/spritekit/skrange/init(value:variance:))

# init(value:variance:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object using a value and a maximum distance from that value.

## Declaration

```swift
convenience init(value: CGFloat, variance: CGFloat)
```

## Parameters

- `value`: The midpoint for the range.
- `variance`: The maximum amount that a value may differ from the midpoint.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `value-variance` and whose maximum value is `value+variance`.

## See Also

### Creating a Range Object

- [withNoLimits()](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [init(lowerLimit:)](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [init(upperLimit:)](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [init(constantValue:)](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [init(lowerLimit:upperLimit:)](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

# rangeWithValue:variance: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object using a value and a maximum distance from that value.

## Declaration

```objectivec
+ (instancetype) rangeWithValue:(CGFloat) value variance:(CGFloat) variance;
```

## Parameters

- `value`: The midpoint for the range.
- `variance`: The maximum amount that a value may differ from the midpoint.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `value-variance` and whose maximum value is `value+variance`.

## See Also

### Creating a Range Object

- [rangeWithLowerLimit:upperLimit:](rangewithlowerlimit_upperlimit_.md): Creates and initializes a new range object.
- [rangeWithNoLimits](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [rangeWithLowerLimit:](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [rangeWithUpperLimit:](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [rangeWithConstantValue:](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [initWithLowerLimit:upperLimit:](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.
