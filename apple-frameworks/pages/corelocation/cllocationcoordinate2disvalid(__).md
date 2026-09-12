> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationcoordinate2disvalid(_:)](https://developer.apple.com/documentation/corelocation/cllocationcoordinate2disvalid(_:))

# CLLocationCoordinate2DIsValid(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the specified coordinate is valid.

## Declaration

```swift
func CLLocationCoordinate2DIsValid(_ coord: CLLocationCoordinate2D) -> Bool
```

## Parameters

- `coord`: A coordinate containing latitude and longitude values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the coordinate is valid or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

A coordinate is considered invalid if it meets at least one of the following criteria:

- Its latitude is greater than 90 degrees or less than -90 degrees.
- Its longitude is greater than 180 degrees or less than -180 degrees.

## See Also

### Validating a coordinate

- [kCLLocationCoordinate2DInvalid](kcllocationcoordinate2dinvalid.md): An invalid coordinate value.

# CLLocationCoordinate2DIsValid (Objective-C)

**Framework:** Core Location  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the specified coordinate is valid.

## Declaration

```objectivec
extern BOOL CLLocationCoordinate2DIsValid(CLLocationCoordinate2D coord);
```

## Parameters

- `coord`: A coordinate containing latitude and longitude values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the coordinate is valid or [false](https://developer.apple.com/documentation/swift/false) if it is not.

<a id="Discussion"></a>

## Discussion

A coordinate is considered invalid if it meets at least one of the following criteria:

- Its latitude is greater than 90 degrees or less than -90 degrees.
- Its longitude is greater than 180 degrees or less than -180 degrees.

## See Also

### Validating a coordinate

- [kCLLocationCoordinate2DInvalid](kcllocationcoordinate2dinvalid.md): An invalid coordinate value.
