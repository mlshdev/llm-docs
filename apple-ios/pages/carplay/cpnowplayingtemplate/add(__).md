> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/add(_:)

# add(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Registers an observer to handle events related to the Now Playing interface.

## Declaration

```swift
func add(_ observer: any CPNowPlayingTemplateObserver)
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

<a id="discussion"></a>

## Discussion

Call this method if your app supports the Album Artist or Up Next buttons in the Now Playing interface. The template directs interactions with these buttons to all registered observers.

## See Also

### Adding and removing observers

- [remove(\_:)](remove%28__%29.md): Unregisters an observer and stops it from receiving events related to the Now Playing interface.

# addObserver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Registers an observer to handle events related to the Now Playing interface.

## Declaration

```objectivec
- (void) addObserver:(id<CPNowPlayingTemplateObserver>) observer;
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

<a id="discussion"></a>

## Discussion

Call this method if your app supports the Album Artist or Up Next buttons in the Now Playing interface. The template directs interactions with these buttons to all registered observers.

## See Also

### Adding and removing observers

- [removeObserver:](remove%28__%29.md): Unregisters an observer and stops it from receiving events related to the Now Playing interface.
