> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/aupannerview/init(audiounit:)](https://developer.apple.com/documentation/coreaudiokit/aupannerview/init(audiounit:))

# init(audioUnit:) (Swift)

**Framework:** CoreAudioKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Creates a panner view for an audio unit.

## Declaration

```swift
init(audioUnit au: AudioUnit)
```

## Parameters

- `au`: The panner audio unit associated with the panner view.

<a id="return-value"></a>

## Return Value

The newly instantiated panner view. On error, returns `nil`.

<a id="Discussion"></a>

## Discussion

Call this static constructor as follows:

```objc
AUPannerView *mGenericPannerView = nil;
mGenericPannerView = [AUPannerView AUPannerViewWithAudioUnit: mCurrentAU];
```

# AUPannerViewWithAudioUnit: (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Type Method  
**Availability:** macOS 10.5+

Creates a panner view for an audio unit.

## Declaration

```objectivec
+ (AUPannerView *) AUPannerViewWithAudioUnit:(AudioUnit) au;
```

## Parameters

- `au`: The panner audio unit associated with the panner view.

<a id="return-value"></a>

## Return Value

The newly instantiated panner view. On error, returns `nil`.

<a id="Discussion"></a>

## Discussion

Call this static constructor as follows:

```objc
AUPannerView *mGenericPannerView = nil;
mGenericPannerView = [AUPannerView AUPannerViewWithAudioUnit: mCurrentAU];
```
