> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/cartraitcollection

# carTraitCollection (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The trait collection of the vehicle’s primary screen.

## Declaration

```swift
var carTraitCollection: UITraitCollection { get }
```

<a id="discussion"></a>

## Discussion

Use this trait collection to derive metrics for the content you display in your CarPlay interface. For example, create or select images at the display scale you get from this trait collection, and not from the display scale from the person’s iPhone.

## See Also

### Configuring interface-related details

- [prefersDarkUserInterfaceStyle](prefersdarkuserinterfacestyle.md): A Boolean value that indicates whether you prefer Dark Mode for your interface.

# carTraitCollection (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The trait collection of the vehicle’s primary screen.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UITraitCollection * carTraitCollection;
```

<a id="discussion"></a>

## Discussion

Use this trait collection to derive metrics for the content you display in your CarPlay interface. For example, create or select images at the display scale you get from this trait collection, and not from the display scale from the person’s iPhone.

## See Also

### Configuring interface-related details

- [prefersDarkUserInterfaceStyle](prefersdarkuserinterfacestyle.md): A Boolean value that indicates whether you prefer Dark Mode for your interface.
