> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448939-uttypecreatepreferredidentifierf](https://developer.apple.com/documentation/coreservices/1448939-uttypecreatepreferredidentifierf)

# UTTypeCreatePreferredIdentifierForTag(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Creates a uniform type identifier for the type indicated by the specified tag.

## Declaration

```swift
func UTTypeCreatePreferredIdentifierForTag(_ inTagClass: CFString, _ inTag: CFString, _ inConformingToUTI: CFString?) -> Unmanaged<CFString>?
```

## Parameters

- `inTagClass`: The class of the `inTag` parameter. For more information, see `Type Tag Classes`.
- `inTag`: The tag to translate into a uniform type identifier.
- `inConformingToUTI`: If not `NULL`, the returned uniform type identifier must conform to this parameter.

<a id="return_value"></a>

## Return Value

A new CFStringRef containing a uniform type identifier, or `NULL` if inTagClass is not a known tag class

<a id="discussion"></a>

## Discussion

This function is used to translate a type declared using another declaration mechanism (for example, MIME types) into a uniform type identifier. This function searches all UTI declarations for a matching translation. If a conforming parameter is assigned, the search is reduced to the subset of type identifiers that conform to that type.

If there is more than one possible UTI for the specified tag, the UTI that will be returned is undefined. See [UTTypeCreateAllIdentifiersForTag(\_:\_:\_:)](1447261-uttypecreateallidentifiersfortag.md) if you need to see all search results.

If no result is found, this function creates a dynamic type beginning with the `dyn` prefix. This allows you to pass the UTI around and convert it back to the original tag.

## See Also

### Related Documentation

- [UTTypeCopyPreferredTagWithClass(\_:\_:)](1442744-uttypecopypreferredtagwithclass.md): Deprecated. Translates a uniform type identifier to a list of tags in a different type classification method.
- [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319)

# UTTypeCreatePreferredIdentifierForTag (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 15.0) · iPadOS 3.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 8.0)

Creates a uniform type identifier for the type indicated by the specified tag.

## Declaration

```objectivec
CFStringRef UTTypeCreatePreferredIdentifierForTag(CFStringRef inTagClass, CFStringRef inTag, CFStringRef inConformingToUTI);
```

## Parameters

- `inTagClass`: The class of the `inTag` parameter. For more information, see `Type Tag Classes`.
- `inTag`: The tag to translate into a uniform type identifier.
- `inConformingToUTI`: If not `NULL`, the returned uniform type identifier must conform to this parameter.

<a id="return_value"></a>

## Return Value

A new CFStringRef containing a uniform type identifier, or `NULL` if inTagClass is not a known tag class

<a id="discussion"></a>

## Discussion

This function is used to translate a type declared using another declaration mechanism (for example, MIME types) into a uniform type identifier. This function searches all UTI declarations for a matching translation. If a conforming parameter is assigned, the search is reduced to the subset of type identifiers that conform to that type.

If there is more than one possible UTI for the specified tag, the UTI that will be returned is undefined. See [UTTypeCreateAllIdentifiersForTag](1447261-uttypecreateallidentifiersfortag.md) if you need to see all search results.

If no result is found, this function creates a dynamic type beginning with the `dyn` prefix. This allows you to pass the UTI around and convert it back to the original tag.

## See Also

### Related Documentation

- [UTTypeCopyPreferredTagWithClass](1442744-uttypecopypreferredtagwithclass.md): Deprecated. Translates a uniform type identifier to a list of tags in a different type classification method.
- [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319)
