> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrange/init(lowerlimit:)](https://developer.apple.com/documentation/spritekit/skrange/init(lowerlimit:))

# init(lowerLimit:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies only a minimum value.

## Declaration

```swift
convenience init(lowerLimit lower: CGFloat)
```

## Parameters

- `lower`: The minimum value for the range.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `lower` and whose maximum value is `+Inf`.

## See Also

### Creating a Range Object

- [init(value:variance:)](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [withNoLimits()](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [init(upperLimit:)](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [init(constantValue:)](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [init(lowerLimit:upperLimit:)](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

# rangeWithLowerLimit: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies only a minimum value.

## Declaration

```objectivec
+ (instancetype) rangeWithLowerLimit:(CGFloat) lower;
```

## Parameters

- `lower`: The minimum value for the range.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `lower` and whose maximum value is `+Inf`.

## See Also

### Creating a Range Object

- [rangeWithLowerLimit:upperLimit:](rangewithlowerlimit_upperlimit_.md): Creates and initializes a new range object.
- [rangeWithValue:variance:](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [rangeWithNoLimits](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [rangeWithUpperLimit:](init%28upperlimit_%29.md): Creates and initializes a new range object that specifies only a maximum value.
- [rangeWithConstantValue:](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [initWithLowerLimit:upperLimit:](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.
