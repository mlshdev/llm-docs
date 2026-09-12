> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputassistantitem/leadingbarbuttongroups](https://developer.apple.com/documentation/uikit/uitextinputassistantitem/leadingbarbuttongroups)

# leadingBarButtonGroups (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

The array of button item groups to display before the typing suggestions.

## Declaration

```swift
var leadingBarButtonGroups: [UIBarButtonItemGroup] { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property installs the corresponding bar button items so that they lead the typing suggestions. (In a left-to-right environment, leading items are placed to the left of the typing suggestions.) If there is not enough room to display all of the items, UIKit may display a group’s representative item instead, if one was provided.

## See Also

### Configuring the shortcuts bar

- [trailingBarButtonGroups](trailingbarbuttongroups.md): The array of button item groups to display after the typing suggestions.
- [allowsHidingShortcuts](allowshidingshortcuts.md): A Boolean value that indicates whether the user can hide the shortcuts bar.

# leadingBarButtonGroups (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

The array of button item groups to display before the typing suggestions.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<UIBarButtonItemGroup *> * leadingBarButtonGroups;
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property installs the corresponding bar button items so that they lead the typing suggestions. (In a left-to-right environment, leading items are placed to the left of the typing suggestions.) If there is not enough room to display all of the items, UIKit may display a group’s representative item instead, if one was provided.

## See Also

### Configuring the shortcuts bar

- [trailingBarButtonGroups](trailingbarbuttongroups.md): The array of button item groups to display after the typing suggestions.
- [allowsHidingShortcuts](allowshidingshortcuts.md): A Boolean value that indicates whether the user can hide the shortcuts bar.
