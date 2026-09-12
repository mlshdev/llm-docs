> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_access_distinguished_names(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_access_distinguished_names(_:_:))

# sec_protocol_metadata_access_distinguished_names(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_access_distinguished_names(_ metadata: sec_protocol_metadata_t, _ handler: @escaping (dispatch_data_t) -> Void) -> Bool
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with distinguished_name data

<a id="return-value"></a>

## Return Value

Returns true if the distinguished names were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the X.509 Distinguished Names from the protocol instance peer.

# sec_protocol_metadata_access_distinguished_names (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
bool sec_protocol_metadata_access_distinguished_names(sec_protocol_metadata_t metadata, void (^handler)(dispatch_data_t distinguished_name));
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with distinguished_name data

<a id="return-value"></a>

## Return Value

Returns true if the distinguished names were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the X.509 Distinguished Names from the protocol instance peer.
