> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_add_pre_shared_key(_:_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_add_pre_shared_key(_:_:_:))

# sec_protocol_options_add_pre_shared_key(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_options_add_pre_shared_key(_ options: sec_protocol_options_t, _ psk: dispatch_data_t, _ psk_identity: dispatch_data_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `psk`: A dispatch_data_t containing a PSK blob.
- `psk_identity`: A dispatch_data_t containing a PSK identity blob.

<a id="discussion"></a>

## Discussion

Add a pre-shared key (PSK) and its identity to the options.

# sec_protocol_options_add_pre_shared_key (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
void sec_protocol_options_add_pre_shared_key(sec_protocol_options_t options, dispatch_data_t psk, dispatch_data_t psk_identity);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `psk`: A dispatch_data_t containing a PSK blob.
- `psk_identity`: A dispatch_data_t containing a PSK identity blob.

<a id="discussion"></a>

## Discussion

Add a pre-shared key (PSK) and its identity to the options.
