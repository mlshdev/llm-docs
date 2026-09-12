> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/init(named:)](https://developer.apple.com/documentation/scenekit/scnaudiosource/init(named:))

# init(named:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the audio source associated with the specified filename.

## Declaration

```swift
convenience init?(named fileName: String)
```

## Parameters

- `fileName`: The name of an audio file. If this filename has not been previously requested, the method looks for an audio file with the specified name in the application’s main bundle.

<a id="return-value"></a>

## Return Value

An audio source object.

<a id="Discussion"></a>

## Discussion

This method looks in the system caches for an audio source with the specified name and returns that object if it exists. If a matching audio source is not already in the cache, this method locates the audio file with the specified name in the application’s main bundle, then creates a new audio source and caches it for reuse.

## See Also

### Creating an Audio Source

- [init(fileNamed:)](init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.
- [init(url:)](init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.

# audioSourceNamed: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the audio source associated with the specified filename.

## Declaration

```objectivec
+ (instancetype) audioSourceNamed:(NSString *) fileName;
```

## Parameters

- `fileName`: The name of an audio file. If this filename has not been previously requested, the method looks for an audio file with the specified name in the application’s main bundle.

<a id="return-value"></a>

## Return Value

An audio source object.

<a id="Discussion"></a>

## Discussion

This method looks in the system caches for an audio source with the specified name and returns that object if it exists. If a matching audio source is not already in the cache, this method locates the audio file with the specified name in the application’s main bundle, then creates a new audio source and caches it for reuse.

## See Also

### Creating an Audio Source

- [initWithFileNamed:](init%28filenamed_%29.md): Initializes an audio source from an audio file in the application’s main bundle.
- [initWithURL:](init%28url_%29-3qyjs.md): Initializes an audio source from the specified audio file.
