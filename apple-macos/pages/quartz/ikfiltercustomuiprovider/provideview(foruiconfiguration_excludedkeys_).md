> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikfiltercustomuiprovider/provideview(foruiconfiguration:excludedkeys:)](https://developer.apple.com/documentation/quartz/ikfiltercustomuiprovider/provideview(foruiconfiguration:excludedkeys:))

# provideView(forUIConfiguration:excludedKeys:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Provides a custom view for a filter.

## Declaration

```swift
func provideView(forUIConfiguration inUIConfiguration: [AnyHashable : Any]!, excludedKeys inKeys: [Any]!) -> IKFilterUIView!
```

## Parameters

- `inUIConfiguration`: A dictionary that specifies the size of the controls.  Provide the key `IKUISizeFlavor` and one of the following values: `IKUISizeMini`, `IKUISizeSmall`, or  `IKUISizeRegular`. For more information on these constants, see *User Interface Options* in CIFilter Image Kit Additions.
- `inKeys`: An array of the input keys for which you do *not* want to provide a user interface. Pass `nil` if you want all input keys to be represented in the user interface.

<a id="return-value"></a>

## Return Value

An [IKFilterUIView](../ikfilteruiview.md) object or `nil` if the filter is unable to provide a view. If `nil`, the Image Kit framework will attempt to provide a user interface.

<a id="Discussion"></a>

## Discussion

This method overrides the method [view(forUIConfiguration:excludedKeys:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/view%28foruiconfiguration:excludedkeys:%29).

# provideViewForUIConfiguration:excludedKeys: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Provides a custom view for a filter.

## Declaration

```objectivec
- (IKFilterUIView *) provideViewForUIConfiguration:(NSDictionary *) inUIConfiguration excludedKeys:(NSArray *) inKeys;
```

## Parameters

- `inUIConfiguration`: A dictionary that specifies the size of the controls.  Provide the key `IKUISizeFlavor` and one of the following values: `IKUISizeMini`, `IKUISizeSmall`, or  `IKUISizeRegular`. For more information on these constants, see *User Interface Options* in CIFilter Image Kit Additions.
- `inKeys`: An array of the input keys for which you do *not* want to provide a user interface. Pass `nil` if you want all input keys to be represented in the user interface.

<a id="return-value"></a>

## Return Value

An [IKFilterUIView](../ikfilteruiview.md) object or `nil` if the filter is unable to provide a view. If `nil`, the Image Kit framework will attempt to provide a user interface.

<a id="Discussion"></a>

## Discussion

This method overrides the method [viewForUIConfiguration:excludedKeys:](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/view%28foruiconfiguration:excludedkeys:%29).
