> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachbootstrapserver/portforname:](https://developer.apple.com/documentation/foundation/nsmachbootstrapserver/portforname:)

# portForName:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Looks up and returns the port registered under the specified name on the local host.

## Declaration

```objectivec
- (NSPort *) portForName:(NSString *) name;
```

## Parameters

- `name`: The name of the desired port.

<a id="return-value"></a>

## Return Value

The port associated with `portName` on the local host. Returns `nil` if no such port exists.

## See Also

### Looking up Ports

- [portForName:host:](portforname_host_.md): Deprecated. Looks up and returns the port registered under the specified name.
- [servicePortWithName:](serviceportwithname_.md): Deprecated. Looks up and returns the port for the vended service that is registered under the specified name.
