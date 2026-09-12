> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/addquery(for:)](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/addquery(for:))

# addQuery(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Edits the query and exclusion arrays by adding the specified font descriptors.

## Declaration

```swift
func addQuery(for descriptors: [NSFontDescriptor])
```

## Parameters

- `descriptors`: The font descriptors to add to the query.

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [removeQuery(for:)](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.

# addQueryForDescriptors: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Edits the query and exclusion arrays by adding the specified font descriptors.

## Declaration

```objectivec
- (void) addQueryForDescriptors:(NSArray<NSFontDescriptor *> *) descriptors;
```

## Parameters

- `descriptors`: The font descriptors to add to the query.

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [removeQueryForDescriptors:](removequery%28for_%29.md): Edits the query and exclusion arrays by removing the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.
