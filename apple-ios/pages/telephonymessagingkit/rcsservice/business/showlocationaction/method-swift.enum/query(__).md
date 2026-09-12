> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business/showlocationaction/method-swift.enum/query(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business/showlocationaction/method-swift.enum/query(_:))

# RCSService.Business.ShowLocationAction.Method.query(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Case  
**Availability:** iOS 26.0+

Search for location(s) by query.

## Declaration

```swift
case query(String)
```

<a id="discussion"></a>

## Discussion

Search is based on user’s current location. Examples: “restaurants”, “GSMA Head Office, 25 Walbrook, London, UK”

## See Also

### Determining location method

- [RCSService.Business.ShowLocationAction.Method.coordinates(\_:)](coordinates%28__%29.md): Search for location using coordinates.
- [CLLocationCoordinate2D](https://developer.apple.com/documentation/corelocation/cllocationcoordinate2d): The latitude and longitude associated with a location, specified using the WGS 84 reference frame.
