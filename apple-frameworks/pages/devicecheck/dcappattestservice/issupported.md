> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcappattestservice/issupported](https://developer.apple.com/documentation/devicecheck/dcappattestservice/issupported)

# isSupported (Swift)

**Framework:** DeviceCheck  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether a particular device provides the App Attest service.

## Declaration

```swift
var isSupported: Bool { get }
```

## Mentioned In

- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)

<a id="discussion"></a>

## Discussion

> **Important**

> Not all device types support the App Attest service, so check for support before using the service.
>
> If you read [isSupported](issupported.md) from an app running on a Mac device, the value is [false](https://developer.apple.com/documentation/swift/false). This includes Mac Catalyst apps, and iOS or iPadOS apps running on Apple silicon.

If you read [isSupported](issupported.md) from within an app extension, the value might be [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false), depending on the extension type. However, most extensions don’t support App Attest. The [generateKey(completionHandler:)](generatekey%28completionhandler_%29.md) method fails when you call it from an app extension, regardless of the value of [isSupported](issupported.md).

The only app extensions that support App Attest are watchOS extensions in watchOS 9 or later. For these extensions, you can use the results from [isSupported](issupported.md) to indicate whether your WatchKit extension bypasses attestation.

## See Also

### Accessing the service

- [shared](shared.md): The shared App Attest service that you use to validate your app.

# supported (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether a particular device provides the App Attest service.

## Declaration

```objectivec
@property (readonly, getter=isSupported) BOOL supported;
```

## Mentioned In

- [Establishing your app’s integrity](../establishing-your-app-s-integrity.md)

<a id="discussion"></a>

## Discussion

> **Important**

> Not all device types support the App Attest service, so check for support before using the service.
>
> If you read [supported](issupported.md) from an app running on a Mac device, the value is [false](https://developer.apple.com/documentation/swift/false). This includes Mac Catalyst apps, and iOS or iPadOS apps running on Apple silicon.

If you read [supported](issupported.md) from within an app extension, the value might be [true](https://developer.apple.com/documentation/swift/true) or [false](https://developer.apple.com/documentation/swift/false), depending on the extension type. However, most extensions don’t support App Attest. The [generateKeyWithCompletionHandler:](generatekey%28completionhandler_%29.md) method fails when you call it from an app extension, regardless of the value of [supported](issupported.md).

The only app extensions that support App Attest are watchOS extensions in watchOS 9 or later. For these extensions, you can use the results from [supported](issupported.md) to indicate whether your WatchKit extension bypasses attestation.

## See Also

### Accessing the service

- [sharedService](shared.md): The shared App Attest service that you use to validate your app.
