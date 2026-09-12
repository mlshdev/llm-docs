> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssteppertouchbaritem/init(identifier:formatter:)](https://developer.apple.com/documentation/appkit/nssteppertouchbaritem/init(identifier:formatter:))

# init(identifier:formatter:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.

## Declaration

```swift
convenience init(identifier: NSTouchBarItem.Identifier, formatter: Formatter)
```

## Parameters

- `formatter`: A formatter used to display a textual representation of the stepper’s value

## See Also

### Creating a stepper item

- [init(identifier:drawingHandler:)](init%28identifier_drawinghandler_%29.md): Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.

# stepperTouchBarItemWithIdentifier:formatter: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

Creates a `NSStepperTouchBarItem` with a `formatter` to display the stepper’s value as text.

## Declaration

```objectivec
+ (instancetype) stepperTouchBarItemWithIdentifier:(NSTouchBarItemIdentifier) identifier formatter:(NSFormatter *) formatter;
```

## Parameters

- `formatter`: A formatter used to display a textual representation of the stepper’s value

## See Also

### Creating a stepper item

- [stepperTouchBarItemWithIdentifier:drawingHandler:](init%28identifier_drawinghandler_%29.md): Creates a `NSStepperTouchBarItem` using the result of `drawingHandler` to display the stepper’s value as an image.
