> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swcollaborationoption/requiredoptionsidentifiers](https://developer.apple.com/documentation/sharedwithyoucore/swcollaborationoption/requiredoptionsidentifiers)

# requiredOptionsIdentifiers (Swift)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of option identifiers that the app must select before the system makes the option interactive.

## Declaration

```swift
var requiredOptionsIdentifiers: [String] { get set }
```

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [isSelected](isselected.md): A Boolean value that represents the selected state of an option.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](title.md): A localized string the system displays as a title to represent the permissions option.

# requiredOptionsIdentifiers (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An array of option identifiers that the app must select before the system makes the option interactive.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * requiredOptionsIdentifiers;
```

## See Also

### Accessing option attributes

- [identifier](identifier.md): A unique identifier.
- [selected](isselected.md): A Boolean value that represents the selected state of an option.
- [subtitle](subtitle.md): A localized string the system displays to represent the permissions option in the collaboration view.
- [title](title.md): A localized string the system displays as a title to represent the permissions option.
