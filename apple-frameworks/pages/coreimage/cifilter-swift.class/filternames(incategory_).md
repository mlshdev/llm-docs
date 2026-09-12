> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/filternames(incategory:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/filternames(incategory:))

# filterNames(inCategory:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns an array of all published filter names in the specified category.

## Declaration

```swift
class func filterNames(inCategory category: String?) -> [String]
```

## Parameters

- `category`: A string object that specifies one of the filter categories defined in [Filter Category Keys](../filter-category-keys.md).

<a id="return-value"></a>

## Return Value

An array that contains all published names of the filter in a category.

## See Also

### Accessing registered filters

- [filterNames(inCategories:)](filternames%28incategories_%29.md): Returns an array of all published filter names that match all the specified categories.

# filterNamesInCategory: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns an array of all published filter names in the specified category.

## Declaration

```objectivec
+ (NSArray<NSString *> *) filterNamesInCategory:(NSString *) category;
```

## Parameters

- `category`: A string object that specifies one of the filter categories defined in [Filter Category Keys](../filter-category-keys.md).

<a id="return-value"></a>

## Return Value

An array that contains all published names of the filter in a category.

## See Also

### Accessing registered filters

- [filterNamesInCategories:](filternames%28incategories_%29.md): Returns an array of all published filter names that match all the specified categories.
