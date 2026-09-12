> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/imageprovider](https://developer.apple.com/documentation/clockkit/clkcomplicationtemplategraphicextralargecircularclosedgaugeimage/imageprovider)

# imageProvider (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
@NSCopying var imageProvider: CLKFullColorImageProvider { get set }
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.

# imageProvider (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

The image to display.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) CLKFullColorImageProvider * imageProvider;
```

<a id="Discussion"></a>

## Discussion

This image provider produces a full-color image, masked to a circle.

## See Also

### Setting the Complication Data

- [gaugeProvider](gaugeprovider.md): Deprecated. The gauge to display in the complication.
