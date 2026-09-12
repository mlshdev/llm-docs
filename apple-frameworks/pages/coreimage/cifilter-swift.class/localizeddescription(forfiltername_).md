> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/localizeddescription(forfiltername:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/localizeddescription(forfiltername:))

# localizedDescription(forFilterName:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns the localized description of a filter for display in the user interface.

## Declaration

```swift
class func localizedDescription(forFilterName filterName: String) -> String?
```

## Parameters

- `filterName`: The filter name.

<a id="return-value"></a>

## Return Value

The localized description of the filter.

## See Also

### Getting localized information for registered filters

- [localizedName(forFilterName:)](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedName(forCategory:)](localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedReferenceDocumentation(forFilterName:)](localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.

# localizedDescriptionForFilterName: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns the localized description of a filter for display in the user interface.

## Declaration

```objectivec
+ (NSString *) localizedDescriptionForFilterName:(NSString *) filterName;
```

## Parameters

- `filterName`: The filter name.

<a id="return-value"></a>

## Return Value

The localized description of the filter.

## See Also

### Getting localized information for registered filters

- [localizedNameForFilterName:](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedNameForCategory:](localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedReferenceDocumentationForFilterName:](localizedreferencedocumentation%28forfiltername_%29.md): Returns the location of the localized reference documentation that describes the filter.
