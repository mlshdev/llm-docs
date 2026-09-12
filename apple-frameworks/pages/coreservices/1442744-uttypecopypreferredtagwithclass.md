> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1442744-uttypecopypreferredtagwithclass](https://developer.apple.com/documentation/coreservices/1442744-uttypecopypreferredtagwithclass)

# UTTypeCopyPreferredTagWithClass(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Translates a uniform type identifier to a list of tags in a different type classification method.

## Declaration

```swift
func UTTypeCopyPreferredTagWithClass(_ inUTI: CFString, _ inTagClass: CFString) -> Unmanaged<CFString>?
```

## Parameters

- `inUTI`: The uniform type identifier to convert.
- `inTagClass`: The class of the tags you want to return. For more information, see `Type Tag Classes`.

<a id="return_value"></a>

## Return Value

An array of tags (as CFStrings), or `NULL` if there was no translation available to convert the uniform type identifier to the specified class.

<a id="discussion"></a>

## Discussion

If the type declaration included more than one tag with the specified class, the first tag in the declared tag array is the preferred tag.

# UTTypeCopyPreferredTagWithClass (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Translates a uniform type identifier to a list of tags in a different type classification method.

## Declaration

```objectivec
CFStringRef UTTypeCopyPreferredTagWithClass(CFStringRef inUTI, CFStringRef inTagClass);
```

## Parameters

- `inUTI`: The uniform type identifier to convert.
- `inTagClass`: The class of the tags you want to return. For more information, see `Type Tag Classes`.

<a id="return_value"></a>

## Return Value

An array of tags (as CFStrings), or `NULL` if there was no translation available to convert the uniform type identifier to the specified class.

<a id="discussion"></a>

## Discussion

If the type declaration included more than one tag with the specified class, the first tag in the declared tag array is the preferred tag.
