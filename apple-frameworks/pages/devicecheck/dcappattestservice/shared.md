> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcappattestservice/shared](https://developer.apple.com/documentation/devicecheck/dcappattestservice/shared)

# shared (Swift)

**Framework:** DeviceCheck  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

The shared App Attest service that you use to validate your app.

## Declaration

```swift
class var shared: DCAppAttestService { get }
```

## Mentioned In

- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)
- [Validating apps that connect to your server](../validating-apps-that-connect-to-your-server.md)

<a id="discussion"></a>

## Discussion

Use the shared instance of the service to generate and to certify a cryptographic key, and then to assert your app’s validity using that key.

## See Also

### Accessing the service

- [isSupported](issupported.md): A Boolean value that indicates whether a particular device provides the App Attest service.

# sharedService (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

The shared App Attest service that you use to validate your app.

## Declaration

```objectivec
@property (class, readonly) DCAppAttestService * sharedService;
```

## Mentioned In

- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)
- [Validating apps that connect to your server](../validating-apps-that-connect-to-your-server.md)

<a id="discussion"></a>

## Discussion

Use the shared instance of the service to generate and to certify a cryptographic key, and then to assert your app’s validity using that key.

## See Also

### Accessing the service

- [supported](issupported.md): A Boolean value that indicates whether a particular device provides the App Attest service.
