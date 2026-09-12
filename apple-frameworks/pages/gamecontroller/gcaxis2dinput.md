> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcaxis2dinput](https://developer.apple.com/documentation/gamecontroller/gcaxis2dinput)

# GCAxis2DInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The common properties of inputs that provide a normalized point in a two-dimensional coordinate system with a fixed origin.

## Declaration

```swift
protocol GCAxis2DInput : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The normalized point with coordinates that range between `-1` and `1`. The origin `(0, 0)` represents the neutral state of the input.

## Topics

### Getting the characteristics

- [canWrap](gcaxis2dinput/canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.
- [isAnalog](gcaxis2dinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gcaxis2dinput/value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](gcaxis2dinput/valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](gcaxis2dinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxis2dinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gcaxis2dinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Axes

- [xAxis](gcdirectionpadelement/xaxis.md): The input object that represents the x-axis on the directional pad.
- [yAxis](gcdirectionpadelement/yaxis.md): The input object that represents the y-axis on the directional pad.
- [xyAxes](gcdirectionpadelement/xyaxes.md): The location of the directional pad represented as a point.

# GCAxis2DInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.3+ · tvOS 17.4+ · visionOS 1.1+

The common properties of inputs that provide a normalized point in a two-dimensional coordinate system with a fixed origin.

## Declaration

```objectivec
@protocol GCAxis2DInput <NSObject>
```

<a id="overview"></a>

## Overview

The normalized point with coordinates that range between `-1` and `1`. The origin `(0, 0)` represents the neutral state of the input.

## Topics

### Getting the characteristics

- [canWrap](gcaxis2dinput/canwrap.md): A Boolean value that indicates whether the value wraps when it reaches the range’s minimum or maximum value.
- [analog](gcaxis2dinput/isanalog.md): A Boolean value that indicates whether the input provides analog values.

### Getting the value

- [value](gcaxis2dinput/value.md): The axis input represented as a normalized point in a two-dimensional coordinate system.
- [GCPoint2](gcpoint2.md): A structure that represents a normalized point in a two-dimensional coordinate system.
- [valueDidChangeHandler](gcaxis2dinput/valuedidchangehandler.md): The block that the axis element calls when its value changes.
- [lastValueTimestamp](gcaxis2dinput/lastvaluetimestamp.md): The time of the most recent value change.
- [lastValueLatency](gcaxis2dinput/lastvaluelatency.md): The time in seconds between the last value change and the current time.

### Getting user actions

- [sources](gcaxis2dinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Axes

- [xAxis](gcdirectionpadelement/xaxis.md): The input object that represents the x-axis on the directional pad.
- [yAxis](gcdirectionpadelement/yaxis.md): The input object that represents the y-axis on the directional pad.
- [xyAxes](gcdirectionpadelement/xyaxes.md): The location of the directional pad represented as a point.
