> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/invalidatedetents()](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/invalidatedetents())

# invalidateDetents() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the sheet to re-evaluate its detent value in the next layout pass.

## Declaration

```swift
func invalidateDetents()
```

<a id="Discussion"></a>

## Discussion

When an external input (like a captured property) to a custom detent changes, call this method to notify the sheet to re-evaluate the detent.

To animate custom detents to their new heights, call this method within [animateChanges(\_:)](animatechanges%28__%29.md).

> **Note**

>  You don’t need to call this method if [detents](detents.md) only contains system detents, or if your custom detents only use information from the passed-in context.

# invalidateDetents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Notifies the sheet to re-evaluate its detent value in the next layout pass.

## Declaration

```objectivec
- (void) invalidateDetents;
```

<a id="Discussion"></a>

## Discussion

When an external input (like a captured property) to a custom detent changes, call this method to notify the sheet to re-evaluate the detent.

To animate custom detents to their new heights, call this method within [animateChanges:](animatechanges%28__%29.md).

> **Note**

>  You don’t need to call this method if [detents](detents.md) only contains system detents, or if your custom detents only use information from the passed-in context.
