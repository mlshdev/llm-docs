> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounit/instantiate(with:options:completionhandler:)](https://developer.apple.com/documentation/audiotoolbox/auaudiounit/instantiate(with:options:completionhandler:))

# instantiate(with:options:completionHandler:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates an audio unit instance.

## Declaration

```swift
class func instantiate(with componentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions = [], completionHandler: @escaping @Sendable (AUAudioUnit?, (any Error)?) -> Void)
```

```swift
class func instantiate(with componentDescription: AudioComponentDescription, options: AudioComponentInstantiationOptions = []) async throws -> AUAudioUnit
```

## Parameters

- `componentDescription`: The component to instantiate.
- `options`: Options for loading the unit in-process or out-of-process.
- `completionHandler`: The block called when instantiation has completed. The block parameters are defined as follows:

  - **audioUnit**: An initialized audio unit if the operation succeeded, or `nil` if it failed.
  - **error**: An error if the operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

Certain types of audio units must be instantiated asynchronously, such as version 3 units with a view.

> **Note**

>  Do not block the main thread while waiting for the completion handler to be called; this can deadlock.

## See Also

### Creating an Audio Unit

- [init(componentDescription:)](init%28componentdescription_%29.md): Synchronously initializes a new audio unit object.
- [init(componentDescription:options:)](init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.

# instantiateWithComponentDescription:options:completionHandler: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates an audio unit instance.

## Declaration

```objectivec
+ (void) instantiateWithComponentDescription:(AudioComponentDescription) componentDescription options:(AudioComponentInstantiationOptions) options completionHandler:(void (^)(AUAudioUnit *audioUnit, NSError *error)) completionHandler;
```

## Parameters

- `componentDescription`: The component to instantiate.
- `options`: Options for loading the unit in-process or out-of-process.
- `completionHandler`: The block called when instantiation has completed. The block parameters are defined as follows:

  - **audioUnit**: An initialized audio unit if the operation succeeded, or `nil` if it failed.
  - **error**: An error if the operation failed, or `nil` if it succeeded.

<a id="Discussion"></a>

## Discussion

Certain types of audio units must be instantiated asynchronously, such as version 3 units with a view.

> **Note**

>  Do not block the main thread while waiting for the completion handler to be called; this can deadlock.

## See Also

### Creating an Audio Unit

- [initWithComponentDescription:error:](init%28componentdescription_%29.md): Synchronously initializes a new audio unit object.
- [initWithComponentDescription:options:error:](init%28componentdescription_options_%29.md): Synchronously initializes a new audio unit object.
