> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcell/focusstyle-swift.enum/custom](https://developer.apple.com/documentation/uikit/uitableviewcell/focusstyle-swift.enum/custom)

# UITableViewCell.FocusStyle.custom (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The cell doesn’t alter its appearance automatically when it becomes focused.

## Declaration

```swift
case custom
```

<a id="Discussion"></a>

## Discussion

Specifying this style allows you to create your own custom appearance for the cell. It’s recommended that you create custom-looking cells by subclassing [UITableViewCell](../../uitableviewcell.md) and overriding [didUpdateFocus(in:with:)](../../uifocusenvironment/didupdatefocus%28in_with_%29.md).

## See Also

### Constants

- [UITableViewCell.FocusStyle.default](default.md): The cell alters its appearance in a standard, system-defined way when it becomes focused.

# UITableViewCellFocusStyleCustom (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The cell doesn’t alter its appearance automatically when it becomes focused.

## Declaration

```objectivec
UITableViewCellFocusStyleCustom
```

<a id="Discussion"></a>

## Discussion

Specifying this style allows you to create your own custom appearance for the cell. It’s recommended that you create custom-looking cells by subclassing [UITableViewCell](../../uitableviewcell.md) and overriding [didUpdateFocusInContext:withAnimationCoordinator:](../../uifocusenvironment/didupdatefocus%28in_with_%29.md).

## See Also

### Constants

- [UITableViewCellFocusStyleDefault](default.md): The cell alters its appearance in a standard, system-defined way when it becomes focused.
