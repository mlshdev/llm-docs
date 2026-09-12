> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistry/pushtoken(for:)](https://developer.apple.com/documentation/pushkit/pkpushregistry/pushtoken(for:))

# pushToken(for:) (Swift)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the locally cached push token for the specified push type.

## Declaration

```swift
func pushToken(for type: PKPushType) -> Data?
```

## Parameters

- `type`: A push type requested by this push registry object. For a list of possible types, see [PKPushType](../pkpushtype.md).

<a id="Return-Value"></a>

## Return Value

The push token used to send pushes to the device or `nil` if no token is available for the specified type.

<a id="Discussion"></a>

## Discussion

If registration for a specific push type is successful, the push registry delivers the corresponding push token to its delegate and adds a copy of the token to its local cache. Use this method to retrieve the token at a later time.

## See Also

### Managing the Push Registry

- [desiredPushTypes](desiredpushtypes.md): Registers the push types for this push registry object.

# pushTokenForType: (Objective-C)

**Framework:** PushKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the locally cached push token for the specified push type.

## Declaration

```objectivec
- (NSData *) pushTokenForType:(PKPushType) type;
```

## Parameters

- `type`: A push type requested by this push registry object. For a list of possible types, see [PKPushType](../pkpushtype.md).

<a id="Return-Value"></a>

## Return Value

The push token used to send pushes to the device or `nil` if no token is available for the specified type.

<a id="Discussion"></a>

## Discussion

If registration for a specific push type is successful, the push registry delivers the corresponding push token to its delegate and adds a copy of the token to its local cache. Use this method to retrieve the token at a later time.

## See Also

### Managing the Push Registry

- [desiredPushTypes](desiredpushtypes.md): Registers the push types for this push registry object.
