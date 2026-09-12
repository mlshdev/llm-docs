> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/addressfilter](https://developer.apple.com/documentation/mapkitjs/addressfilter)

# AddressFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.78.1+

An object that filters which address options to include or exclude in search results.

## Declaration

```
class AddressFilter
```

<a id="overview"></a>

## Overview

Use this object to filter search results by criteria, such as country, region, and municipality. See [AddressCategory](addresscategory.md) for more information.

## Topics

### Creating filters

- [excluding()](addressfilter/excluding.md): A list of categories to exclude from a search.
- [including()](addressfilter/including.md): A list of categories to include in a search.
- [excludingAllCategories](addressfilter/excludingallcategories.md): A value that excludes all address categories.
- [includingAllCategories](addressfilter/includingallcategories.md): A value that includes all address categories.

### Querying filter behavior

- [excludesCategory()](addressfilter/excludescategory.md): A Boolean value that indicates whether to exclude a category from a search.
- [includesCategory()](addressfilter/includescategory.md): A Boolean value that indicates whether to include a category from a search.

## See Also

### Search

- [Search](search.md): An object that retrieves map-based search results for a user-entered query.
