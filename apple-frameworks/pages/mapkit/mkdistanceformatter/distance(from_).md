> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdistanceformatter/distance(from:)](https://developer.apple.com/documentation/mapkit/mkdistanceformatter/distance(from:))

# distance(from:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance value parsed from the specified string.

## Declaration

```swift
func distance(from distance: String) -> CLLocationDistance
```

## Parameters

- `distance`: A formatted string that specifies a distance.

<a id="return-value"></a>

## Return Value

The distance value represented by the string or `-1.0` if the string does not contain a recognized distance value.

<a id="Discussion"></a>

## Discussion

This method searches the provided string for a number that could represent a distance. Specify distances as purely numerical values. Don’t specify distances as fractions such as “1/4 mile,” use distances and standard distance designations instead, such as “0.25 miles,” “1.2 km,” “120 yards,” and so on.

## See Also

### Converting distances

- [string(fromDistance:)](string%28fromdistance_%29.md): Creates a string representation of the specified distance.

# distanceFromString: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 2.0+

Returns the distance value parsed from the specified string.

## Declaration

```objectivec
- (CLLocationDistance) distanceFromString:(NSString *) distance;
```

## Parameters

- `distance`: A formatted string that specifies a distance.

<a id="return-value"></a>

## Return Value

The distance value represented by the string or `-1.0` if the string does not contain a recognized distance value.

<a id="Discussion"></a>

## Discussion

This method searches the provided string for a number that could represent a distance. Specify distances as purely numerical values. Don’t specify distances as fractions such as “1/4 mile,” use distances and standard distance designations instead, such as “0.25 miles,” “1.2 km,” “120 yards,” and so on.

## See Also

### Converting distances

- [stringFromDistance:](string%28fromdistance_%29.md): Creates a string representation of the specified distance.
