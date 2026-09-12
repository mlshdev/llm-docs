> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitab/identifier](https://developer.apple.com/documentation/uikit/uitab/identifier)

# identifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A string identifier for a tab.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Each identifier must be unique across all the tabs managed by a [UITabBarController](../uitabbarcontroller.md).

## See Also

### Accessing a tab’s appearance

- [title](title.md): A tab’s title.
- [subtitle](subtitle.md): A tab’s subtitle.
- [image](image.md): A tab’s image.
- [badgeValue](badgevalue.md): A tab’s badge value.
- [viewController](viewcontroller.md): The view controller that the system presents when someone selects a tab.

# identifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A string identifier for a tab.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Each identifier must be unique across all the tabs managed by a [UITabBarController](../uitabbarcontroller.md).

## See Also

### Accessing a tab’s appearance

- [title](title.md): A tab’s title.
- [subtitle](subtitle.md): A tab’s subtitle.
- [image](image.md): A tab’s image.
- [badgeValue](badgevalue.md): A tab’s badge value.
- [viewController](viewcontroller.md): The view controller that the system presents when someone selects a tab.
