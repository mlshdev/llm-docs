> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanager/homes](https://developer.apple.com/documentation/homekit/hmhomemanager/homes)

# homes (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all homes managed by this home manager.

## Declaration

```swift
var homes: [HMHome] { get }
```

<a id="Discussion"></a>

## Discussion

When you create a new home manager, its [homes](homes.md) array is empty by default. You can only be sure that this array is properly initialized with data from the shared HomeKit database after the manager calls its delegate’s [homeManagerDidUpdateHomes(\_:)](../hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md) method for the first time.

## See Also

### Working with the home layout

- [HMHome](../hmhome.md): The primary unit of living space, typically composed of rooms organized into zones.

# homes (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An array of all homes managed by this home manager.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMHome *> * homes;
```

<a id="Discussion"></a>

## Discussion

When you create a new home manager, its [homes](homes.md) array is empty by default. You can only be sure that this array is properly initialized with data from the shared HomeKit database after the manager calls its delegate’s [homeManagerDidUpdateHomes:](../hmhomemanagerdelegate/homemanagerdidupdatehomes%28__%29.md) method for the first time.

## See Also

### Working with the home layout

- [HMHome](../hmhome.md): The primary unit of living space, typically composed of rooms organized into zones.
