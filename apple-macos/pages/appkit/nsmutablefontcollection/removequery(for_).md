> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmutablefontcollection/removequery(for:)](https://developer.apple.com/documentation/appkit/nsmutablefontcollection/removequery(for:))

# removeQuery(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Edits the query and exclusion arrays by removing the specified font descriptors.

## Declaration

```swift
func removeQuery(for descriptors: [NSFontDescriptor])
```

## Parameters

- `descriptors`: The font descriptors to add to the query.

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [addQuery(for:)](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.

# removeQueryForDescriptors: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Edits the query and exclusion arrays by removing the specified font descriptors.

## Declaration

```objectivec
- (void) removeQueryForDescriptors:(NSArray<NSFontDescriptor *> *) descriptors;
```

## Parameters

- `descriptors`: The font descriptors to add to the query.

## See Also

### Getting the Font Descriptors

- [queryDescriptors](querydescriptors.md): The font descriptors to include in query results.
- [addQueryForDescriptors:](addquery%28for_%29.md): Edits the query and exclusion arrays by adding the specified font descriptors.
- [exclusionDescriptors](exclusiondescriptors.md): The font descriptors to exclude from query results.
