> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/init(coder:)](https://developer.apple.com/documentation/uikit/uibutton/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new button with data in an unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

## See Also

### Creating buttons

- [init(frame:)](init%28frame_%29.md): Creates a new button with the specified frame.
- [init(frame:primaryAction:)](init%28frame_primaryaction_%29.md): Creates a new button with the specified frame, registers the primary action event, and sets the title and image to the action’s title and image.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new button with data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

## See Also

### Creating buttons

- [initWithFrame:](init%28frame_%29.md): Creates a new button with the specified frame.
- [initWithFrame:primaryAction:](init%28frame_primaryaction_%29.md): Creates a new button with the specified frame, registers the primary action event, and sets the title and image to the action’s title and image.
