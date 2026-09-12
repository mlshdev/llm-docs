> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetupmanager/performaccessorysetup(using:completionhandler:)](https://developer.apple.com/documentation/homekit/hmaccessorysetupmanager/performaccessorysetup(using:completionhandler:))

# performAccessorySetup(using:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Performs the process of setting up accessories with Apple Home.

## Declaration

```swift
func performAccessorySetup(using request: HMAccessorySetupRequest, completionHandler completion: @escaping @Sendable (HMAccessorySetupResult?, (any Error)?) -> Void)
```

```swift
func performAccessorySetup(using request: HMAccessorySetupRequest) async throws -> HMAccessorySetupResult
```

## Parameters

- `request`: The accessory setup request.
- `completion`: A block that the framework invokes once the setup process completes.

<a id="Discussion"></a>

## Discussion

During the setup process, the framework adds each accessory to a home, assigns it to a room, and provides further configuration based on its services.

# performAccessorySetupUsingRequest:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

Performs the process of setting up accessories with Apple Home.

## Declaration

```objectivec
- (void) performAccessorySetupUsingRequest:(HMAccessorySetupRequest *) request completionHandler:(void (^)(HMAccessorySetupResult *result, NSError *error)) completion;
```

## Parameters

- `request`: The accessory setup request.
- `completion`: A block that the framework invokes once the setup process completes.

<a id="Discussion"></a>

## Discussion

During the setup process, the framework adds each accessory to a home, assigns it to a room, and provides further configuration based on its services.
