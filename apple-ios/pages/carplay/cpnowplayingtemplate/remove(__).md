> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingtemplate/remove(_:)](https://developer.apple.com/documentation/carplay/cpnowplayingtemplate/remove(_:))

# remove(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes an observer from receiving Now Playing template events.

## Declaration

```swift
func remove(_ observer: any CPNowPlayingTemplateObserver)
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

<a id="Discussion"></a>

## Discussion

You must register an observer using the [add(\_:)](add%28__%29.md) method before calling this method.

## See Also

### Observing Now Playing Events

- [add(\_:)](add%28__%29.md): Registers an observer that receives Now Playing template events.
- [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.

# removeObserver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes an observer from receiving Now Playing template events.

## Declaration

```objectivec
- (void) removeObserver:(id<CPNowPlayingTemplateObserver>) observer;
```

## Parameters

- `observer`: An object that implements the [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md) protocol.

<a id="Discussion"></a>

## Discussion

You must register an observer using the [addObserver:](add%28__%29.md) method before calling this method.

## See Also

### Observing Now Playing Events

- [addObserver:](add%28__%29.md): Registers an observer that receives Now Playing template events.
- [CPNowPlayingTemplateObserver](../cpnowplayingtemplateobserver.md): The methods for responding to the user interacting with the Now Playing template.
