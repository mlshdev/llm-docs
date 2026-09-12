> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstimezone/isequal(to:)](https://developer.apple.com/documentation/foundation/nstimezone/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver has the same name and data as the specified time zone.

## Declaration

```swift
func isEqual(to aTimeZone: TimeZone) -> Bool
```

## Parameters

- `aTimeZone`: The time zone to compare with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aTimeZone` and the receiver have the same name and data, otherwise [false](https://developer.apple.com/documentation/swift/false).

# isEqualToTimeZone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver has the same name and data as the specified time zone.

## Declaration

```objectivec
- (BOOL) isEqualToTimeZone:(NSTimeZone *) aTimeZone;
```

## Parameters

- `aTimeZone`: The time zone to compare with the receiver.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `aTimeZone` and the receiver have the same name and data, otherwise [false](https://developer.apple.com/documentation/swift/false).
