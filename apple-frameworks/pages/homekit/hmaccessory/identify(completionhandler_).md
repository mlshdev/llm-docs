> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/identify(completionhandler:)](https://developer.apple.com/documentation/homekit/hmaccessory/identify(completionhandler:))

# identify(completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Asks an accessory to identify itself.

## Declaration

```swift
func identify(completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func identify() async throws
```

## Parameters

- `completion`: Block that is invoked once the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Accessories typically identify themselves by briefly doing something the user can see or hear. The behavior is specific to the device. For example, a light bulb might identify itself by briefly turning on if it is currently off, or by briefly dimming if it is currently on. This can help a user pinpoint one device among several that are similar.

## See Also

### Asking an accessory to identify itself

- [supportsIdentify](supportsidentify.md): A Boolean value that indicates whether the accessory supports the identify action.

# identifyWithCompletionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

Asks an accessory to identify itself.

## Declaration

```objectivec
- (void) identifyWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: Block that is invoked once the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Accessories typically identify themselves by briefly doing something the user can see or hear. The behavior is specific to the device. For example, a light bulb might identify itself by briefly turning on if it is currently off, or by briefly dimming if it is currently on. This can help a user pinpoint one device among several that are similar.

## See Also

### Asking an accessory to identify itself

- [supportsIdentify](supportsidentify.md): A Boolean value that indicates whether the accessory supports the identify action.
