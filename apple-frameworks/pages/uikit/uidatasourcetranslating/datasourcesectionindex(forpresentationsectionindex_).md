> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcetranslating/datasourcesectionindex(forpresentationsectionindex:)](https://developer.apple.com/documentation/uikit/uidatasourcetranslating/datasourcesectionindex(forpresentationsectionindex:))

# dataSourceSectionIndex(forPresentationSectionIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates a section index in your presented layout to the equivalent section index in your data source object.

## Declaration

```swift
func dataSourceSectionIndex(forPresentationSectionIndex presentationSectionIndex: Int) -> Int
```

## Parameters

- `presentationSectionIndex`: The index path of a section in your presentation layer.

<a id="return-value"></a>

## Return Value

The index path of the same section in the data source object, or `nil` if the section is no longer in the data source.

## See Also

### Managing section positions

- [presentationSectionIndex(forDataSourceSectionIndex:)](presentationsectionindex%28fordatasourcesectionindex_%29.md): Translates a section index in your data source object to the equivalent section index in your presented layout.

# dataSourceSectionIndexForPresentationSectionIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates a section index in your presented layout to the equivalent section index in your data source object.

## Declaration

```objectivec
- (NSInteger) dataSourceSectionIndexForPresentationSectionIndex:(NSInteger) presentationSectionIndex;
```

## Parameters

- `presentationSectionIndex`: The index path of a section in your presentation layer.

<a id="return-value"></a>

## Return Value

The index path of the same section in the data source object, or `nil` if the section is no longer in the data source.

## See Also

### Managing section positions

- [presentationSectionIndexForDataSourceSectionIndex:](presentationsectionindex%28fordatasourcesectionindex_%29.md): Translates a section index in your data source object to the equivalent section index in your presented layout.
