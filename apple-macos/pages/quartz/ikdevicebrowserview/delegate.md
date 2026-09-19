> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikdevicebrowserview/delegate

# delegate (Swift)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Specifies the delegate object.

## Declaration

```swift
@IBOutlet unowned(unsafe) var delegate: (any IKDeviceBrowserViewDelegate)! { get set }
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [IKDeviceBrowserViewDelegate](../ikdevicebrowserviewdelegate.md) protocol.

# delegate (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

Specifies the delegate object.

## Declaration

```objectivec
@property (assign) id<IKDeviceBrowserViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

The delegate object must conform to the [IKDeviceBrowserViewDelegate](../ikdevicebrowserviewdelegate.md) protocol.
