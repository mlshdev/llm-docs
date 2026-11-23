> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/headergridbuttons

# headerGridButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Buttons to display in the header area above the list content.

## Declaration

```swift
var headerGridButtons: [CPGridButton]? { get set }
```

<a id="discussion"></a>

## Discussion

The list displays these buttons below the header in [listHeader](listheader.md) and above the items in the list. If you modify this property when the list is visible, CarPlay automatically refreshes the appearance of the header to reflect the new content.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](listheader.md): An optional header to display between the navigation bar and first section of content.
- [assistantCellConfiguration](assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.

# headerGridButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Buttons to display in the header area above the list content.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<CPGridButton *> * headerGridButtons;
```

<a id="discussion"></a>

## Discussion

The list displays these buttons below the header in [listHeader](listheader.md) and above the items in the list. If you modify this property when the list is visible, CarPlay automatically refreshes the appearance of the header to reflect the new content.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [listHeader](listheader.md): An optional header to display between the navigation bar and first section of content.
- [assistantCellConfiguration](assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.
