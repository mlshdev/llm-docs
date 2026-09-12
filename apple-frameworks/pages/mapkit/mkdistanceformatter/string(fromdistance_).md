> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/string(fromdistance:)](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/string(fromdistance:))

# string(fromDistance:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a string representation of the specified distance.

## Declaration

```swift
func string(fromDistance distance: CLLocationDistance) -> String
```

## Parameters

- `distance`: The distance value that you want to convert to a string.

<a id="return-value"></a>

## Return Value

A user-readable string that describes the distance based on the formatter settings.

## See Also

### Converting distances

- [distance(from:)](distance%28from_%29.md): Returns the distance value parsed from the specified string.

# stringFromDistance: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Creates a string representation of the specified distance.

## Declaration

```objectivec
- (NSString *) stringFromDistance:(CLLocationDistance) distance;
```

## Parameters

- `distance`: The distance value that you want to convert to a string.

<a id="return-value"></a>

## Return Value

A user-readable string that describes the distance based on the formatter settings.

## See Also

### Converting distances

- [distanceFromString:](distance%28from_%29.md): Returns the distance value parsed from the specified string.
