> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplateextralargeringimage/fillfraction](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplateextralargeringimage/fillfraction)

# fillFraction (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

The fraction of the ring to fill.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var fillFraction: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Specify a value between `0.0` and `1.0`, where `0.0` represents no ring and `1.0` represents a complete ring.

## See Also

### Setting the Complication Data

- [imageProvider](imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.

# fillFraction (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 3.0+ (deprecated in 27.0)

The fraction of the ring to fill.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic) float fillFraction;
```

<a id="Discussion"></a>

## Discussion

Specify a value between `0.0` and `1.0`, where `0.0` represents no ring and `1.0` represents a complete ring.

## See Also

### Setting the Complication Data

- [imageProvider](imageprovider.md): Deprecated. The image to display in the complication.
- [ringStyle](ringstyle.md): Deprecated. The style of the progress ring.
