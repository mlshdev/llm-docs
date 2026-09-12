> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption/title](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/title)

# title (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A localized string the system displays as a title to represent the permissions option.

## Declaration

```swift
var title: String { get set }
```

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [isSelected](isselected.md): A Boolean value that represents the selected state of an option.
- [requiredOptionsIdentifiers](requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.

# title (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A localized string the system displays as a title to represent the permissions option.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * title;
```

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [selected](isselected.md): A Boolean value that represents the selected state of an option.
- [requiredOptionsIdentifiers](requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
