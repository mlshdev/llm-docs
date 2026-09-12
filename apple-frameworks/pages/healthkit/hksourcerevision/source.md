> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision/source](https://developer.apple.com/documentation/healthkit/hksourcerevision/source)

# source (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source for a sample.

## Declaration

```swift
var source: HKSource { get }
```

<a id="Discussion"></a>

## Discussion

This property contains an [HKSource](../hksource.md) object representing the app that saved the data into the HealthKit store. The source can also represent a hardware device that writes data directly to HealthKit (for example, an iPhone, Apple Watch, or Bluetooth LE heart rate monitor). Before iOS 9.0, the companion app for other peripherals also saved device information in the object’s [source](source.md) property.

## See Also

### Accessing Source and Version Information

- [version](version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](operatingsystemversion.md): A string that identifies the operating system used to save a sample.
- [productType](producttype.md): A string that identifies the device used to save a sample.

# source (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source for a sample.

## Declaration

```objectivec
@property (readonly) HKSource * source;
```

<a id="Discussion"></a>

## Discussion

This property contains an [HKSource](../hksource.md) object representing the app that saved the data into the HealthKit store. The source can also represent a hardware device that writes data directly to HealthKit (for example, an iPhone, Apple Watch, or Bluetooth LE heart rate monitor). Before iOS 9.0, the companion app for other peripherals also saved device information in the object’s [source](source.md) property.

## See Also

### Accessing Source and Version Information

- [version](version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](operatingsystemversion.md): A string that identifies the operating system used to save a sample.
- [productType](producttype.md): A string that identifies the device used to save a sample.
