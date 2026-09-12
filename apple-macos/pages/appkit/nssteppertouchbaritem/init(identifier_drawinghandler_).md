> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssteppertouchbaritem/init(identifier:drawinghandler:)](https://developer.apple.com/documentation/appkit/nssteppertouchbaritem/init(identifier:drawinghandler:))

# init(identifier:drawingHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, drawingHandler: @escaping (NSRect, Double) -> Void)
```

## Parameters

- `drawingHandler`: A block that draws a graphical representation of the stepper’s value in the specified rectangle. The coordinates of this rectangle are specified in points.

## See Also

### Creating a stepper item

- [init(identifier:formatter:)](init%28identifier_formatter_%29.md): Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.

# stepperTouchBarItemWithIdentifier:drawingHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.

## Declaration

```objectivec
+ (instancetype) stepperTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier drawingHandler:(void (^)(NSRect rect, double value)) drawingHandler;
```

## Parameters

- `drawingHandler`: A block that draws a graphical representation of the stepper’s value in the specified rectangle. The coordinates of this rectangle are specified in points.

## See Also

### Creating a stepper item

- [stepperTouchBarItemWithIdentifier:formatter:](init%28identifier_formatter_%29.md): Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.
