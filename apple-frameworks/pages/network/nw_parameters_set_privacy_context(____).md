> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_set_privacy_context(_:_:)](https://developer.apple.com/documentation/network/nw_parameters_set_privacy_context(_:_:))

# nw_parameters_set_privacy_context(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Associates a privacy context with any connections or listeners that use the parameters.

## Declaration

```swift
func nw_parameters_set_privacy_context(_ parameters: nw_parameters_t, _ privacy_context: nw_privacy_context_t)
```

## See Also

### Configuring Privacy Settings

- [nw_privacy_context_t](nw_privacy_context_t.md): An object that defines the privacy requirements for a set of connections.

# nw_parameters_set_privacy_context (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Associates a privacy context with any connections or listeners that use the parameters.

## Declaration

```objectivec
void nw_parameters_set_privacy_context(nw_parameters_t parameters, nw_privacy_context_t privacy_context);
```

## See Also

### Configuring Privacy Settings

- [nw_privacy_context_t](nw_privacy_context_t.md): An object that defines the privacy requirements for a set of connections.
