> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrange/init(upperlimit:)](https://developer.apple.com/documentation/spritekit/skrange/init(upperlimit:))

# init(upperLimit:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies only a maximum value.

## Declaration

```swift
convenience init(upperLimit upper: CGFloat)
```

## Parameters

- `upper`: The maximum value for the range.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `-Inf` and whose maximum value is `upper`.

## See Also

### Creating a Range Object

- [init(value:variance:)](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [withNoLimits()](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [init(lowerLimit:)](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [init(constantValue:)](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [init(lowerLimit:upperLimit:)](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.

# rangeWithUpperLimit: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and initializes a new range object that specifies only a maximum value.

## Declaration

```objectivec
+ (instancetype) rangeWithUpperLimit:(CGFloat) upper;
```

## Parameters

- `upper`: The maximum value for the range.

<a id="return-value"></a>

## Return Value

A newly initialized range object whose minimum value is `-Inf` and whose maximum value is `upper`.

## See Also

### Creating a Range Object

- [rangeWithLowerLimit:upperLimit:](rangewithlowerlimit_upperlimit_.md): Creates and initializes a new range object.
- [rangeWithValue:variance:](init%28value_variance_%29.md): Creates and initializes a new range object using a value and a maximum distance from that value.
- [rangeWithNoLimits](withnolimits%28%29.md): Creates and initializes a new range object that encompasses all possible values.
- [rangeWithLowerLimit:](init%28lowerlimit_%29.md): Creates and initializes a new range object that specifies only a minimum value.
- [rangeWithConstantValue:](init%28constantvalue_%29.md): Creates and initializes a new range object that specifies a constant value.
- [initWithLowerLimit:upperLimit:](init%28lowerlimit_upperlimit_%29.md): Initializes a new range object.
