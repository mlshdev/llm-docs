> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdevice/producttype](https://developer.apple.com/documentation/sensorkit/srdevice/producttype)

# productType (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A string that identifies the device used to save a sample.

## Declaration

```swift
var productType: String { get }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Samples saved using older versions of SensorKit may have a `nil`-valued product type that indicates the product type is unknown.

## See Also

### Accessing Device Information

- [model](model.md): The user-defined name of the device.
- [name](name.md): The framework-defined name of the device.
- [systemName](systemname.md): The device’s operating system.
- [systemVersion](systemversion.md): The device’s operating system version.

# productType (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A string that identifies the device used to save a sample.

## Declaration

```objectivec
@property (copy, readonly) NSString * productType;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  Samples saved using older versions of SensorKit may have a `nil`-valued product type that indicates the product type is unknown.

## See Also

### Accessing Device Information

- [model](model.md): The user-defined name of the device.
- [name](name.md): The framework-defined name of the device.
- [systemName](systemname.md): The device’s operating system.
- [systemVersion](systemversion.md): The device’s operating system version.
