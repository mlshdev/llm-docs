> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447783-uttypeequal](https://developer.apple.com/documentation/coreservices/1447783-uttypeequal)

# UTTypeEqual(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns whether two uniform type identifiers are equal.

## Declaration

```swift
func UTTypeEqual(_ inUTI1: CFString, _ inUTI2: CFString) -> Bool
```

## Parameters

- `inUTI1`: A uniform type identifier.
- `inUTI2`: The uniform type identifier to compare it to.

<a id="return_value"></a>

## Return Value

Returns `true` if the two uniform type identifiers are equivalent.

# UTTypeEqual (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns whether two uniform type identifiers are equal.

## Declaration

```objectivec
Boolean UTTypeEqual(CFStringRef inUTI1, CFStringRef inUTI2);
```

## Parameters

- `inUTI1`: A uniform type identifier.
- `inUTI2`: The uniform type identifier to compare it to.

<a id="return_value"></a>

## Return Value

Returns `true` if the two uniform type identifiers are equivalent.
