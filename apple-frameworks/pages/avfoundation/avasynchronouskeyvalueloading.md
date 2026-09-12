> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronouskeyvalueloading](https://developer.apple.com/documentation/avfoundation/avasynchronouskeyvalueloading)

# AVAsynchronousKeyValueLoading (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the interface to load media data asynchronously.

## Declaration

```swift
protocol AVAsynchronousKeyValueLoading
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)

<a id="overview"></a>

## Overview

Loading media data takes an amount of time that depends on factors including the media’s size, location, device capabilities, network conditions, and so on. To optimize performance, [AVAsset](avasset.md) defers loading its media data until you query its properties or perform an operation that requires it. This means that performing these actions from a synchronous context would block the calling thread for an unknown amount of time, which would result in a poor user experience, and may even cause your app to crash. For this reason, you must load media data asynchronously.

Call the asynchronous [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the values of media properties, or determine the loaded status of a property by calling the [status(of:)](avasynchronouskeyvalueloading/status%28of_%29.md) method. See [Loading media data asynchronously](loading-media-data-asynchronously.md) for more information.

## Topics

### Loading property values

- [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md): Loads a property asynchronously and returns the value.
- [load(\_:\_:\_:isolation:)](avasynchronouskeyvalueloading/load%28______isolation_%29.md): Loads two or more properties asynchronously and returns the values.

### Determining the loaded status

- [status(of:)](avasynchronouskeyvalueloading/status%28of_%29.md): Returns a value that indicates the loaded status of a property.

### Deprecated

- [Deprecated symbols](avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronously(forKeys:completionHandler:)](avasynchronouskeyvalueloading/loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [statusOfValue(forKey:error:)](avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.
- [AVKeyValueStatus](avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.

## Relationships

### Conforming Types

- [AVAsset](avasset.md)
- [AVAssetTrack](avassettrack.md)
- [AVComposition](avcomposition.md)
- [AVCompositionTrack](avcompositiontrack.md)
- [AVFragmentedAsset](avfragmentedasset.md)
- [AVFragmentedAssetTrack](avfragmentedassettrack.md)
- [AVFragmentedMovie](avfragmentedmovie.md)
- [AVFragmentedMovieTrack](avfragmentedmovietrack.md)
- [AVMetadataItem](avmetadataitem.md)
- [AVMovie](avmovie.md)
- [AVMovieTrack](avmovietrack.md)
- [AVMutableComposition](avmutablecomposition.md)
- [AVMutableCompositionTrack](avmutablecompositiontrack.md)
- [AVMutableMetadataItem](avmutablemetadataitem.md)
- [AVMutableMovie](avmutablemovie.md)
- [AVMutableMovieTrack](avmutablemovietrack.md)
- [AVURLAsset](avurlasset.md)

## See Also

### Property loading

- [AVAsyncProperty](avasyncproperty.md): An asynchronous property that constrains its type and value.
- [AVPartialAsyncProperty](avpartialasyncproperty.md): An asynchronous property that constrains its type.
- [AVAnyAsyncProperty](avanyasyncproperty.md): A base class for asynchronous properties.

# AVAsynchronousKeyValueLoading (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A protocol that defines the interface to load media data asynchronously.

## Declaration

```objectivec
@protocol AVAsynchronousKeyValueLoading
```

## Mentioned In

- [Loading media data asynchronously](loading-media-data-asynchronously.md)

<a id="overview"></a>

## Overview

Loading media data takes an amount of time that depends on factors including the media’s size, location, device capabilities, network conditions, and so on. To optimize performance, [AVAsset](avasset.md) defers loading its media data until you query its properties or perform an operation that requires it. This means that performing these actions from a synchronous context would block the calling thread for an unknown amount of time, which would result in a poor user experience, and may even cause your app to crash. For this reason, you must load media data asynchronously.

Call the asynchronous [load(\_:isolation:)](avasynchronouskeyvalueloading/load%28__isolation_%29.md) method to retrieve the values of media properties, or determine the loaded status of a property by calling the [status(of:)](avasynchronouskeyvalueloading/status%28of_%29.md) method. See [Loading media data asynchronously](loading-media-data-asynchronously.md) for more information.

## Topics

### Deprecated

- [Deprecated symbols](avasynchronouskeyvalueloading-deprecated-symbols.md): Review unsupported symbols and their replacements.
- [loadValuesAsynchronouslyForKeys:completionHandler:](avasynchronouskeyvalueloading/loadvaluesasynchronously%28forkeys_completionhandler_%29.md): Deprecated. Tells the asset to load the values of all of the specified keys that aren’t already loaded.
- [statusOfValueForKey:error:](avasynchronouskeyvalueloading/statusofvalue%28forkey_error_%29.md): Deprecated. Returns a status that indicates whether a property value is immediately available without blocking the calling thread.
- [AVKeyValueStatus](avkeyvaluestatus.md): Deprecated. Values that indicate the loaded status of a property.

## Relationships

### Conforming Types

- [AVAsset](avasset.md)
- [AVAssetTrack](avassettrack.md)
- [AVMetadataItem](avmetadataitem.md)
