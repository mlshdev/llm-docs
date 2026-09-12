> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448514-uttypecopydescription](https://developer.apple.com/documentation/coreservices/1448514-uttypecopydescription)

# UTTypeCopyDescription(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns the localized, user-readable type description string associated with a uniform type identifier.

## Declaration

```swift
func UTTypeCopyDescription(_ inUTI: CFString) -> Unmanaged<CFString>?
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A localized string describing the type, or `NULL` if no type description is available.

<a id="discussion"></a>

## Discussion

The localized string that describes the uniform type is found in the type’s declaration.

# UTTypeCopyDescription (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Returns the localized, user-readable type description string associated with a uniform type identifier.

## Declaration

```objectivec
CFStringRef UTTypeCopyDescription(CFStringRef inUTI);
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A localized string describing the type, or `NULL` if no type description is available.

<a id="discussion"></a>

## Discussion

The localized string that describes the uniform type is found in the type’s declaration.
