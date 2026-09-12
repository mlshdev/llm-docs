> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppanelbuttonconfiguration/init(primaryaction:secondaryaction:)](https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration/init(primaryaction:secondaryaction:))

# init(primaryAction:secondaryAction:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a button configuration with a primary action and an optional secondary action.

## Declaration

```swift
init(primaryAction: CPTextButton, secondaryAction: CPTextButton?)
```

## Parameters

- `primaryAction`: The primary text button for the panel.
- `secondaryAction`: An optional secondary @c CPTextButton.

<a id="return-value"></a>

## Return Value

A new @c CPPanelButtonConfiguration instance

# initWithPrimaryAction:secondaryAction: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a button configuration with a primary action and an optional secondary action.

## Declaration

```objectivec
- (instancetype) initWithPrimaryAction:(CPTextButton *) primaryAction secondaryAction:(CPTextButton *) secondaryAction;
```

## Parameters

- `primaryAction`: The primary text button for the panel.
- `secondaryAction`: An optional secondary @c CPTextButton.

<a id="return-value"></a>

## Return Value

A new @c CPPanelButtonConfiguration instance
