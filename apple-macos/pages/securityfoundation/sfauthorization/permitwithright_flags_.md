> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityfoundation/sfauthorization/permitwithright:flags:](https://developer.apple.com/documentation/securityfoundation/sfauthorization/permitwithright:flags:)

# permitWithRight:flags:

**Interface language:** Objective-C

**Framework:** Security Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.5)

Authorizes and preauthorizes one specific right.

> Use [obtainWithRight:flags:error:](obtain%28withright_flags_%29.md) instead.

## Declaration

```objectivec
- (OSStatus) permitWithRight:(AuthorizationString) rightName flags:(AuthorizationFlags) flags;
```

## Parameters

- `rightName`: The name of an authorization right.
- `flags`: A bit mask for specifying authorization options. See [permitWithRights:flags:environment:authorizedRights:](permitwithrights_flags_environment_authorizedrights_.md) for details about possible flag values.

<a id="Discussion"></a>

## Discussion

Use this method to authorize or preauthorize a single right.

## See Also

### Authorizing rights

- [permitWithRights:flags:environment:authorizedRights:](permitwithrights_flags_environment_authorizedrights_.md): Deprecated. Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [obtainWithRights:flags:environment:authorizedRights:error:](obtain%28withrights_flags_environment_authorizedrights_%29.md): Authorizes and preauthorizes rights to access a privileged operation and returns the granted rights.
- [obtainWithRight:flags:error:](obtain%28withright_flags_%29.md): Authorizes and preauthorizes one specific right.
