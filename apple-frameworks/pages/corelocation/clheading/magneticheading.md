> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clheading/magneticheading](https://developer.apple.com/documentation/corelocation/clheading/magneticheading)

# magneticHeading (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · watchOS 2.0+

The heading (measured in degrees) relative to magnetic north.

## Declaration

```swift
var magneticHeading: CLLocationDirection { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the heading relative to the magnetic North Pole, which is different from the geographic North Pole. The value `0` means the device is pointed toward magnetic north, `90` means it is pointed east, `180` means it is pointed south, and so on. The value in this property should always be valid.

In iOS 3.x and earlier, the value in this property is always measured relative to the top of the device in a portrait orientation, regardless of the device’s actual physical or interface orientation. In iOS 4.0 and later, the value is measured relative to the heading orientation specified by the location manager. For more information, see the [headingOrientation](../cllocationmanager/headingorientation.md) property in [CLLocationManager](../cllocationmanager.md).

If the [headingAccuracy](headingaccuracy.md) property contains a negative value, the value in this property should be considered unreliable.

## See Also

### Getting the heading values

- [trueHeading](trueheading.md): The heading (measured in degrees) relative to true north.
- [headingAccuracy](headingaccuracy.md): The maximum deviation (measured in degrees) between the reported heading and the true geomagnetic heading.

# magneticHeading (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · watchOS 2.0+

The heading (measured in degrees) relative to magnetic north.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDirection magneticHeading;
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the heading relative to the magnetic North Pole, which is different from the geographic North Pole. The value `0` means the device is pointed toward magnetic north, `90` means it is pointed east, `180` means it is pointed south, and so on. The value in this property should always be valid.

In iOS 3.x and earlier, the value in this property is always measured relative to the top of the device in a portrait orientation, regardless of the device’s actual physical or interface orientation. In iOS 4.0 and later, the value is measured relative to the heading orientation specified by the location manager. For more information, see the [headingOrientation](../cllocationmanager/headingorientation.md) property in [CLLocationManager](../cllocationmanager.md).

If the [headingAccuracy](headingaccuracy.md) property contains a negative value, the value in this property should be considered unreliable.

## See Also

### Getting the heading values

- [trueHeading](trueheading.md): The heading (measured in degrees) relative to true north.
- [headingAccuracy](headingaccuracy.md): The maximum deviation (measured in degrees) between the reported heading and the true geomagnetic heading.
