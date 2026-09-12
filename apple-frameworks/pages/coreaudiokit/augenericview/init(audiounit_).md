> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/augenericview/init(audiounit:)](https://developer.apple.com/documentation/coreaudiokit/augenericview/init(audiounit:))

# init(audioUnit:) (Swift)

**Framework:** CoreAudioKit  
**Kind:** Initializer  
**Availability:** macOS 10.4+

Creates a generic view for an audio unit, setting all display flags.

## Declaration

```swift
init(audioUnit au: AudioUnit)
```

## Parameters

- `au`: The audio unit associated with the generic view.

<a id="return-value"></a>

## Return Value

The initialized generic view. On error, returns `nil`.

## See Also

### Creating a Generic View

- [init(audioUnit:displayFlags:)](init%28audiounit_displayflags_%29.md): Initializes a generic view for an audio unit, setting specific display flags.

# initWithAudioUnit: (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Creates a generic view for an audio unit, setting all display flags.

## Declaration

```objectivec
- (AUGenericView *) initWithAudioUnit:(AudioUnit) au;
```

## Parameters

- `au`: The audio unit associated with the generic view.

<a id="return-value"></a>

## Return Value

The initialized generic view. On error, returns `nil`.

## See Also

### Creating a Generic View

- [initWithAudioUnit:displayFlags:](init%28audiounit_displayflags_%29.md): Initializes a generic view for an audio unit, setting specific display flags.
