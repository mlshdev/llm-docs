> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcinputarcadebuttonname](https://developer.apple.com/documentation/gamecontroller/gcinputarcadebuttonname)

# GCInputArcadeButtonName

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the name of the arcade stick button at the specified location.

## Declaration

```objectivec
extern GCInputButtonNameGCInputArcadeButtonName(NSInteger row, NSInteger column);
```

## Parameters

- `row`: The row on the arcade stick that the button appears in, where `0` is the bottom row.
- `column`: The column on the arcade stick that the button appears in, where `0` is the column nearest to the lever or direction buttons.

<a id="return-value"></a>

## Return Value

The name of an arcade stick button.
