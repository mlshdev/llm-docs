> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanelbuttonconfiguration/init(primaryaction:secondaryaction:)

# init(primaryAction:secondaryAction:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the button configuration object with the specified buttons.

## Declaration

```swift
init(primaryAction: CPTextButton, secondaryAction: CPTextButton?)
```

## Parameters

- `primaryAction`: The primary button for the panel. Use this button to specify the default or primary action someone might want to perform. The initializer makes a copy of the provided button.
- `secondaryAction`: The secondary button for the panel. Use this to specify an additional action someone might want to perform. The initializer makes a copy of the provided button, if any.

<a id="return-value"></a>

## Return Value

An initialized panel button configuration object.

# initWithPrimaryAction:secondaryAction: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes the button configuration object with the specified buttons.

## Declaration

```objectivec
- (instancetype) initWithPrimaryAction:(CPTextButton *) primaryAction secondaryAction:(CPTextButton *) secondaryAction;
```

## Parameters

- `primaryAction`: The primary button for the panel. Use this button to specify the default or primary action someone might want to perform. The initializer makes a copy of the provided button.
- `secondaryAction`: The secondary button for the panel. Use this to specify an additional action someone might want to perform. The initializer makes a copy of the provided button, if any.

<a id="return-value"></a>

## Return Value

An initialized panel button configuration object.
