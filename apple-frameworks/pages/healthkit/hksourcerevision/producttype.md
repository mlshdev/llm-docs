> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision/producttype](https://developer.apple.com/documentation/healthkit/hksourcerevision/producttype)

# productType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A string that identifies the device used to save a sample.

## Declaration

```swift
var productType: String? { get }
```

<a id="Discussion"></a>

## Discussion

For samples saved on Apple Watch Series 2, HealthKit sets the product type property to `watch2,4`.

> **Note**

>  Samples saved using older versions of HealthKit may have a `nil`-valued product type, indicating that the product type is unknown.

## Topics

### Constants

- [HKSourceRevisionAnyProductType](../hksourcerevisionanyproducttype.md): A constant that matches any product type.

## See Also

### Accessing Source and Version Information

- [source](source.md): The source for a sample.
- [version](version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](operatingsystemversion.md): A string that identifies the operating system used to save a sample.

# productType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A string that identifies the device used to save a sample.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * productType;
```

<a id="Discussion"></a>

## Discussion

For samples saved on Apple Watch Series 2, HealthKit sets the product type property to `watch2,4`.

> **Note**

>  Samples saved using older versions of HealthKit may have a `nil`-valued product type, indicating that the product type is unknown.

## Topics

### Constants

- [HKSourceRevisionAnyProductType](../hksourcerevisionanyproducttype.md): A constant that matches any product type.

## See Also

### Accessing Source and Version Information

- [source](source.md): The source for a sample.
- [version](version.md): A string that identifies a particular version of the source.
- [operatingSystemVersion](operatingsystemversion.md): A string that identifies the operating system used to save a sample.
