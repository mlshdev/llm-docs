> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/init(filenamed:)](https://developer.apple.com/documentation/scenekit/scnaudiosource/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes an audio source from an audio file in the application’s main bundle.

## Declaration

```swift
convenience init?(fileNamed name: String)
```

## Parameters

- `name`: The name of an audio file in the application’s main bundle.

<a id="return-value"></a>

## Return Value

A new audio source object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [Bundle](../../foundation/bundle.md) class to locate an audio file in the application’s main bundle and then passing the resulting URL to the [init(url:)](init%28url_%29-3qyjs.md) method.

## See Also

### Creating an Audio Source

- [init(named:)](init%28named_%29.md): Returns the audio source associated with the specified filename.
- [init(url:)](init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.

# initWithFileNamed: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio source from an audio file in the application’s main bundle.

## Declaration

```objectivec
- (instancetype) initWithFileNamed:(NSString *) name;
```

## Parameters

- `name`: The name of an audio file in the application’s main bundle.

<a id="return-value"></a>

## Return Value

A new audio source object.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to using the [NSBundle](../../foundation/bundle.md) class to locate an audio file in the application’s main bundle and then passing the resulting URL to the [initWithURL:](init%28url_%29-3qyjs.md) method.

## See Also

### Creating an Audio Source

- [audioSourceNamed:](init%28named_%29.md): Returns the audio source associated with the specified filename.
- [initWithURL:](init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.
