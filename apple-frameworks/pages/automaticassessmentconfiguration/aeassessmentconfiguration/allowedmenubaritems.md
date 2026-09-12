> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowedmenubaritems](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowedmenubaritems)

# allowedMenuBarItems (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of menu bar items that should remain visible during an assessment.

## Declaration

```swift
var allowedMenuBarItems: Set<AEMenuBarItem>? { get set }
```

<a id="discussion"></a>

## Discussion

When [allowsMenuBar](allowsmenubar.md) is `true`, the menu bar is restricted to only the items specified in this set. If this property is `nil`, all menu bar items are allowed (unrestricted menu bar).

> **Note**

> This property only takes effect when [allowsMenuBar](allowsmenubar.md) is `true`.

# allowedMenuBarItems (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of menu bar items that should remain visible during an assessment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSSet<NSString *> * allowedMenuBarItems;
```

<a id="discussion"></a>

## Discussion

When [allowsMenuBar](allowsmenubar.md) is `true`, the menu bar is restricted to only the items specified in this set. If this property is `nil`, all menu bar items are allowed (unrestricted menu bar).

> **Note**

> This property only takes effect when [allowsMenuBar](allowsmenubar.md) is `true`.
