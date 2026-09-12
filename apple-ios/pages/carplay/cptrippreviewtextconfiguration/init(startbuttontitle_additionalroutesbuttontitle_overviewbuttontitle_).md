> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptrippreviewtextconfiguration/init(startbuttontitle:additionalroutesbuttontitle:overviewbuttontitle:)](https://developer.apple.com/documentation/carplay/cptrippreviewtextconfiguration/init(startbuttontitle:additionalroutesbuttontitle:overviewbuttontitle:))

# init(startButtonTitle:additionalRoutesButtonTitle:overviewButtonTitle:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a trip preview text configuration object.

## Declaration

```swift
init(startButtonTitle: String?, additionalRoutesButtonTitle: String?, overviewButtonTitle: String?)
```

## Parameters

- `startButtonTitle`: The title to display on the start button. Set to `nil` to display the system-provided title.
- `additionalRoutesButtonTitle`: The title to display on the routes button. Set to `nil` to display the system-provided title.
- `overviewButtonTitle`: The title to display on the overview button. Set to `nil` to display the system-provided title.

<a id="return-value"></a>

## Return Value

A newly initialized trip preview text configuration.

# initWithStartButtonTitle:additionalRoutesButtonTitle:overviewButtonTitle: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a trip preview text configuration object.

## Declaration

```objectivec
- (instancetype) initWithStartButtonTitle:(NSString *) startButtonTitle additionalRoutesButtonTitle:(NSString *) additionalRoutesButtonTitle overviewButtonTitle:(NSString *) overviewButtonTitle;
```

## Parameters

- `startButtonTitle`: The title to display on the start button. Set to `nil` to display the system-provided title.
- `additionalRoutesButtonTitle`: The title to display on the routes button. Set to `nil` to display the system-provided title.
- `overviewButtonTitle`: The title to display on the overview button. Set to `nil` to display the system-provided title.

<a id="return-value"></a>

## Return Value

A newly initialized trip preview text configuration.
