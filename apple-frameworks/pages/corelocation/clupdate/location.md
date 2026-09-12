> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clupdate/location](https://developer.apple.com/documentation/corelocation/clupdate/location)

# location

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A person’s location, if available.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocation * location;
```

<a id="Discussion"></a>

## Discussion

If the location isn’t available, the value is `nil`.

## See Also

### Update properties

- [isStationary](isstationary.md): Deprecated. A Boolean value that indicates whether the device is stationary.
