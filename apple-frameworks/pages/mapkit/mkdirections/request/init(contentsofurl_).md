> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/request/init(contentsofurl:)](https://developer.apple.com/documentation/mapkit/mkdirections/request/init(contentsofurl:))

# init(contentsOfURL:)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates and returns a directions request object using the specified URL.

## Declaration

```swift
init(contentsOfURL url: URL)
```

## Parameters

- `url`: The URL provided to your app.

<a id="return-value"></a>

## Return Value

An initialized directions request object.

<a id="Discussion"></a>

## Discussion

You should use the [isDirectionsRequest(\_:)](isdirectionsrequest%28__%29.md) method to verify that the specified URL is of the correct format before calling this method to initialize the object.

## See Also

### Creating a directions request object

- [isDirectionsRequest(\_:)](isdirectionsrequest%28__%29.md): Returns a Boolean value that indicates whether the specified URL contains a directions request.
