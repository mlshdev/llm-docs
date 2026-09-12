> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationtimelineentry/timelineanimationgroup](https://developer.apple.com/documentation/clockkit/clkcomplicationtimelineentry/timelineanimationgroup)

# timelineAnimationGroup (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The animation group to which the entry belongs.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var timelineAnimationGroup: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use animation groups to created animated transitions between some, but not all, timeline entries. During Time Travel, ClockKit creates transition animations between entries with different group identifiers. ClockKit also creates transitions between entries whose identifiers are both `nil`. When the group identifiers are the same, ClockKit doesn’t create transition animations.

The group identifier is used only to determine whether transition animations should be created. The contents of the string may be anything that helps you identify the group to your app.

## See Also

### Setting the Entry Values

- [date](date.md): Deprecated. The time at which to display the entry.
- [complicationTemplate](complicationtemplate.md): Deprecated. The template containing the data to display in your complication.

# timelineAnimationGroup (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The animation group to which the entry belongs.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, copy) NSString * timelineAnimationGroup;
```

<a id="Discussion"></a>

## Discussion

Use animation groups to created animated transitions between some, but not all, timeline entries. During Time Travel, ClockKit creates transition animations between entries with different group identifiers. ClockKit also creates transitions between entries whose identifiers are both `nil`. When the group identifiers are the same, ClockKit doesn’t create transition animations.

The group identifier is used only to determine whether transition animations should be created. The contents of the string may be anything that helps you identify the group to your app.

## See Also

### Setting the Entry Values

- [date](date.md): Deprecated. The time at which to display the entry.
- [complicationTemplate](complicationtemplate.md): Deprecated. The template containing the data to display in your complication.
