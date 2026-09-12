> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clcircularregion/contains(_:)](https://developer.apple.com/documentation/corelocation/clcircularregion/contains(_:))

# contains(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a Boolean value indicating whether the geographic area contains the specified coordinate.

## Declaration

```swift
func contains(_ coordinate: CLLocationCoordinate2D) -> Bool
```

## Parameters

- `coordinate`: The coordinate to test against the region.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the coordinate lies within the region’s boundaries, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

# containsCoordinate: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns a Boolean value indicating whether the geographic area contains the specified coordinate.

## Declaration

```objectivec
- (BOOL) containsCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: The coordinate to test against the region.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the coordinate lies within the region’s boundaries, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.
