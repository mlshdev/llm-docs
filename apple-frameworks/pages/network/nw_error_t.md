> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_error_t](https://developer.apple.com/documentation/network/nw_error_t)

# nw_error_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The errors returned by the Network framework.

## Declaration

```swift
typealias nw_error_t = any OS_nw_error
```

## Topics

### Inspecting Errors

- [nw_error_get_error_domain(\_:)](nw_error_get_error_domain%28__%29.md): Accesses the domain of the network error.
- [nw_error_domain_t](nw_error_domain_t.md): The error domain for errors used by the Network framework.
- [nw_error_get_error_code(\_:)](nw_error_get_error_code%28__%29.md): Accesses the specific code of the network error.
- [nw_error_copy_cf_error(\_:)](nw_error_copy_cf_error%28__%29.md): Returns a copy of a network error.

# nw_error_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

The errors returned by the Network framework.

## Declaration

```objectivec
typedef NSObject<OS_nw_error> * nw_error_t;
```

## Topics

### Inspecting Errors

- [nw_error_get_error_domain](nw_error_get_error_domain%28__%29.md): Accesses the domain of the network error.
- [nw_error_domain_t](nw_error_domain_t.md): The error domain for errors used by the Network framework.
- [nw_error_get_error_code](nw_error_get_error_code%28__%29.md): Accesses the specific code of the network error.
- [nw_error_copy_cf_error](nw_error_copy_cf_error%28__%29.md): Returns a copy of a network error.
