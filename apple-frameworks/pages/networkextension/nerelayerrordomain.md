> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelayerrordomain](https://developer.apple.com/documentation/networkextension/nerelayerrordomain)

# NERelayErrorDomain (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The domain for errors resulting from calls to the relay manager.

## Declaration

```swift
let NERelayErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NERelayManager](nerelaymanager.md). The [NERelayManagerError](nerelaymanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [NERelayManagerError](nerelaymanagererror.md): Error codes specific to relay managers.

# NERelayErrorDomain (Objective-C)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The domain for errors resulting from calls to the relay manager.

## Declaration

```objectivec
extern NSString * const NERelayErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NERelayManager](nerelaymanager.md). The [NERelayManagerError](nerelaymanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [NERelayManagerError](nerelaymanagererror.md): Error codes specific to relay managers.
