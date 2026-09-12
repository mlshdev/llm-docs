> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/getsecurebootenabled:error:](https://developer.apple.com/documentation/virtualization/vzefivariablestore/getsecurebootenabled:error:)

# getSecureBootEnabled:error:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns a Boolean value that indicates whether Secure Boot is in an enabled state in the variable store.

## Declaration

```objectivec
- (BOOL) getSecureBootEnabled:(BOOL *) enabled error:(NSError **) error;
```

## Parameters

- `enabled`: On success, set to YES if Secure Boot is enabled, NO otherwise.
- `error`: Assigned with the error if the operation fails, or `nil` upon success.

<a id="return-value"></a>

## Return Value

`YES` if the operation succeeded, `NO` if an error occurred.
