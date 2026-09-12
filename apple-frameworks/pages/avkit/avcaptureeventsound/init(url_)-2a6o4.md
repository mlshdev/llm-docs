> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventsound/init(url:)-2a6o4](https://developer.apple.com/documentation/avkit/avcaptureeventsound/init(url:)-2a6o4)

# init(url:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a sound object for a capture event.

## Declaration

```swift
init(url: URL) throws
```

## Parameters

- `url`: A URL within the app’s bundle for a custom capture sound.

# initWithURL:error: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates a sound object for a capture event.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: A URL within the app’s bundle for a custom capture sound.
- `error`: A return by-reference error that specifies any error in creating the sound object.
