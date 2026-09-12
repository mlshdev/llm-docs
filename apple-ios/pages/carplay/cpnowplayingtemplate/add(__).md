> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/add(_:)](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/add(_:))

# add(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Registers an observer that receives Now Playing template events.

## Declaration

```swift
func add(_ observer: any CPNowPlayingTemplateObserver)
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

## See Also

### Observing Now Playing Events

- [remove(\_:)](remove%28__%29.md): Removes an observer from receiving Now Playing template events.
- [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.

# addObserver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Registers an observer that receives Now Playing template events.

## Declaration

```objectivec
- (void) addObserver:(id<CPNowPlayingTemplateObserver>) observer;
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

## See Also

### Observing Now Playing Events

- [removeObserver:](remove%28__%29.md): Removes an observer from receiving Now Playing template events.
- [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.
