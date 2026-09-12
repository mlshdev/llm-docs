> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/init(url:)-3qyjs](https://developer.apple.com/documentation/scenekit/scnaudiosource/init(url:)-3qyjs)

# init(url:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Initializes an audio source from the specified audio file.

## Declaration

```swift
init?(url: URL)
```

## Parameters

- `url`: A URL locating an audio file.

<a id="return-value"></a>

## Return Value

A new audio source object.

## See Also

### Creating an Audio Source

- [init(named:)](init%28named_%29.md): Returns the audio source associated with the specified filename.
- [init(fileNamed:)](init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.

# initWithURL: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes an audio source from the specified audio file.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL locating an audio file.

<a id="return-value"></a>

## Return Value

A new audio source object.

## See Also

### Creating an Audio Source

- [audioSourceNamed:](init%28named_%29.md): Returns the audio source associated with the specified filename.
- [initWithFileNamed:](init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.
