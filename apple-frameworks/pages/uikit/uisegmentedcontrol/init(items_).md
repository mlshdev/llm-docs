> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/init(items:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/init(items:))

# init(items:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a segmented control with segments having the given titles or images.

## Declaration

```swift
init(items: [Any]?)
```

## Parameters

- `items`: An array of [NSString](../../foundation/nsstring.md) objects (for segment titles), [UIImage](../uiimage.md) objects (for segment images), or in iOS 14.0 and later [UIAction](../uiaction.md) objects.

<a id="return-value"></a>

## Return Value

A `UISegmentedControl` object or `nil` if there was a problem in initializing the object.

<a id="Discussion"></a>

## Discussion

The system automatically sizes the returned segmented control to fit its content within the width of its superview.

## See Also

### Creating a segmented control

- [init(frame:actions:)](init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [init(frame:)](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [init(coder:)](init%28coder_%29.md): Creates a segmented control with data from an unarchiver.

# initWithItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a segmented control with segments having the given titles or images.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray *) items;
```

## Parameters

- `items`: An array of [NSString](../../foundation/nsstring.md) objects (for segment titles), [UIImage](../uiimage.md) objects (for segment images), or in iOS 14.0 and later [UIAction](../uiaction.md) objects.

<a id="return-value"></a>

## Return Value

A `UISegmentedControl` object or `nil` if there was a problem in initializing the object.

<a id="Discussion"></a>

## Discussion

The system automatically sizes the returned segmented control to fit its content within the width of its superview.

## See Also

### Creating a segmented control

- [initWithFrame:actions:](init%28frame_actions_%29.md): Creates a segmented control with the given frame and adds segments for the actions you specify.
- [initWithFrame:](init%28frame_%29.md): Creates an empty segmented control with the frame you specify.
- [initWithCoder:](init%28coder_%29.md): Creates a segmented control with data from an unarchiver.
