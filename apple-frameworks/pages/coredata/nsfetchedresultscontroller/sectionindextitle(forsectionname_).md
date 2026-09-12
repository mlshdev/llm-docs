> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/sectionindextitle(forsectionname:)](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/sectionindextitle(forsectionname:))

# sectionIndexTitle(forSectionName:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the corresponding section index entry for a given section name.

## Declaration

```swift
func sectionIndexTitle(forSectionName sectionName: String) -> String?
```

## Parameters

- `sectionName`: The name of a section.

<a id="return-value"></a>

## Return Value

The section index entry corresponding to the section with name `sectionName`.

<a id="Discussion"></a>

## Discussion

The default implementation returns the capitalized first letter of the section name.

You should override this method if you need a different way to convert from a section name to its name in the section index.

<a id="Special-Considerations"></a>

### Special Considerations

You only need this method if you use a section index.

## See Also

### Configuring Section Information

- [sectionIndexTitles](sectionindextitles.md): The array of section index titles.

# sectionIndexTitleForSectionName: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the corresponding section index entry for a given section name.

## Declaration

```objectivec
- (NSString *) sectionIndexTitleForSectionName:(NSString *) sectionName;
```

## Parameters

- `sectionName`: The name of a section.

<a id="return-value"></a>

## Return Value

The section index entry corresponding to the section with name `sectionName`.

<a id="Discussion"></a>

## Discussion

The default implementation returns the capitalized first letter of the section name.

You should override this method if you need a different way to convert from a section name to its name in the section index.

<a id="Special-Considerations"></a>

### Special Considerations

You only need this method if you use a section index.

## See Also

### Configuring Section Information

- [sectionIndexTitles](sectionindextitles.md): The array of section index titles.
