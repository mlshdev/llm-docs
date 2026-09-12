> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanager/authorizationstatus](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanager/authorizationstatus)

# authorizationStatus (Swift)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

A value indicating whether the app has user authorization to receive submersion data.

## Declaration

```swift
class var authorizationStatus: CMAuthorizationStatus { get }
```

<a id="Discussion"></a>

## Discussion

The system automatically requests authorization to access motion data the first time your app instantiates a `CMWaterSubmersionManager`. You can use this property to check the current authorization status.

## See Also

### Checking availability and authorization

- [waterSubmersionAvailable](watersubmersionavailable.md): A Boolean value indicating whether the current device supports the submersion manager.

# authorizationStatus (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A value indicating whether the app has user authorization to receive submersion data.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CMAuthorizationStatus authorizationStatus;
```

<a id="Discussion"></a>

## Discussion

The system automatically requests authorization to access motion data the first time your app instantiates a `CMWaterSubmersionManager`. You can use this property to check the current authorization status.

## See Also

### Checking availability and authorization

- [waterSubmersionAvailable](watersubmersionavailable.md): A Boolean value indicating whether the current device supports the submersion manager.
