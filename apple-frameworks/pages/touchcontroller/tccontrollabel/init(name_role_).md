> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccontrollabel/init(name:role:)](https://developer.apple.com/documentation/touchcontroller/tccontrollabel/init(name:role:))

# init(name:role:) (Swift)

**Framework:** Touch Controller  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a new instance with the provided name and type.

## Declaration

```swift
init(name: String, role: TCControlLabel.Role)
```

## Parameters

- `name`: The name of the control label. Corresponds to the input name on the game controller’s physical input profile.
- `role`: The role of the control label. Corresponds to the type of the `GCControllerElement`on the `GCController`.

<a id="return-value"></a>

## Return Value

A new `TCControlLabel` instance.

# initWithName:role: (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a new instance with the provided name and type.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name role:(TCControlLabelRole) role;
```

## Parameters

- `name`: The name of the control label. Corresponds to the input name on the game controller’s physical input profile.
- `role`: The role of the control label. Corresponds to the type of the `GCControllerElement`on the `GCController`.

<a id="return-value"></a>

## Return Value

A new `TCControlLabel` instance.
