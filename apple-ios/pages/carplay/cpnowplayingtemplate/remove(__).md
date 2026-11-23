> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/remove(_:)

# remove(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Unregisters an observer and stops it from receiving events related to the Now Playing interface.

## Declaration

```swift
func remove(_ observer: any CPNowPlayingTemplateObserver)
```

## Parameters

- `observer`: An object you previously registered as an observer.

<a id="discussion"></a>

## Discussion

Call this method to remove an observer object you previously registered with a call to the [add(\_:)](add%28__%29.md) method.

## See Also

### Adding and removing observers

- [add(\_:)](add%28__%29.md): Registers an observer to handle events related to the Now Playing interface.

# removeObserver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Unregisters an observer and stops it from receiving events related to the Now Playing interface.

## Declaration

```objectivec
- (void) removeObserver:(id<CPNowPlayingTemplateObserver>) observer;
```

## Parameters

- `observer`: An object you previously registered as an observer.

<a id="discussion"></a>

## Discussion

Call this method to remove an observer object you previously registered with a call to the [addObserver:](add%28__%29.md) method.

## See Also

### Adding and removing observers

- [addObserver:](add%28__%29.md): Registers an observer to handle events related to the Now Playing interface.
