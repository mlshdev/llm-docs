> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparameters/init(dictionary:)

# init(dictionary:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns a new play parameters object using information from MusicKit.

## Declaration

```swift
init?(dictionary: [String : Any])
```

## Parameters

- `dictionary`: The JSON information returned from a MusicKit query.

<a id="return-value"></a>

## Return Value

A new play parameters object consisting of the information retrieved from MusicKit.

<a id="Discussion"></a>

## Discussion

Create a new `MPMusicPlayerPlayParameters` object using the JSON information returned from a MusicKit query.

# initWithDictionary: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns a new play parameters object using information from MusicKit.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,id> *) dictionary;
```

## Parameters

- `dictionary`: The JSON information returned from a MusicKit query.

<a id="return-value"></a>

## Return Value

A new play parameters object consisting of the information retrieved from MusicKit.

<a id="Discussion"></a>

## Discussion

Create a new `MPMusicPlayerPlayParameters` object using the JSON information returned from a MusicKit query.
