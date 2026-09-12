> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssound/soundunfilteredtypes](https://developer.apple.com/documentation/appkit/nssound/soundunfilteredtypes)

# soundUnfilteredTypes (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Provides the file types the `NSSound` class understands.

## Declaration

```swift
class var soundUnfilteredTypes: [String] { get }
```

<a id="return-value"></a>

## Return Value

Array of UTIs identifying the file types the `NSSound` class understands.

## See Also

### Getting Sound Information

- [init(named:)](init%28named_%29.md): Returns the `NSSound` instance associated with a given name.
- [duration](duration.md): The duration of the sound, in seconds.

# soundUnfilteredTypes (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Provides the file types the `NSSound` class understands.

## Declaration

```objectivec
@property (class, copy, readonly) NSArray<NSString *> * soundUnfilteredTypes;
```

<a id="return-value"></a>

## Return Value

Array of UTIs identifying the file types the `NSSound` class understands.

## See Also

### Getting Sound Information

- [soundNamed:](init%28named_%29.md): Returns the `NSSound` instance associated with a given name.
- [duration](duration.md): The duration of the sound, in seconds.
