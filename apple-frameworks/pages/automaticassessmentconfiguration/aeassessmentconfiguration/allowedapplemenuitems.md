> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowedapplemenuitems](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowedapplemenuitems)

# allowedAppleMenuItems (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of allowed Apple menu items during an assessment.

## Declaration

```swift
var allowedAppleMenuItems: Set<AEAppleMenuItem>? { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `nil`, which leaves every Apple menu item available. Setting a non-`nil` set restricts the menu to the items it names; pass an empty set to restrict all of them. Some constants cover more than one menu item.

> **Note**

> [aboutThisMac](../aeapplemenuitem/aboutthismac.md) is always visible during assessment sessions regardless of configuration.

# allowedAppleMenuItems (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

The set of allowed Apple menu items during an assessment.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSSet<NSString *> * allowedAppleMenuItems;
```

<a id="discussion"></a>

## Discussion

Defaults to `nil`, which leaves every Apple menu item available. Setting a non-`nil` set restricts the menu to the items it names; pass an empty set to restrict all of them. Some constants cover more than one menu item.

> **Note**

> [AEAppleMenuItemAboutThisMac](../aeapplemenuitem/aboutthismac.md) is always visible during assessment sessions regardless of configuration.
