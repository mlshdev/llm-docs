> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/listheader

# listHeader (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional header to display between the navigation bar and first section of content.

## Declaration

```swift
var listHeader: CPListTemplateDetailsHeader? { get set }
```

<a id="discussion"></a>

## Discussion

The list header displays additional context or summary information above the sections of the list. Use this property to retrieve the previously configured header. If you modify this property when the list is visible, CarPlay refreshes the appearance of the header to reflect the new content.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [headerGridButtons](headergridbuttons.md): Buttons to display in the header area above the list content.
- [assistantCellConfiguration](assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.

# listHeader (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An optional header to display between the navigation bar and first section of content.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPListTemplateDetailsHeader * listHeader;
```

<a id="discussion"></a>

## Discussion

The list header displays additional context or summary information above the sections of the list. Use this property to retrieve the previously configured header. If you modify this property when the list is visible, CarPlay refreshes the appearance of the header to reflect the new content.

## See Also

### Managing the supplemental content

- [title](title.md): The title to display in the navigation bar when the list is visible.
- [headerGridButtons](headergridbuttons.md): Buttons to display in the header area above the list content.
- [assistantCellConfiguration](assistantcellconfiguration.md): The object that provides the configuration attributes for the assistant cell.
