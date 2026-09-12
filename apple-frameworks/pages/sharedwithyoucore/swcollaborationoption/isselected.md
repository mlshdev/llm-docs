> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption/isselected](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/isselected)

# isSelected (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that represents the selected state of an option.

## Declaration

```swift
var isSelected: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

For switches, the app can manually set `isSelected`.

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [requiredOptionsIdentifiers](requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](title.md): A localized string the system displays as a title to represent the permissions option.

# selected (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that represents the selected state of an option.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isSelected) BOOL selected;
```

<a id="Discussion"></a>

## Discussion

For switches, the app can manually set `isSelected`.

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [requiredOptionsIdentifiers](requiredoptionsidentifiers.md): An array of option identifiers that the app must select before the system makes the option interactive.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](title.md): A localized string the system displays as a title to represent the permissions option.
