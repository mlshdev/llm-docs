> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanager/watersubmersionavailable](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanager/watersubmersionavailable)

# waterSubmersionAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value indicating whether the current device supports the submersion manager.

## Declaration

```swift
class var waterSubmersionAvailable: Bool { get }
```

## Mentioned In

- [Accessing submersion data](../accessing-submersion-data.md)

<a id="Discussion"></a>

## Discussion

On Apple Watch Ultra, the system sets `waterSubmersionAvailable` to [true](https://developer.apple.com/documentation/swift/true). On all other devices and in Simulator, the system sets it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking availability and authorization

- [authorizationStatus](authorizationstatus.md): A value indicating whether the app has user authorization to receive submersion data.

# waterSubmersionAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value indicating whether the current device supports the submersion manager.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL waterSubmersionAvailable;
```

## Mentioned In

- [Accessing submersion data](../accessing-submersion-data.md)

<a id="Discussion"></a>

## Discussion

On Apple Watch Ultra, the system sets `waterSubmersionAvailable` to [true](https://developer.apple.com/documentation/swift/true). On all other devices and in Simulator, the system sets it to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Checking availability and authorization

- [authorizationStatus](authorizationstatus.md): A value indicating whether the app has user authorization to receive submersion data.
