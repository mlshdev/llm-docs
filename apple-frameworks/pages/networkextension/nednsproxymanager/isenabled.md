> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/isenabled](https://developer.apple.com/documentation/networkextension/nednsproxymanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The status of a DNS proxy.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Only one DNS proxy can be active in the system at a time. Therefore, setting this property to [true](https://developer.apple.com/documentation/swift/true) disables any DNS proxy configurations of other apps. Similarly, the system sets this property to [false](https://developer.apple.com/documentation/swift/false) when any other DNS proxy configuration is enabled.

## See Also

### Accessing DNS proxy configuration properties

- [providerProtocol](providerprotocol.md): The provider-specific portion of the DNS proxy configuration.
- [localizedDescription](localizeddescription.md): A description of the DNS proxy.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The status of a DNS proxy.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

Only one DNS proxy can be active in the system at a time. Therefore, setting this property to [true](https://developer.apple.com/documentation/swift/true) disables any DNS proxy configurations of other apps. Similarly, the system sets this property to [false](https://developer.apple.com/documentation/swift/false) when any other DNS proxy configuration is enabled.

## See Also

### Accessing DNS proxy configuration properties

- [providerProtocol](providerprotocol.md): The provider-specific portion of the DNS proxy configuration.
- [localizedDescription](localizeddescription.md): A description of the DNS proxy.
