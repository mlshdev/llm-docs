> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/maximumsectioncount

# maximumSectionCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of sections the template can display.

## Declaration

```swift
class var maximumSectionCount: Int { get }
```

<a id="discussion"></a>

## Discussion

When building your content, use this value to determine the maximum number of sections to create. A vehicle can provide a specific value for this property to accommodate any user interface limits. Determine if vehicle-specific limits are in place using the [limitedUserInterfaces](../cpsessionconfiguration/limiteduserinterfaces.md) property of [CPSessionConfiguration](../cpsessionconfiguration.md).

## See Also

### Getting the configuration limits

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

# maximumSectionCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of sections the template can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumSectionCount;
```

<a id="discussion"></a>

## Discussion

When building your content, use this value to determine the maximum number of sections to create. A vehicle can provide a specific value for this property to accommodate any user interface limits. Determine if vehicle-specific limits are in place using the [limitedUserInterfaces](../cpsessionconfiguration/limiteduserinterfaces.md) property of [CPSessionConfiguration](../cpsessionconfiguration.md).

## See Also

### Getting the configuration limits

- [maximumItemCount](maximumitemcount.md): The maximum number of items, across all sections, that the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.
