> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447261-uttypecreateallidentifiersfortag](https://developer.apple.com/documentation/coreservices/1447261-uttypecreateallidentifiersfortag)

# UTTypeCreateAllIdentifiersForTag(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Creates an array of all uniform type identifiers for the type indicated by the specified tag.

## Declaration

```swift
func UTTypeCreateAllIdentifiersForTag(_ inTagClass: CFString, _ inTag: CFString, _ inConformingToUTI: CFString?) -> Unmanaged<CFArray>?
```

## Parameters

- `inTagClass`: The class of the `inTag` parameter. For more information, see `Type Tag Classes`.
- `inTag`: The tag to translate into a uniform type identifier.
- `inConformingToUTI`: If not `nil`, all returned uniform type identifiers must conform to this parameter.

<a id="return_value"></a>

## Return Value

An array of uniform type identifiers, or `NULL` if inTagClass is not a known tag class

<a id="discussion"></a>

## Discussion

This function is used to translate a type declared using another declaration mechanism (for example, MIME types) into a uniform type identifier. This function searches all UTI declarations for a matching translation and returns all possible results. If a conforming parameter is assigned, the search is reduced to the subset of type identifiers that conform to that type.

If no result is found, this function creates a dynamic type beginning with the `dyn` prefix.

## See Also

### Related Documentation

- [UTTypeCopyPreferredTagWithClass(\_:\_:)](1442744-uttypecopypreferredtagwithclass.md): Deprecated. Translates a uniform type identifier to a list of tags in a different type classification method.

# UTTypeCreateAllIdentifiersForTag (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Creates an array of all uniform type identifiers for the type indicated by the specified tag.

## Declaration

```objectivec
CFArrayRef UTTypeCreateAllIdentifiersForTag(CFStringRef inTagClass, CFStringRef inTag, CFStringRef inConformingToUTI);
```

## Parameters

- `inTagClass`: The class of the `inTag` parameter. For more information, see `Type Tag Classes`.
- `inTag`: The tag to translate into a uniform type identifier.
- `inConformingToUTI`: If not `nil`, all returned uniform type identifiers must conform to this parameter.

<a id="return_value"></a>

## Return Value

An array of uniform type identifiers, or `NULL` if inTagClass is not a known tag class

<a id="discussion"></a>

## Discussion

This function is used to translate a type declared using another declaration mechanism (for example, MIME types) into a uniform type identifier. This function searches all UTI declarations for a matching translation and returns all possible results. If a conforming parameter is assigned, the search is reduced to the subset of type identifiers that conform to that type.

If no result is found, this function creates a dynamic type beginning with the `dyn` prefix.

## See Also

### Related Documentation

- [UTTypeCopyPreferredTagWithClass](1442744-uttypecopypreferredtagwithclass.md): Deprecated. Translates a uniform type identifier to a list of tags in a different type classification method.
