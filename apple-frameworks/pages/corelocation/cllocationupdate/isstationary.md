> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationupdate/isstationary](https://developer.apple.com/documentation/corelocation/cllocationupdate/isstationary)

# isStationary

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Boolean value that indicates whether the user is stationary.

## Declaration

```swift
var isStationary: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Updates may stop flowing temporarily for several reasons including if the app is no longer authorized to receive location updates or if its location becomes unknown. If Core Location stops delivering updates because the device is stationary, then it sets `isStationary` to [true](https://developer.apple.com/documentation/swift/true); otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

If `isStationary` is [true](https://developer.apple.com/documentation/swift/true), the framework can suspend updates until the person starts moving, or their location becomes unknown.

## See Also

### Determining movement and location

- [location](location.md): The user’s location, if available.
