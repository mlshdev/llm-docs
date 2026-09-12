> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanager/isadvertising](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanager/isadvertising)

# isAdvertising (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the peripheral is advertising data.

## Declaration

```swift
var isAdvertising: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the peripheral is advertising data as a result of successfully calling the [startAdvertising(\_:)](startadvertising%28__%29.md) method. The value is [false](https://developer.apple.com/documentation/swift/false) if the peripheral is no longer advertising its data.

## See Also

### Managing Advertising

- [startAdvertising(\_:)](startadvertising%28__%29.md): Advertises peripheral manager data.
- [Advertising Data](../advertising-data.md)
- [stopAdvertising()](stopadvertising%28%29.md): Stops advertising peripheral manager data.

# isAdvertising (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the peripheral is advertising data.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isAdvertising;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the peripheral is advertising data as a result of successfully calling the [startAdvertising:](startadvertising%28__%29.md) method. The value is [false](https://developer.apple.com/documentation/swift/false) if the peripheral is no longer advertising its data.

## See Also

### Managing Advertising

- [startAdvertising:](startadvertising%28__%29.md): Advertises peripheral manager data.
- [Advertising Data](../advertising-data.md)
- [stopAdvertising](stopadvertising%28%29.md): Stops advertising peripheral manager data.
