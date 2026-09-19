> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmachbootstrapserver/registerport:name:

# registerPort:name:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Registers a port with a specified name.

## Declaration

```objectivec
- (BOOL) registerPort:(NSPort *) port name:(NSString *) name;
```

## Parameters

- `port`: The port object to register with the bootstrap server.
- `name`: The name to associate with `port`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the registration succeeded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

Once registered, a port cannot be unregistered; instead, you need to invalidate the port.
