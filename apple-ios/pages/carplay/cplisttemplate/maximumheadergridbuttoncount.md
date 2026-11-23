> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/maximumheadergridbuttoncount

# maximumHeaderGridButtonCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum number of grid buttons you can display in the header.

## Declaration

```swift
class var maximumHeaderGridButtonCount: Int { get }
```

<a id="discussion"></a>

## Discussion

If you initialize your list template with more buttons than the maximum, the list template ignores any buttons in your array past the specified maximum.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.

# maximumHeaderGridButtonCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The maximum number of grid buttons you can display in the header.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumHeaderGridButtonCount;
```

<a id="discussion"></a>

## Discussion

If you initialize your list template with more buttons than the maximum, the list template ignores any buttons in your array past the specified maximum.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
