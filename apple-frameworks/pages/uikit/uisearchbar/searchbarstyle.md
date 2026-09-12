> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchbar/searchbarstyle](https://developer.apple.com/documentation/uikit/uisearchbar/searchbarstyle)

# searchBarStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A search bar style that specifies the search bar’s appearance.

## Declaration

```swift
var searchBarStyle: UISearchBar.Style { get set }
```

<a id="Discussion"></a>

## Discussion

This property can be used together with [barStyle](barstyle.md). The style [UISearchBar.Style.minimal](style/minimal.md) provides no default background color or image but will display one if customized as such.

Custom background and search field images take precedence over this property.

See [UISearchBar.Style](style.md) for possible values. The default value is [UISearchBar.Style.default](style/default.md).

## See Also

### Configuring the search bar

- [isEnabled](isenabled.md): A Boolean value indicating whether the search bar is in the enabled state.
- [barTintColor](bartintcolor.md): The tint color to apply to the search bar background.
- [UISearchBar.Style](style.md): Specifies whether the search bar has a background.
- [tintColor](tintcolor.md): The tint color to apply to key elements in the search bar.
- [isTranslucent](istranslucent.md): A Boolean value that indicates whether the search bar is translucent (true) or not (false).
- [barStyle](barstyle.md): A bar style that specifies the search bar’s appearance.
- [UIBarStyle](../uibarstyle.md): Defines the stylistic appearance of different types of views.

# searchBarStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A search bar style that specifies the search bar’s appearance.

## Declaration

```objectivec
@property (nonatomic) UISearchBarStyle searchBarStyle;
```

<a id="Discussion"></a>

## Discussion

This property can be used together with [barStyle](barstyle.md). The style [UISearchBarStyleMinimal](style/minimal.md) provides no default background color or image but will display one if customized as such.

Custom background and search field images take precedence over this property.

See [UISearchBarStyle](style.md) for possible values. The default value is [UISearchBarStyleDefault](style/default.md).

## See Also

### Configuring the search bar

- [enabled](isenabled.md): A Boolean value indicating whether the search bar is in the enabled state.
- [barTintColor](bartintcolor.md): The tint color to apply to the search bar background.
- [UISearchBarStyle](style.md): Specifies whether the search bar has a background.
- [tintColor](tintcolor.md): The tint color to apply to key elements in the search bar.
- [translucent](istranslucent.md): A Boolean value that indicates whether the search bar is translucent (true) or not (false).
- [barStyle](barstyle.md): A bar style that specifies the search bar’s appearance.
- [UIBarStyle](../uibarstyle.md): Defines the stylistic appearance of different types of views.
