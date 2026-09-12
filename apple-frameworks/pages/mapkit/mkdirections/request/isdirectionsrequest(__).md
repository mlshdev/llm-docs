> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/isdirectionsrequest(_:)](https://developer.apple.com/documentation/mapkit/mkdirections/request/isdirectionsrequest(_:))

# isDirectionsRequest(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified URL contains a directions request.

## Declaration

```swift
class func isDirectionsRequest(_ url: URL) -> Bool
```

## Parameters

- `url`: The URL the system provides  to your app.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the URL contains a directions request that your app needs to display to the user, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a directions request object

- [init(contentsOfURL:)](init%28contentsofurl_%29.md): Creates and returns a directions request object using the specified URL.

# isDirectionsRequestURL: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the specified URL contains a directions request.

## Declaration

```objectivec
+ (BOOL) isDirectionsRequestURL:(NSURL *) url;
```

## Parameters

- `url`: The URL the system provides  to your app.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the URL contains a directions request that your app needs to display to the user, or [false](https://developer.apple.com/documentation/swift/false) if it doesn’t.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)
