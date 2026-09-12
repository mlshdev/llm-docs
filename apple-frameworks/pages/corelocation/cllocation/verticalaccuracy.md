> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/verticalaccuracy](https://developer.apple.com/documentation/corelocation/cllocation/verticalaccuracy)

# verticalAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The validity of the altitude values, and their estimated uncertainty, measured in meters.

## Declaration

```swift
var verticalAccuracy: CLLocationAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

A positive [verticalAccuracy](verticalaccuracy.md) value represents the estimated uncertainty associated with [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md). This value is available whenever altitude values are available.

If [verticalAccuracy](verticalaccuracy.md) is `0` or a negative number, [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md) values are invalid. If [verticalAccuracy](verticalaccuracy.md) is a postive number, [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md) values are valid.

A positive [verticalAccuracy](verticalaccuracy.md) value represents an uncertainty that’s approximately 68 percent, or one standard deviation, above and below the altitude values.

> **Note**

>  In iOS, this property is declared as `nonatomic`. In macOS, it’s declared as `atomic`.

## See Also

### Getting the location accuracy

- [horizontalAccuracy](horizontalaccuracy.md): The radius of uncertainty for the location, measured in meters.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.

# verticalAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The validity of the altitude values, and their estimated uncertainty, measured in meters.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationAccuracy verticalAccuracy;
```

<a id="Discussion"></a>

## Discussion

A positive [verticalAccuracy](verticalaccuracy.md) value represents the estimated uncertainty associated with [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md). This value is available whenever altitude values are available.

If [verticalAccuracy](verticalaccuracy.md) is `0` or a negative number, [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md) values are invalid. If [verticalAccuracy](verticalaccuracy.md) is a postive number, [altitude](altitude.md) and [ellipsoidalAltitude](ellipsoidalaltitude.md) values are valid.

A positive [verticalAccuracy](verticalaccuracy.md) value represents an uncertainty that’s approximately 68 percent, or one standard deviation, above and below the altitude values.

> **Note**

>  In iOS, this property is declared as `nonatomic`. In macOS, it’s declared as `atomic`.

## See Also

### Getting the location accuracy

- [horizontalAccuracy](horizontalaccuracy.md): The radius of uncertainty for the location, measured in meters.
- [CLLocationAccuracy](../cllocationaccuracy.md): The accuracy of a geographical coordinate.
