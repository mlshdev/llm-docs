> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cipluginregistration/load(_:)](https://developer.apple.com/documentation/coreimage/cipluginregistration/load(_:))

# load(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS

Loads and initializes an image unit, performing custom tasks as needed.

## Declaration

```swift
func load(_ host: UnsafeMutableRawPointer!) -> Bool
```

## Parameters

- `host`: Reserved for future use.

<a id="return-value"></a>

## Return Value

Returns `true` if the image unit is successfully initialized

<a id="Discussion"></a>

## Discussion

The `load` method is called once by the host to initialize the image unit when the first filter in the image unit is instantiated. The method provides the image unit with an opportunity to perform custom initialization, such as a registration check.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)

# load: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** macOS

Loads and initializes an image unit, performing custom tasks as needed.

## Declaration

```objectivec
- (BOOL) load:(void *) host;
```

## Parameters

- `host`: Reserved for future use.

<a id="return-value"></a>

## Return Value

Returns `true` if the image unit is successfully initialized

<a id="Discussion"></a>

## Discussion

The `load` method is called once by the host to initialize the image unit when the first filter in the image unit is instantiated. The method provides the image unit with an opportunity to perform custom initialization, such as a registration check.

## See Also

### Related Documentation

- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)
