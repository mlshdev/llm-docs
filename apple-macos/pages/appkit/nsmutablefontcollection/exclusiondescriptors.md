> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/exclusiondescriptors](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/exclusiondescriptors)

# exclusionDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The font descriptors to exclude from query results.

## Declaration

```swift
var exclusionDescriptors: [NSFontDescriptor]? { get set }
```

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [addQuery(for:)](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQuery(for:)](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.

# exclusionDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The font descriptors to exclude from query results.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSFontDescriptor *> * exclusionDescriptors;
```

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [addQueryForDescriptors:](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQueryForDescriptors:](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
