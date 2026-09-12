> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidatasourcetranslating/presentationsectionindex(fordatasourcesectionindex:)](https://developer.apple.com/documentation/uikit/uidatasourcetranslating/presentationsectionindex(fordatasourcesectionindex:))

# presentationSectionIndex(forDataSourceSectionIndex:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates a section index in your data source object to the equivalent section index in your presented layout.

## Declaration

```swift
func presentationSectionIndex(forDataSourceSectionIndex dataSourceSectionIndex: Int) -> Int
```

## Parameters

- `dataSourceSectionIndex`: The index path of a section in the data source object.

<a id="return-value"></a>

## Return Value

The index path of the same section in the presentation layer of your object, or `nil` if the section is not in the presentation layer.

## See Also

### Managing section positions

- [dataSourceSectionIndex(forPresentationSectionIndex:)](datasourcesectionindex%28forpresentationsectionindex_%29.md): Translates a section index in your presented layout to the equivalent section index in your data source object.

# presentationSectionIndexForDataSourceSectionIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Translates a section index in your data source object to the equivalent section index in your presented layout.

## Declaration

```objectivec
- (NSInteger) presentationSectionIndexForDataSourceSectionIndex:(NSInteger) dataSourceSectionIndex;
```

## Parameters

- `dataSourceSectionIndex`: The index path of a section in the data source object.

<a id="return-value"></a>

## Return Value

The index path of the same section in the presentation layer of your object, or `nil` if the section is not in the presentation layer.

## See Also

### Managing section positions

- [dataSourceSectionIndexForPresentationSectionIndex:](datasourcesectionindex%28forpresentationsectionindex_%29.md): Translates a section index in your presented layout to the equivalent section index in your data source object.
