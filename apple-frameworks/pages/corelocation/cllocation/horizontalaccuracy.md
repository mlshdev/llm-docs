> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/horizontalaccuracy](https://developer.apple.com/documentation/corelocation/cllocation/horizontalaccuracy)

# horizontalAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The radius of uncertainty for the location, measured in meters.

## Declaration

```swift
var horizontalAccuracy: CLLocationAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

The location’s latitude and longitude identify the center of the circle, and this value indicates the radius of that circle. A negative value indicates that the latitude and longitude are invalid.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location accuracy

- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values, and their estimated uncertainty, measured in meters.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.

# horizontalAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The radius of uncertainty for the location, measured in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationAccuracy horizontalAccuracy;
```

<a id="Discussion"></a>

## Discussion

The location’s latitude and longitude identify the center of the circle, and this value indicates the radius of that circle. A negative value indicates that the latitude and longitude are invalid.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting the location accuracy

- [verticalAccuracy](verticalaccuracy.md): The validity of the altitude values, and their estimated uncertainty, measured in meters.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.
