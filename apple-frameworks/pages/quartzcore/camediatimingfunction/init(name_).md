> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfunction/init(name:)](https://developer.apple.com/documentation/quartzcore/camediatimingfunction/init(name:))

# init(name:) (Swift)

**Framework:** Core Animation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a new instance of `CAMediaTimingFunction` configured with the predefined timing function specified by `name`.

## Declaration

```swift
convenience init(name: CAMediaTimingFunctionName)
```

## Parameters

- `name`: The timing function to use as specified in [Predefined Timing Functions](../predefined-timing-functions.md).

<a id="return-value"></a>

## Return Value

A new instance of `CAMediaTimingFunction` with the timing function specified by `name`.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating Timing Functions

- [init(controlPoints:\_:\_:\_:)](init%28controlpoints_______%29.md): Returns an initialized timing function modeled as a cubic Bézier curve using the specified control points.

# functionWithName: (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and returns a new instance of `CAMediaTimingFunction` configured with the predefined timing function specified by `name`.

## Declaration

```objectivec
+ (instancetype) functionWithName:(CAMediaTimingFunctionName) name;
```

## Parameters

- `name`: The timing function to use as specified in [Predefined Timing Functions](../predefined-timing-functions.md).

<a id="return-value"></a>

## Return Value

A new instance of `CAMediaTimingFunction` with the timing function specified by `name`.

## See Also

### Related Documentation

- [Core Animation Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreAnimation_guide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004514)

### Creating Timing Functions

- [functionWithControlPoints::::](functionwithcontrolpoints____.md): Creates and returns a new instance of `CAMediaTimingFunction` timing function modeled as a cubic Bézier curve using the specified control points.
- [initWithControlPoints::::](init%28controlpoints_______%29.md): Returns an initialized timing function modeled as a cubic Bézier curve using the specified control points.
