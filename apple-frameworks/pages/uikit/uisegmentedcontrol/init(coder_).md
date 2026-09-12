> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/init(coder:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a segmented control with data from an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The unarchiver to read data from.

## See Also

### Creating a segmented control

- [init(items:)](init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [init(frame:actions:)](init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [init(frame:)](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a segmented control with data from an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The unarchiver to read data from.

## See Also

### Creating a segmented control

- [initWithItems:](init%28items_%29.md): Creates a segmented control with segments having the given titles or images.
- [initWithFrame:actions:](init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [initWithFrame:](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
