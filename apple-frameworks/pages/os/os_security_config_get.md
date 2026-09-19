> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/os_security_config_get

# os_security_config_get

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern os_security_config_t os_security_config_get();
```

<a id="return-value"></a>

## Return Value

An os_security_config_t value representing the active security flags. This function is not expected to fail for the current process.

<a id="discussion"></a>

## Discussion

Retrieves the security configuration bitmask for the current process.

This function inspects the value passed by the kernel to the current process.
