> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/localizedreferencedocumentation(forfiltername:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/localizedreferencedocumentation(forfiltername:))

# localizedReferenceDocumentation(forFilterName:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns the location of the localized reference documentation that describes the filter.

## Declaration

```swift
class func localizedReferenceDocumentation(forFilterName filterName: String) -> URL?
```

## Parameters

- `filterName`: The filter name.

<a id="return-value"></a>

## Return Value

A URL that specifies the location of the localized documentation, or `nil` if the filter does not provide localized reference documentation.

<a id="Discussion"></a>

## Discussion

The URL can be a local file or a remote document on a web server. Because filters created prior to OS X v10.5 could return `nil`, you should be make sure that your code handles this case gracefully.

## See Also

### Getting localized information for registered filters

- [localizedName(forFilterName:)](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedName(forCategory:)](localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedDescription(forFilterName:)](localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.

# localizedReferenceDocumentationForFilterName: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Returns the location of the localized reference documentation that describes the filter.

## Declaration

```objectivec
+ (NSURL *) localizedReferenceDocumentationForFilterName:(NSString *) filterName;
```

## Parameters

- `filterName`: The filter name.

<a id="return-value"></a>

## Return Value

A URL that specifies the location of the localized documentation, or `nil` if the filter does not provide localized reference documentation.

<a id="Discussion"></a>

## Discussion

The URL can be a local file or a remote document on a web server. Because filters created prior to OS X v10.5 could return `nil`, you should be make sure that your code handles this case gracefully.

## See Also

### Getting localized information for registered filters

- [localizedNameForFilterName:](localizedname%28forfiltername_%29.md): Returns the localized name for the specified filter name.
- [localizedNameForCategory:](localizedname%28forcategory_%29.md): Returns the localized name for the specified filter category.
- [localizedDescriptionForFilterName:](localizeddescription%28forfiltername_%29.md): Returns the localized description of a filter for display in the user interface.
