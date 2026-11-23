> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplate/maximumitemcount

# maximumItemCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of items, across all sections, that the template can display.

## Declaration

```swift
class var maximumItemCount: Int { get }
```

<a id="discussion"></a>

## Discussion

When building your content, use this value to determine the maximum number of items to create. A vehicle can provide a specific value for this property to accommodate any user interface limits. You can determine if vehicle-specific limits are in place using the [limitedUserInterfaces](../cpsessionconfiguration/limiteduserinterfaces.md) property of [CPSessionConfiguration](../cpsessionconfiguration.md). Even without vehicle-specific limits, different app types support different limits on the amount of information to display.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.

# maximumItemCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum number of items, across all sections, that the template can display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSUInteger maximumItemCount;
```

<a id="discussion"></a>

## Discussion

When building your content, use this value to determine the maximum number of items to create. A vehicle can provide a specific value for this property to accommodate any user interface limits. You can determine if vehicle-specific limits are in place using the [limitedUserInterfaces](../cpsessionconfiguration/limiteduserinterfaces.md) property of [CPSessionConfiguration](../cpsessionconfiguration.md). Even without vehicle-specific limits, different app types support different limits on the amount of information to display.

## See Also

### Getting the configuration limits

- [maximumSectionCount](maximumsectioncount.md): The maximum number of sections the template can display.
- [maximumGridButtonImageSize](maximumgridbuttonimagesize.md): The expected image size for any grid buttons you add to the header.
- [maximumHeaderGridButtonCount](maximumheadergridbuttoncount.md): The maximum number of grid buttons you can display in the header.
