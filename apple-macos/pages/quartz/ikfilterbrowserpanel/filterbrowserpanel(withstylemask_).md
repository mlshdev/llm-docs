> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikfilterbrowserpanel/filterbrowserpanel(withstylemask:)

# filterBrowserPanel(withStyleMask:) (Swift)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Creates a shared instance of the `IKFilterBrowserPanel` class.

## Declaration

```swift
class func filterBrowserPanel(withStyleMask styleMask: UInt32) -> Any!
```

## Parameters

- `styleMask`: A mask that specifies whether to use the default or brushed metal look for the window.

<a id="return-value"></a>

## Return Value

The shared instance.

# filterBrowserPanelWithStyleMask: (Objective-C)

**Framework:** Quartz  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Creates a shared instance of the `IKFilterBrowserPanel` class.

## Declaration

```objectivec
+ (id) filterBrowserPanelWithStyleMask:(unsigned int) styleMask;
```

## Parameters

- `styleMask`: A mask that specifies whether to use the default or brushed metal look for the window.

<a id="return-value"></a>

## Return Value

The shared instance.
