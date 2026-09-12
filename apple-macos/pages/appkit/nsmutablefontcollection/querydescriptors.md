> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/querydescriptors](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/querydescriptors)

# queryDescriptors (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The font descriptors to include in query results.

## Declaration

```swift
var queryDescriptors: [NSFontDescriptor]? { get set }
```

## See Also

### Getting the Font Descriptors

- [addQuery(for:)](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQuery(for:)](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.

# queryDescriptors (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The font descriptors to include in query results.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSFontDescriptor *> * queryDescriptors;
```

## See Also

### Getting the Font Descriptors

- [addQueryForDescriptors:](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [removeQueryForDescriptors:](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.
