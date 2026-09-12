> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrange/init(constantvalue:)](https://developer.apple.com/documentation/spritekit/skrange/init(constantvalue:))

# init(constantValue:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies a constant value.

## Declaration

```swift
convenience init(constantValue value: CGFloat)
```

## Parameters

- `value`: A constant.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum and maximum value are both equal to `value`.

## See Also

### Creating a Range Object

- [init(value:variance:)](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [withNoLimits()](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [init(lowerLimit:)](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [init(upperLimit:)](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [init(lowerLimit:upperLimit:)](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

# rangeWithConstantValue: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies a constant value.

## Declaration

```objectivec
+ (instancetype) rangeWithConstantValue:(CGFloat) value;
```

## Parameters

- `value`: A constant.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum and maximum value are both equal to `value`.

## See Also

### Creating a Range Object

- [rangeWithLowerLimit:upperLimit:](rangewithlowerlimit_upperlimit_.md): Creates and initializes a new range object.
- [rangeWithValue:variance:](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [rangeWithNoLimits](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [rangeWithLowerLimit:](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [rangeWithUpperLimit:](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [initWithLowerLimit:upperLimit:](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.
