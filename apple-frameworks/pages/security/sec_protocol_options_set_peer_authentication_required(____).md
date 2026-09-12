> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_peer_authentication_required(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_peer_authentication_required(_:_:))

# sec_protocol_options_set_peer_authentication_required(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_options_set_peer_authentication_required(_ options: sec_protocol_options_t, _ peer_authentication_required: Bool)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `peer_authentication_required`: Flag to enable or disable mandatory peer authentication.

<a id="discussion"></a>

## Discussion

Enable or disable peer authentication. Clients default to true, whereas servers default to false.

# sec_protocol_options_set_peer_authentication_required (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
void sec_protocol_options_set_peer_authentication_required(sec_protocol_options_t options, bool peer_authentication_required);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `peer_authentication_required`: Flag to enable or disable mandatory peer authentication.

<a id="discussion"></a>

## Discussion

Enable or disable peer authentication. Clients default to true, whereas servers default to false.
