> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444079-uttypeconformsto](https://developer.apple.com/documentation/coreservices/1444079-uttypeconformsto)

# UTTypeConformsTo(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns whether a uniform type identifier conforms to another uniform type identifier.

## Declaration

```swift
func UTTypeConformsTo(_ inUTI: CFString, _ inConformsToUTI: CFString) -> Bool
```

## Parameters

- `inUTI`: A uniform type identifier to compare.
- `inConformsToUTI`: The uniform type identifier to compare it to.

<a id="return_value"></a>

## Return Value

Returns `true` if the uniform type identifier is equal to or conforms to the second type.

# UTTypeConformsTo (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns whether a uniform type identifier conforms to another uniform type identifier.

## Declaration

```objectivec
Boolean UTTypeConformsTo(CFStringRef inUTI, CFStringRef inConformsToUTI);
```

## Parameters

- `inUTI`: A uniform type identifier to compare.
- `inConformsToUTI`: The uniform type identifier to compare it to.

<a id="return_value"></a>

## Return Value

Returns `true` if the uniform type identifier is equal to or conforms to the second type.
