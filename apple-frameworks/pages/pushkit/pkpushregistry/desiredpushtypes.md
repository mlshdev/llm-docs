> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistry/desiredpushtypes](https://developer.apple.com/documentation/pushkit/pkpushregistry/desiredpushtypes)

# desiredPushTypes (Swift)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Registers the push types for this push registry object.

## Declaration

```swift
var desiredPushTypes: Set<PKPushType>? { get set }
```

## Mentioned In

- [Supporting PushKit Notifications in Your App](../supporting-pushkit-notifications-in-your-app.md)

<a id="Discussion"></a>

## Discussion

When you assign a value to this property, the push registry object makes a registration request with the PushKit server. This request is asynchronous, and the success or failure of the request is reported to your registry’s delegate object. For a successful registration, PushKit delivers a push token to the delegate. Use that token to generate push requests from your server.

For a list of push types that you may include in the set, see [PKPushType](../pkpushtype.md).

## See Also

### Managing the Push Registry

- [pushToken(for:)](pushtoken%28for_%29.md): Retrieves the locally cached push token for the specified push type.

# desiredPushTypes (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Registers the push types for this push registry object.

## Declaration

```objectivec
@property (copy, readwrite, nullable) NSSet<NSString *> * desiredPushTypes;
```

## Mentioned In

- [Supporting PushKit Notifications in Your App](../supporting-pushkit-notifications-in-your-app.md)

<a id="Discussion"></a>

## Discussion

When you assign a value to this property, the push registry object makes a registration request with the PushKit server. This request is asynchronous, and the success or failure of the request is reported to your registry’s delegate object. For a successful registration, PushKit delivers a push token to the delegate. Use that token to generate push requests from your server.

For a list of push types that you may include in the set, see [PKPushType](../pkpushtype.md).

## See Also

### Managing the Push Registry

- [pushTokenForType:](pushtoken%28for_%29.md): Retrieves the locally cached push token for the specified push type.
