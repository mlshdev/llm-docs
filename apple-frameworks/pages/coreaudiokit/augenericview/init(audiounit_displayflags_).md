> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/augenericview/init(audiounit:displayflags:)](https://developer.apple.com/documentation/coreaudiokit/augenericview/init(audiounit:displayflags:))

# init(audioUnit:displayFlags:) (Swift)

**Framework:** CoreAudioKit  
**Kind:** Initializer  
**Availability:** macOS 10.4+

Initializes a generic view for an audio unit, setting specific display flags.

## Declaration

```swift
init(audioUnit inAudioUnit: AudioUnit, displayFlags inFlags: AUGenericViewDisplayFlags)
```

## Parameters

- `inAudioUnit`: The audio unit associated with the generic view.
- `inFlags`: One or more flags that specify display properties. You can combine multiple flags using the logical `OR` (`|`) operator. For the available flags, see `Generic View Display Flags`.

<a id="return-value"></a>

## Return Value

The initialized audio unit associated with the generic view, with display flags set.

## Topics

### Display Flags

- [AUGenericViewDisplayFlags](../augenericviewdisplayflags.md): Flags that describe the display of a generic view.

## See Also

### Creating a Generic View

- [init(audioUnit:)](init%28audiounit_%29.md): Creates a generic view for an audio unit, setting all display flags.

# initWithAudioUnit:displayFlags: (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Initializes a generic view for an audio unit, setting specific display flags.

## Declaration

```objectivec
- (AUGenericView *) initWithAudioUnit:(AudioUnit) inAudioUnit displayFlags:(AUGenericViewDisplayFlags) inFlags;
```

## Parameters

- `inAudioUnit`: The audio unit associated with the generic view.
- `inFlags`: One or more flags that specify display properties. You can combine multiple flags using the logical `OR` (`|`) operator. For the available flags, see `Generic View Display Flags`.

<a id="return-value"></a>

## Return Value

The initialized audio unit associated with the generic view, with display flags set.

## Topics

### Display Flags

- [AUGenericViewDisplayFlags](../augenericviewdisplayflags.md): Flags that describe the display of a generic view.

## See Also

### Creating a Generic View

- [initWithAudioUnit:](init%28audiounit_%29.md): Creates a generic view for an audio unit, setting all display flags.
