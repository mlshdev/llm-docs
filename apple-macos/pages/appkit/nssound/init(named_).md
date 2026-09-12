> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/init(named:)](https://developer.apple.com/documentation/appkit/nssound/init(named:))

# init(named:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns the `NSSound` instance associated with a given name.

## Declaration

```swift
init?(named name: NSSound.Name)
```

## Parameters

- `name`: Name that identifies sound data.

<a id="return-value"></a>

## Return Value

`NSSound` instance initialized with the sound data identified by `soundName`.

<a id="Discussion"></a>

## Discussion

The returned object can be one of the following:

- One that’s been assigned a name with the [name](name-swift.property.md) property
- One of the named system sounds provided by the Application Kit framework

If there’s no known `NSSound` object with `soundName`, this method tries to create one by searching for sound files in the application’s main bundle (see [Bundle](https://developer.apple.com/documentation/foundation/bundle) for a description of how the bundle’s contents are searched). If no sound file can be located in the application main bundle, the following directories are searched in order:

- `~/Library/Sounds`
- `/Library/Sounds`
- `/Network/Library/Sounds`
- `/System/Library/Sounds`

If no data can be found for `soundName`, no object is created, and `nil` is returned.

The preferred way to locate a sound is to pass a name without the file extension. See the class description for a list of the supported sound file extensions.

## See Also

### Getting Sound Information

- [soundUnfilteredTypes](soundunfilteredtypes.md): Provides the file types the `NSSound` class understands.
- [duration](duration.md): The duration of the sound, in seconds.

# soundNamed: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the `NSSound` instance associated with a given name.

## Declaration

```objectivec
+ (NSSound *) soundNamed:(NSSoundName) name;
```

## Parameters

- `name`: Name that identifies sound data.

<a id="return-value"></a>

## Return Value

`NSSound` instance initialized with the sound data identified by `soundName`.

<a id="Discussion"></a>

## Discussion

The returned object can be one of the following:

- One that’s been assigned a name with the [name](name-swift.property.md) property
- One of the named system sounds provided by the Application Kit framework

If there’s no known `NSSound` object with `soundName`, this method tries to create one by searching for sound files in the application’s main bundle (see [NSBundle](https://developer.apple.com/documentation/foundation/bundle) for a description of how the bundle’s contents are searched). If no sound file can be located in the application main bundle, the following directories are searched in order:

- `~/Library/Sounds`
- `/Library/Sounds`
- `/Network/Library/Sounds`
- `/System/Library/Sounds`

If no data can be found for `soundName`, no object is created, and `nil` is returned.

The preferred way to locate a sound is to pass a name without the file extension. See the class description for a list of the supported sound file extensions.

## See Also

### Getting Sound Information

- [soundUnfilteredTypes](soundunfilteredtypes.md): Provides the file types the `NSSound` class understands.
- [duration](duration.md): The duration of the sound, in seconds.
