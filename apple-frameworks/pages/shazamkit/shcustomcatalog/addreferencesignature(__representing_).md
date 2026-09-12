> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcustomcatalog/addreferencesignature(_:representing:)](https://developer.apple.com/documentation/shazamkit/shcustomcatalog/addreferencesignature(_:representing:))

# addReferenceSignature(\_:representing:) (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a reference signature and its associated metadata to a catalog.

## Declaration

```swift
func addReferenceSignature(_ signature: SHSignature, representing mediaItems: [SHMediaItem]) throws
```

## Parameters

- `signature`: The reference signature for the audio recording.
- `mediaItems`: The metadata for the recording.

<a id="Discussion"></a>

## Discussion

> **Note**

>  This system ignores calls to `addReferenceSignature(_:representing:)` after adding the catalog to an `SHSession`.

# addReferenceSignature:representingMediaItems:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a reference signature and its associated metadata to a catalog.

## Declaration

```objectivec
- (BOOL) addReferenceSignature:(SHSignature *) signature representingMediaItems:(NSArray<SHMediaItem *> *) mediaItems error:(NSError **) error;
```

## Parameters

- `signature`: The reference signature for the audio recording.
- `mediaItems`: The metadata for the recording.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

> **Note**

>  This system ignores calls to `addReferenceSignature(_:representing:)` after adding the catalog to an `SHSession`.
