> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmediaselectiongroup/makenowplayinginfolanguageoptiongroup()](https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/makenowplayinginfolanguageoptiongroup())

# makeNowPlayingInfoLanguageOptionGroup() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a language option group from the media selection group.

## Declaration

```swift
func makeNowPlayingInfoLanguageOptionGroup() -> MPNowPlayingInfoLanguageOptionGroup
```

<a id="return-value"></a>

## Return Value

The new language option group.

<a id="Discussion"></a>

## Discussion

Any option from [AVMediaSelectionOption](../avmediaselectionoption.md) in the [AVMediaSelectionGroup](../avmediaselectiongroup.md) not representing an audible or legible selection option is ignored.

# makeNowPlayingInfoLanguageOptionGroup (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a language option group from the media selection group.

## Declaration

```objectivec
- (MPNowPlayingInfoLanguageOptionGroup *) makeNowPlayingInfoLanguageOptionGroup;
```

<a id="return-value"></a>

## Return Value

The new language option group.

<a id="Discussion"></a>

## Discussion

Any option from [AVMediaSelectionOption](../avmediaselectionoption.md) in the [AVMediaSelectionGroup](../avmediaselectiongroup.md) not representing an audible or legible selection option is ignored.
