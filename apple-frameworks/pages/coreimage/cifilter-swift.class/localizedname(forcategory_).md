> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifilter-swift.class/localizedname(forcategory:)

# localizedName(forCategory:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns  the localized name for the specified filter category.

## Declaration

```swift
class func localizedName(forCategory category: String) -> String
```

## Parameters

- `category`: A filter category.

<a id="return-value"></a>

## Return Value

The localized name for the filter category.

## See Also

### Getting localized information for registered filters

- [localizedName(forFilterName:)](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedDescription(forFilterName:)](localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.
- [localizedReferenceDocumentation(forFilterName:)](localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.

# localizedNameForCategory: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns  the localized name for the specified filter category.

## Declaration

```objectivec
+ (NSString *) localizedNameForCategory:(NSString *) category;
```

## Parameters

- `category`: A filter category.

<a id="return-value"></a>

## Return Value

The localized name for the filter category.

## See Also

### Getting localized information for registered filters

- [localizedNameForFilterName:](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedDescriptionForFilterName:](localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.
- [localizedReferenceDocumentationForFilterName:](localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.
