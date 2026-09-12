> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-c.class/hidden](https://developer.apple.com/documentation/uikit/uicellaccessory-c.class/hidden)

# hidden

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that determines whether the cell hides the accessory.

## Declaration

```objectivec
@property (nonatomic, getter=isHidden) BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

A hidden accessory takes up space in the layout, but it isn’t visible and doesn’t provide any behaviors.

Use this property to achieve a consistent layout across cells when some cells show this type of accessory and others don’t.

## See Also

### Customizing appearance

- [tintColor](tintcolor.md): The tint color to apply to the accessory.
- [displayedState](displayedstate.md): The cell-editing states that the accessory appears in.
- [UICellAccessoryDisplayedState](../uicellaccessorydisplayedstate.md): Constants that describe the cell-editing states that the accessory appears in.
