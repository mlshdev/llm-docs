> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/prefersdarkuserinterfacestyle

# prefersDarkUserInterfaceStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether you prefer Dark Mode for your interface.

## Declaration

```swift
var prefersDarkUserInterfaceStyle: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Before you push any templates or install a root template, set this property to `true` to display your app’s content with a dark user interface style. The default value of this property is `false`, which allows content to change between light and dark styles.

## See Also

### Configuring interface-related details

- [carTraitCollection](cartraitcollection.md): The trait collection of the vehicle’s primary screen.

# prefersDarkUserInterfaceStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that indicates whether you prefer Dark Mode for your interface.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL prefersDarkUserInterfaceStyle;
```

<a id="discussion"></a>

## Discussion

Before you push any templates or install a root template, set this property to `true` to display your app’s content with a dark user interface style. The default value of this property is `false`, which allows content to change between light and dark styles.

## See Also

### Configuring interface-related details

- [carTraitCollection](cartraitcollection.md): The trait collection of the vehicle’s primary screen.
