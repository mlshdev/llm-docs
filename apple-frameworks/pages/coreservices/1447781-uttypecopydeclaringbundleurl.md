> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447781-uttypecopydeclaringbundleurl](https://developer.apple.com/documentation/coreservices/1447781-uttypecopydeclaringbundleurl)

# UTTypeCopyDeclaringBundleURL(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 14.0) · iPadOS 3.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.3+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

Returns the location of a bundle containing the declaration for a type.

## Declaration

```swift
func UTTypeCopyDeclaringBundleURL(_ inUTI: CFString) -> Unmanaged<CFURL>?
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A URL that points to the bundle that holds the uniform type identifier’s declaration, or `NULL` if a bundle that holds the declaration cannot be located.

# UTTypeCopyDeclaringBundleURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 14.0) · iPadOS 3.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.3+ (deprecated in 11.0) · tvOS 9.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 7.0)

Returns the location of a bundle containing the declaration for a type.

## Declaration

```objectivec
CFURLRef UTTypeCopyDeclaringBundleURL(CFStringRef inUTI);
```

## Parameters

- `inUTI`: A uniform type identifier.

<a id="return_value"></a>

## Return Value

A URL that points to the bundle that holds the uniform type identifier’s declaration, or `NULL` if a bundle that holds the declaration cannot be located.
