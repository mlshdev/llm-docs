> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchedresultscontroller/sectionindextitles](https://developer.apple.com/documentation/coredata/nsfetchedresultscontroller/sectionindextitles)

# sectionIndexTitles (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The array of section index titles.

## Declaration

```swift
var sectionIndexTitles: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The default implementation returns the array created by calling [sectionIndexTitle(forSectionName:)](sectionindextitle%28forsectionname_%29.md) on all the known sections. You should override this method if you want to return a different array for the section index.

<a id="Special-Considerations"></a>

### Special Considerations

You only need this method if you use a section index.

## See Also

### Configuring Section Information

- [sectionIndexTitle(forSectionName:)](sectionindextitle%28forsectionname_%29.md): Returns the corresponding section index entry for a given section name.

# sectionIndexTitles (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The array of section index titles.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * sectionIndexTitles;
```

<a id="Discussion"></a>

## Discussion

The default implementation returns the array created by calling [sectionIndexTitleForSectionName:](sectionindextitle%28forsectionname_%29.md) on all the known sections. You should override this method if you want to return a different array for the section index.

<a id="Special-Considerations"></a>

### Special Considerations

You only need this method if you use a section index.

## See Also

### Configuring Section Information

- [sectionIndexTitleForSectionName:](sectionindextitle%28forsectionname_%29.md): Returns the corresponding section index entry for a given section name.
