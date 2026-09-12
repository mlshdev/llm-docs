> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clvisit/horizontalaccuracy](https://developer.apple.com/documentation/corelocation/clvisit/horizontalaccuracy)

# horizontalAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The horizontal accuracy (in meters) of the specified coordinate.

## Declaration

```swift
var horizontalAccuracy: CLLocationAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

The latitude and longitude specified by the [coordinate](coordinate.md) property identify the center of the circle, and this value indicates the radius of that circle.

## See Also

### Getting the location

- [coordinate](coordinate.md): The geographical coordinate information.

# horizontalAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The horizontal accuracy (in meters) of the specified coordinate.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationAccuracy horizontalAccuracy;
```

<a id="Discussion"></a>

## Discussion

The latitude and longitude specified by the [coordinate](coordinate.md) property identify the center of the circle, and this value indicates the radius of that circle.

## See Also

### Getting the location

- [coordinate](coordinate.md): The geographical coordinate information.
