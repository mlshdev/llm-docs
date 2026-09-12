> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagebrowser(_:groupat:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagebrowser(_:groupat:))

# imageBrowser(\_:groupAt:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the group at the specified index.

## Declaration

```swift
func imageBrowser(_ aBrowser: IKImageBrowserView!, groupAt index: Int) -> [AnyHashable : Any]!
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the group you want to retrieve.

<a id="return-value"></a>

## Return Value

A dictionary that defines the group. The keys in this dictionary can be any of the following constants: [IKImageBrowserGroupStyleKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergroupstylekey), [IKImageBrowserGroupBackgroundColorKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergroupbackgroundcolorkey), [IKImageBrowserGroupTitleKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergrouptitlekey), and [IKImageBrowserGroupRangeKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergrouprangekey). For more information on these constants, see [IKImageBrowserView](https://developer.apple.com/documentation/quartz/ikimagebrowserview).

<a id="Discussion"></a>

## Discussion

This method is optional.

# imageBrowser:groupAtIndex: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the group at the specified index.

## Declaration

```objectivec
- (NSDictionary *) imageBrowser:(IKImageBrowserView *) aBrowser groupAtIndex:(NSUInteger) index;
```

## Parameters

- `aBrowser`: An image browser view.
- `index`: The index of the group you want to retrieve.

<a id="return-value"></a>

## Return Value

A dictionary that defines the group. The keys in this dictionary can be any of the following constants: [IKImageBrowserGroupStyleKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergroupstylekey), [IKImageBrowserGroupBackgroundColorKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergroupbackgroundcolorkey), [IKImageBrowserGroupTitleKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergrouptitlekey), and [IKImageBrowserGroupRangeKey](https://developer.apple.com/documentation/quartz/ikimagebrowsergrouprangekey). For more information on these constants, see [IKImageBrowserView](https://developer.apple.com/documentation/quartz/ikimagebrowserview).

<a id="Discussion"></a>

## Discussion

This method is optional.
