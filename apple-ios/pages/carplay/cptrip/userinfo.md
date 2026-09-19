> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrip/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A custom object associated with the trip.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to store any arbitrary data related to the trip that you may need at a later date, or by another part of your app that consumes trips.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A custom object associated with the trip.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this property to store any arbitrary data related to the trip that you may need at a later date, or by another part of your app that consumes trips.
