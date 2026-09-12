> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsizeequaltosize(_:_:)](https://developer.apple.com/documentation/mapkit/mkmapsizeequaltosize(_:_:))

# MKMapSizeEqualToSize(\_:\_:) (Swift)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map sizes are equal.

## Declaration

```swift
func MKMapSizeEqualToSize(_ size1: MKMapSize, _ size2: MKMapSize) -> Bool
```

## Parameters

- `size1`: The first map size.
- `size2`: The second map size.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `width` and `height` values in both sizes are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if one or both values are different.

# MKMapSizeEqualToSize (Objective-C)

**Framework:** MapKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether two map sizes are equal.

## Declaration

```objectivec
static BOOL MKMapSizeEqualToSize(MKMapSize size1, MKMapSize size2);
```

## Parameters

- `size1`: The first map size.
- `size2`: The second map size.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the `width` and `height` values in both sizes are exactly the same, or [false](https://developer.apple.com/documentation/swift/false) if one or both values are different.
