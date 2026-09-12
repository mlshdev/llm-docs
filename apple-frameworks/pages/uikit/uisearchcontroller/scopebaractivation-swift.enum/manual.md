> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/scopebaractivation-swift.enum/manual](https://developer.apple.com/documentation/uikit/uisearchcontroller/scopebaractivation-swift.enum/manual)

# UISearchController.ScopeBarActivation.manual (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A mode that gives you manual control over when to show and hide the scope bar.

## Declaration

```swift
case manual
```

<a id="Discussion"></a>

## Discussion

When you use this mode, you control when to show and hide the scope bar through the [showsScopeBar](../../uisearchbar/showsscopebar.md) property on the [searchBar](../searchbar.md) of the [UISearchController](../../uisearchcontroller.md).

## See Also

### Constants

- [UISearchController.ScopeBarActivation.automatic](automatic.md): A mode in which the system automatically determines when to show and hide the scope bar.
- [UISearchController.ScopeBarActivation.onTextEntry](ontextentry.md): A mode in which the search controller shows the scope bar when typing begins in the search field, and hides it after search cancellation.
- [UISearchController.ScopeBarActivation.onSearchActivation](onsearchactivation.md): A mode in which the search controller shows the scope bar when search becomes active, and hides it after search cancellation.

# UISearchControllerScopeBarActivationManual (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A mode that gives you manual control over when to show and hide the scope bar.

## Declaration

```objectivec
UISearchControllerScopeBarActivationManual
```

<a id="Discussion"></a>

## Discussion

When you use this mode, you control when to show and hide the scope bar through the [showsScopeBar](../../uisearchbar/showsscopebar.md) property on the [searchBar](../searchbar.md) of the [UISearchController](../../uisearchcontroller.md).

## See Also

### Constants

- [UISearchControllerScopeBarActivationAutomatic](automatic.md): A mode in which the system automatically determines when to show and hide the scope bar.
- [UISearchControllerScopeBarActivationOnTextEntry](ontextentry.md): A mode in which the search controller shows the scope bar when typing begins in the search field, and hides it after search cancellation.
- [UISearchControllerScopeBarActivationOnSearchActivation](onsearchactivation.md): A mode in which the search controller shows the scope bar when search becomes active, and hides it after search cancellation.
